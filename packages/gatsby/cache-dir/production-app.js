import { apiRunner, apiRunnerAsync } from "./api-runner-browser"
import React, { createElement } from "react"
import ReactDOM from "react-dom"
import { Router, navigate as reachNavigate } from "@reach/router"
import { globalHistory } from "@reach/router/lib/history"
import { ScrollContext } from "gatsby-react-router-scroll"
import domReady from "domready"
import {
  shouldUpdateScroll,
  init as navigationInit,
} from "./navigation"
import emitter from "./emitter"
window.___emitter = emitter
import PageRenderer from "./page-renderer"
import asyncRequires from "./async-requires"
import loader, { setApiRunnerForLoader } from "./loader"
import parsePath from "./parse-path"

window.asyncRequires = asyncRequires
window.___emitter = emitter
window.___loader = loader

setApiRunnerForLoader(apiRunner)
loader.addPagesArray([window.page])
loader.addDataPaths({ [window.page.jsonName]: window.dataPath })
loader.addProdRequires(asyncRequires)

navigationInit()

// Let the site/plugins run code very early.
apiRunnerAsync(`onClientEntry`).then(() => {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if (apiRunner(`registerServiceWorker`).length > 0) {
    require(`./register-service-worker`)
  }

  // Call onRouteUpdate on the initial page load.
  apiRunner(`onRouteUpdate`, {
    location: window.history.location,
  })

  class RouteHandler extends React.Component {
    render() {
      const { location } = this.props
      let child

      // TODO
      // check if hash + if element and if so scroll
      // remove hash handling from gatsby-link
      // check if scrollbehavior handles back button for
      // restoring old position
      // if not, add that.

      if (loader.getPage(location.pathname)) {
        child = createElement(PageRenderer, {
          isPage: true,
          ...this.props,
        })
      } else {
        child = createElement(PageRenderer, {
          isPage: true,
          location: { pathname: `/404.html` },
        })
      }

      return (
        <ScrollContext
          location={location}
          shouldUpdateScroll={shouldUpdateScroll}
        >
          {child}
        </ScrollContext>
      )
    }
  }  

  loader.getResourcesForPathname(window.location.pathname, () => {
    const Root = () =>
      createElement(
        Router,
        {
          basepath: __PATH_PREFIX__,
        },
        createElement(RouteHandler, { path: `/*` })
      )

    const NewRoot = apiRunner(`wrapRootComponent`, { Root }, Root)[0]

    const renderer = apiRunner(
      `replaceHydrateFunction`,
      undefined,
      ReactDOM.hydrate
    )[0]

    domReady(() => {
      renderer(
        <NewRoot />,
        typeof window !== `undefined`
          ? document.getElementById(`___gatsby`)
          : void 0,
        () => {
          apiRunner(`onInitialClientRender`)
        }
      )
    })
  })
})
