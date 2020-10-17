import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from "prop-types";

/**
 * @description Progress Component
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Get Progress
     */
    getProgress() {
        let {progress, maxProgress} = this.props;
        progress = progress || 0;
        maxProgress = maxProgress || 100;
        if(progress>maxProgress){
            progress = maxProgress;
        } else {
            progress = progress/maxProgress;
        }
        return progress;
    }

    /**
     * Render Method

     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Progress-Component'
