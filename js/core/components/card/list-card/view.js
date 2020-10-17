import React from 'react'
import styles from './styles'
import { Image, Text, View } from 'react-native'
import ArivaaCard from '../main'
import Link from '../../link'

var view = function () {
    const {style, headerContent, footerContent, data} = this.props
    const propStyles = this.props.styles || {}
    const bodyContent = (
        <View style={propStyles.body}>
            {
                data ? (
                    data.map((item, index) => {
                        return (
                            <Link key={index} style={propStyles.listItemContainer}
                                  onPress={this.onItemClick.bind(this, item, index)}>
                                <View
                                    style={[styles.item, (data.length === index+1) ? styles.lastItem : null, propStyles.listItem]}>
                                    <Image source={item.image} resizeMode={'cover'}
                                           style={[styles.image, propStyles.listItemImage]}/>
                                    <View style={[styles.text, propStyles.listItemTextContainer]}>
                                        <Text style={[styles.title, propStyles.listItemTitle]}>{item.title}</Text>
                                        <Text
                                            style={[styles.subTitle, propStyles.listItemSubTitle]}>{item.subTitle}</Text>
                                    </View>
                                </View>
                            </Link>
                        )
                    })
                ) : null
            }
        </View>
    )
    return (
        <ArivaaCard
            style={style}
            headerContent={headerContent}
            bodyContent={bodyContent}
            footerContent={footerContent || null}
        />
    )
}
module.exports = view
