import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import { Card, Text } from 'antd-mobile-rn'

/**
 * View
 * @returns {XML}
 */
var view = function () {
    let {headerContent, bodyContent, footerContent, style} = this.props
    let propStyles = this.props.styles
    propStyles = propStyles || {}
    headerContent = headerContent || null
    bodyContent = bodyContent || null
    footerContent = footerContent || null
    if (this.isString(headerContent)) {
        headerContent = <Text style={[styles.headerText, propStyles.headerText]}>{headerContent}</Text>
    }

    if (this.isString(bodyContent)) {
        bodyContent = <Text style={[styles.bodyText, propStyles.bodyText]}>{bodyContent}</Text>
    }

    if (this.isString(footerContent)) {
        footerContent = <Text style={[styles.footerText, propStyles.footerText]}>{footerContent}</Text>
    }
    return (
        <View style={propStyles.container}>
            <Card style={[styles.card, style, propStyles.card]}>
                {
                    headerContent ? (
                        <Card.Header
                            style={[styles.cardHeader, propStyles.header]}
                            title={headerContent}
                        />
                    ) : <View/>
                }
                <Card.Body style={[styles.cardBody, !headerContent ? styles.noHeader : null, propStyles.body]}>
                    {bodyContent}
                </Card.Body>
                {
                    footerContent ? (
                        <Card.Footer
                            style={[styles.cardFooter, propStyles.footer]}
                            content={footerContent}
                        />
                    ) : <View/>
                }
            </Card>
        </View>
    )
}
module.exports = view
