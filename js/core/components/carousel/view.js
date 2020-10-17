import React from 'react'
import styles from './styles'
import { Dimensions, Platform, Text, TouchableHighlight, View } from 'react-native'
import Link from '../link'
import Thumbnail from '../thumbnail'
import ImageCard from '../card/image-card'
import Carousel from 'react-native-snap-carousel'
import { getModifiedProps } from '../util'
import Icon from '../icon'

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window')

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100
    return Math.round(value)
}

const slideHeight = viewportHeight * 0.36
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2
var view = function () {
    /**
     * Next and Previous Arrow put under touchable highlight
     */
    const {data, previousArrow, nextArrow} = this.props
    const {selectedIndex} = this.state
    return (
        <View>
            <Carousel
                data={data}
                layout={'default'}
                ref={(ref) => {
                    this.carouselRef = ref
                }}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                slideHeight={slideHeight}
                renderItem={renderItem}
                firstItem={selectedIndex}
                {...getModifiedProps(this.props, ['thumbnails', 'arrows'])}
                onSnapToItem={this.onSnapToItem.bind(this)}
            />
            {
                this.isThumbnailsEnabled() ? (
                    <View style={[styles.thumbnails]}>
                        {data.map((item, index) => {
                            let image = null
                            if (typeof item == 'string') {
                                image = item
                            } else if (typeof item == 'object') {
                                image = (typeof item.slide == 'string') ? item.slide : null
                            }
                            return image ? (
                                <Link key={index}
                                      onPress={this.goToImage.bind(this, index)}
                                      style={[styles.thumbnailLink, (index == selectedIndex) ? styles.selectedThumbnail : null]}>
                                    <Thumbnail
                                        icon={'ios-image-outline'}
                                        style={[styles.thumbnail]}
                                        source={image}/>
                                </Link>
                            ) : null

                        })}
                    </View>
                ) : null
            }
            {
                this.isArrowsEnabled() ? (
                    <View style={[styles.arrows]}>
                        {
                            previousArrow ? (
                                <TouchableHighlight underlayColor={'transparent'} onPress={this.goPrevious.bind(this)}>
                                    {previousArrow}
                                </TouchableHighlight>
                            ) : (
                                <TouchableHighlight underlayColor={'transparent'} onPress={this.goPrevious.bind(this)}>
                                    <Icon type="feather" style={[styles.arrow]} name='arrow-left-circle'/>
                                </TouchableHighlight>
                            )
                        }
                        {
                            nextArrow ? (
                                <TouchableHighlight underlayColor={'transparent'} onPress={this.goNext.bind(this)}>
                                    {nextArrow}
                                </TouchableHighlight>
                            ) : (
                                <TouchableHighlight underlayColor={'transparent'} onPress={this.goNext.bind(this)}>
                                    <Icon type="feather" style={[styles.arrow]} name='arrow-right-circle'/>
                                </TouchableHighlight>
                            )
                        }
                    </View>
                ) : null
            }
        </View>
    )
}
/**
 * Render each item
 * @param item
 * @param index
 * @returns {XML}
 */
const renderItem = ({item, index}) => {
    let image, title
    let view = null
    if (typeof item == 'string') {
        image = item
    } else if (typeof item == 'object') {
        title = item.title
        if ((typeof item.slide == 'string')) {
            image = item.slide
        } else {
            view = item.slide
        }
    } else {
        //Image and title will be null
        image = null
        title = null
    }
    item = {}
    return (
        <View key={index}>
            {
                image ? (
                    <ImageCard
                        style={[styles.cardStyle]}
                        image={image}
                        imageStyles={styles.imageStyles}
                        overlay={!!title}
                        overlayTitle={title}
                        overlaySubTitle={item.subtitle || ''}
                    />
                ) : view
            }
            {
                title ? (
                    <Text>{item.title}</Text>
                ) : null
            }
        </View>
    )

}
module.exports = view
