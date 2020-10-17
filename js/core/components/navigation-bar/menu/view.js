import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import Link from '../../link'
import Icon from '../../icon'
import { getReactNode } from '../../util'

/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {title, style, leftMenu, rightMenu} = this.props
    const propStyles = this.props.styles || {}

    return (
        <View style={[styles.header, style, propStyles.container]}>
            <View style={[styles.headerLeft, propStyles.menuLeft]}>
                {
                    (leftMenu || []).map((item, index) => {
                        if (typeof item == 'string' || typeof item == 'number') {
                            item = {
                                icon: item
                            }
                        }
                        return item ? (
                            <Link key={index}
                                  style={[styles.leftLink, propStyles.menuLeftItem]}
                                  link={item.link}
                                  onPress={this.onItemClick.bind(this, item, index, 'left')}>
                                {

                                    getReactNode(item.content, {
                                        style: [styles.content, propStyles.menuLeftText]
                                    }) || (
                                        <Text style={[styles.content, propStyles.menuLeftText]}>
                                            <Icon
                                                name={item.icon}
                                                style={[styles.menuIcon]}
                                                {...item.iconProps}
                                            />
                                        </Text>
                                    )
                                }
                            </Link>
                        ) : null
                    })
                }
                {
                    getReactNode(title, {
                        style: [styles.headerTitle, propStyles.title]
                    })
                }
            </View>
            <View style={[styles.headerRight, propStyles.menuRight]}>
                {
                    (rightMenu || []).map((item, index) => {
                        if (typeof item == 'string' || typeof item == 'number') {
                            item = {
                                icon: item
                            }
                        }
                        return item ? (
                            <Link
                                key={index}
                                link={item.link}
                                style={[styles.rightLink, propStyles.menuRightItem]}
                                onPress={this.onItemClick.bind(this, item, index, 'right')}>
                                {
                                    getReactNode(item.content, {
                                        style: [styles.content, propStyles.menuRightText]
                                    }) || (
                                        <Text style={[styles.content, propStyles.menuRightText]}>
                                            <Icon
                                                name={item.icon}
                                                style={[styles.menuIcon]}
                                                {...item.iconProps}
                                            />
                                        </Text>
                                    )
                                }
                            </Link>
                        ) : null
                    })
                }
            </View>
        </View>
    )
}
module.exports = view
