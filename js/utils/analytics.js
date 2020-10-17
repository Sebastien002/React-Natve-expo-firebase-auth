/**
 * Helper for analytics
 */
import * as Segment from 'expo-analytics-segment';
/**
 * Configure analytics
 * @param android
 * @param ios
 */
export function configure({android, ios}) {
    Segment.initialize({
        androidWriteKey: android,
        iosWriteKey: ios
    })
}
/**
 * Identify logged in user
 * @param userId
 * @param traits
 */
export function identifyUser(userId, traits) {
    Segment.identifyWithTraits(userId, traits)
}
/**
 * Clears user
 */
export function clearUser() {
    Segment.reset();
}
/**
 * Track event with or without properties
 * @param event
 * @param properties
 */
export function trackEvent(event, properties) {
    if (properties) {
        Segment.trackWithProperties(event, properties)
    } else {
        Segment.track(event)
    }
}
/**
 * track screen with properties or without it
 * @param screenName
 * @param properties
 */
export function recordScreenTransition(screenName, properties) {
    if (properties) {
        Segment.screenWithProperties(screenName, properties)
    } else {
        Segment.screen(screenName)
    }

}
