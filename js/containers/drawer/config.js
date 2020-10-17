/**
 * In title put the translation key from drawer.json
 * in config/translations folder
 *
 * onPress - function to be called that is exposed via getDrawerFunctions in
 * main.js
 * @type {[*]}
 */
var drawerItems = [{
    title: 'drawer.home',
    route: 'home',
    icon: 'home'
}, {
    title: 'drawer.profile',
    route: 'profile',
    icon: 'user'
}, {
    title: 'drawer.elements',
    route: 'elements',
    icon: 'layers',
    new: true
}, {
    title: 'drawer.analytics',
    route: 'analytics',
    icon: 'bar-chart'
}, {
    title: 'drawer.admob',
    route: 'admob',
    icon: 'bookmark',
}, {
    title: 'drawer.facebookAds',
    route: 'facebookAds',
    icon: 'facebook'
}, {
    title: 'drawer.pushnotifications',
    route: 'pushNotifications',
    icon: 'bell'
}, {
    title: 'drawer.map',
    route: 'map',
    icon: 'map'
}, {
    title: 'drawer.changePassword',
    route: 'changePassword',
    icon: 'lock'
}, {
    title: 'drawer.logout',
    onPress: 'logout',
    icon: 'log-out'
}]

export default drawerItems
