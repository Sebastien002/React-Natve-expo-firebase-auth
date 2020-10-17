import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import Loader from '../main'
import { Colors } from 'arivaa-basic/styles'

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Loaders are used to indicate that a task or activity is in waiting state.
                We provide a lot of options to choose from when it comes to loaders.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Bubbles</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            type="bubbles"
                            size={5}
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            type="bubbles"
                            size={5}
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Bars</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="bars"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="bars"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Pulse</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="pulse"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="pulse"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Bounce</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="bounce"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={10}
                            type="bounce"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Circle</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="circle"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="circle"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Radar</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="radar"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="radar"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Bar</Text>
                <View style={[styles.list]}>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="bar"
                            color={Colors.brandGrey}
                        />
                    </View>
                    <View style={[styles.loader]}>
                        <Loader
                            size={30}
                            type="bar"
                            color={Colors.primaryColor}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
module.exports = view
