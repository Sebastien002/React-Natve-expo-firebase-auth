import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from "prop-types";

/**
 * @description Carousel Component
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
        this.state = {
            selectedIndex: props.selectedIndex || 0
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
    }

    /**
     * componentWillReceiveProps Hook
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex != this.props.selectedIndex) {
            this.goToImage(nextProps.selectedIndex)
        }
    }

    /**
     * Go to specific slide
     * @param index
     */
    goToImage(index) {
        this.carouselRef.snapToItem(index)

    }

    /**
     * Go to next slide
     */
    goNext() {
        this.carouselRef.snapToNext();
        const {onNext} = this.props;
        if (onNext instanceof Function) {
            onNext();
        }
    }

    /**
     * Go to previous slide
     */
    goPrevious() {
        this.carouselRef.snapToPrev();
        const {onPrevious} = this.props;
        if (onPrevious instanceof Function) {
            onPrevious();
        }
    }

    /**
     * On Snap to a specific slide
     * @param index
     */
    onSnapToItem(index) {
        this.setState({
            selectedIndex: index
        });
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            onChange(index);
        }
    }

    /**
     * Check if thumbnails are enabled
     * @returns {boolean}
     */
    isThumbnailsEnabled() {
        const {thumbnails} = this.props
        return !(thumbnails == false)
    }

    /**
     * Check if Arrows are enabled
     * @returns {boolean}
     */
    isArrowsEnabled() {
        const {arrows} = this.props
        return !(arrows == false)
    }

    /**
     * Get Current Index
     */
    getCurrentIndex() {
        return this.state.selectedIndex;
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.propTypes = {
    autoplay: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    thumbnails: PropTypes.func,
    arrows: PropTypes.func
}

Main.displayName = 'Carousel-Component'
