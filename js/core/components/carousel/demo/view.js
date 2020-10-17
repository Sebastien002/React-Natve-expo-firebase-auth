import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import Carousel from '../main'
import {ImageCard} from '../../card'
import Icon from '../../icon'
import {getRandom} from '../../util'
var view = function () {
    let data = [];
    let data2 = [];
    let data3 = [];
    for (let i = 0; i < 5; i++) {
        data.push(getRandom("image"))
        data2.push({
            slide: getRandom("image"),
            title: getRandom("quote")
        });
        data3.push({
            slide: (<ImageCard image={getRandom("image")} overlayTitle = {getRandom("quote")}/>),
            title: getRandom("quote")
        });

    }

    return (
        <View style={styles.container}>
            <Text style={[styles.description]}>
                The carousel is a lightbox or slide show component for cycling through a series of content. Our Carousel works with a series of images,
                text, or custom markup. We provide a lot of customization options like custom arrows, thumbnails and event handlers
                in order to suit a variety of scenarios.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Carousel</Text>
                <Carousel
                    autoplay={false}
                    data={data3}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Carousel with Thumbnails</Text>
                <Carousel
                    autoplay={false}
                    selectedIndex={this.state.selectedIndex}
                    data={data2}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Carousel with Autoplay</Text>
                <Carousel
                    autoplay={true}
                    data={data}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Carousel with Custom Arrows</Text>
                <Carousel
                    autoplay={true}
                    data={data}
                    previousArrow={<Icon type="feather" style={[styles.arrow]} name='chevron-left'/>}
                    nextArrow={<Icon type="feather" style={[styles.arrow]} name='chevron-right'/>}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Carousel with onChange handler</Text>
                <Carousel
                    autoplay={false}
                    data={data}
                    onChange={(index) => {
                        alert('Slide changed to ' + index)
                    }}
                />
            </View>
        </View>
    )
}
module.exports = view
