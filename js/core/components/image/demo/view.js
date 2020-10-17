import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import Image from '../main'
import {getRandom} from '../../util';
import {Colors} from 'arivaa-basic/styles'
var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Our Image component is a wrapper on top of React Native image component with
                the support for progress indicator until the image is loaded.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Image Demo</Text>
                <View style={[styles.demo]}>
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Image with Custom Indicator</Text>
                <View style={[styles.demo]}>
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicatorProps = {{
                            type : 'bars',
                            size : 10,
                            color : Colors.brandGoogle
                        }}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicatorProps = {{
                            type : 'radar',
                            size : 30,
                            color : Colors.brandFacebook
                        }}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicatorProps = {{
                            color : Colors.brandGrey
                        }}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Image without Indicator</Text>
                <View style={[styles.demo]}>
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicator = {null}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicator = {null}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        indicator = {null}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Images in Loading State</Text>
                <View style={[styles.demo]}>
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        loading = {true}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        loading = {true}
                    />
                    <Image
                        style={[styles.image]}
                        source={getRandom("image")}
                        loading = {true}
                    />
                </View>
            </View>
        </View>
    )
}
module.exports = view
