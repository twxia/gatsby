/**
 * Called when the Gatsby browser runtime first starts.
 * @example
 * exports.onClientEntry = () => {
 *   console.log("We've started!")
 *   callAnalyticsAPI()
 * }
 */
exports.onClientEntry = true

/**
 * Called when the initial (but not subsequent) render of Gatsby App is done on the client.
 * @example
 * exports.onInitialClientRender = () => {
 *   console.log("ReactDOM.render has executed")
 * }
 */
exports.onInitialClientRender = true

/**
 * Called when changing location is started.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object} $0.action The "action" that caused the route change
 * @example
 * exports.onPreRouteUpdate = ({ location }) => {
 *   console.log("Gatsby started to change location", location.pathname)
 * }
 */
exports.onPreRouteUpdate = true

/**
 * Called when changing location is longer than 1 second.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object} $0.action The "action" that caused the route change
 * @example
 * exports.onRouteUpdateDelayed = () => {
 *   console.log("We can show loading indicator now")
 * }
 */
exports.onRouteUpdateDelayed = true

/**
 * Called when the user changes routes
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object} $0.action The "action" that caused the route change
 * @example
 * exports.onRouteUpdate = ({ location }) => {
 *   console.log('new pathname', location.pathname)
 * }
 */
exports.onRouteUpdate = true

/**
 * Allow a plugin to decide if the "scroll" should update or
 * not on a route change.
 * @param {object} $0
 * @param {object} $0.prevRouterProps The previous state of the router before the route change.
 * @param {object} $0.pathname The new pathname
 */
exports.shouldUpdateScroll = true

/**
 * Allow a plugin to register a Service Worker. Should be a function that returns true.
 * @example
 * exports.registerServiceWorker = () => true
 */
exports.registerServiceWorker = true

/**
 * Allow a plugin to replace the page component renderer. This api runner can be used to
 * implement page transitions. See https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions for an example of this.
 * @param {object} $0
 * @param {object} $0.props The props of the page.
 * @param {object} $0.loader The gatsby loader.
 */
exports.replaceComponentRenderer = true

/**
 * Allow a plugin to wrap the root component.
 * @param {object} $0
 * @param {object} $0.Root The "Root" component built by Gatsby.
 */
exports.wrapRootComponent = true

/**
 * Called when prefetching for a pathname is triggered. Allows
 * for plugins with custom prefetching logic.
 * @param {object} $0
 * @param {object} $0.pathname The pathname whose resources should now be prefetched
 * @param {object} $0.getResourcesForPathname Function for fetching resources related to pathname
 */
exports.onPrefetchPathname = true

/**
 * Plugins can take over prefetching logic. If they do, they should call this
 * to disable the now duplicate core prefetching logic.
 */
exports.disableCorePrefetching = true

/*
 * Allow a plugin to replace the ReactDOM.render function call by a custom renderer.
 * This method takes no param and should return a function with same signature as ReactDOM.render()
 * Note it's very important to call the callback after rendering, otherwise Gatsby will not be able to call `onInitialClientRender`
 * @example
 * exports.replaceHydrateFunction = () => {
 *   return (element, container, callback) => {
 *     console.log("rendering!");
 *     ReactDOM.render(element, container, callback);
 *   };
 * };
 */
exports.replaceHydrateFunction = true

/**
 * Inform plugins when a service worker has been installed.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 */
exports.onServiceWorkerInstalled = true

/**
 * Inform plugins of when a service worker has an update available.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 */
exports.onServiceWorkerUpdateFound = true

/**
 * Inform plugins when a service worker has become active.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 */
exports.onServiceWorkerActive = true

/**
 * Inform plugins when a service worker is redundant.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 */
exports.onServiceWorkerRedundant = true
