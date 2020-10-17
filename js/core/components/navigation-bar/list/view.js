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
    const {menu, style} = this.props
    const propStyles = this.props.styles || {}
    return (
        <View style={[styles.navigationView, style, propStyles.container]}>
            <View style={[styles.navigation, propStyles.menu]}>
                {
                    (menu || []).map((item, index) => {
                        if (typeof item == 'string' || typeof item == 'number') {
                            item = {
                                content: item
                            }
                        }
                        const active = item.active || this.isActive(item.link)
                        return (
                            <Link key={index}
                                  link={item.link}
                                  onPress={this.onItemClick.bind(this, item, index)}
                                  style={propStyles.menuItemContainer}
                            >
                                <View style={[styles.navigationItem, propStyles.menuItem]}>
                                    {
                                        item.icon ? (
                                            <Icon name={item.icon}
                                                  style={[styles.navigationIcon, propStyles.menuItemIcon, active ? [styles.active, propStyles.menuItemActive] : null]}/>
                                        ) : null
                                    }
                                    {
                                        getReactNode(item.content, {
                                            style: [styles.navigationText, propStyles.menuItemText, active ? [styles.active, propStyles.menuItemActive] : null]
                                        })
                                    }
                                </View>
                            </Link>
                        )
                    })
                }
            </View>
        </View>
    )
}
module.exports = view
