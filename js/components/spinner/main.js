import React, {Component} from "react";
import {Toast} from "arivaa-basic/components";
/**
 * Start Spinning
 * Config Format -
 * content -> Content for spinner
 * duration -> Duration
 * onClose -> On close handler
 * mask -> Whether to show Mask or not
 * @param config
 */
function start(config) {
    config = config || {};
    let content = "Loading..." || config.content;
    let mask = config.mask || true;
    let {duration, onClose} = config;
    duration = duration || 100000;
    Toast.loading(content, duration, onClose, mask);
}
/**
 * Stop Spinning
 */
function stop() {
    Toast.hide()
}

export default {
    start,
    stop
}