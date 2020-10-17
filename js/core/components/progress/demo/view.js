import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import Progress from '../main'
import { Colors } from 'arivaa-basic/styles'

var view = function () {
    const {progress} = this.state
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A progress component is used to show the progress of a task or an activity.
                We support different shapes and color to enable creation of variety of progress indicators.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Progress Circle</Text>
                <View style={[styles.list]}>
                    <Progress
                        type="circle"
                        thickness={5}
                        progress={progress * 100}
                        color={Colors.brandGrey}
                        borderWidth={0}
                        indeterminate={false}
                        style={[styles.progress]}
                    />
                    <Progress
                        type="circle"
                        thickness={5}
                        progress={progress * 100}
                        borderWidth={0}
                        indeterminate={false}
                        style={[styles.progress]}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title, styles.margin]}>Indeterminate State of Progress Circle</Text>
                <Text style={[styles.message]}>( At this state the indicator will spin and progress prop will be
                    ignored. )</Text>
                <View style={[styles.list]}>
                    <Progress
                        type="circle"
                        color={Colors.brandGrey}
                        unfilledColor='#fff'
                        style={[styles.progress]}
                    />
                    <Progress
                        type="circle"
                        thickness={5}
                        color={Colors.primaryColor}
                        unfilledColor='#fff'
                        style={[styles.progress]}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Circular Progress with Percentage</Text>
                <View style={[styles.list]}>
                    <Progress
                        type="circle"
                        thickness={5}
                        progress={progress * 100}
                        showsText={true}
                        color={Colors.brandGrey}
                        borderWidth={0}
                        indeterminate={false}
                        style={[styles.progress]}
                    />
                    <Progress
                        type="circle"
                        thickness={5}
                        progress={progress * 100}
                        showsText={true}
                        borderWidth={0}
                        indeterminate={false}
                        style={[styles.progress]}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Circular Progress with Custom Size</Text>
                <View style={[styles.list]}>
                    <Progress
                        type="circle"
                        size={50}
                        progress={progress * 100}
                        showsText={true}
                        borderWidth={0}
                        indeterminate={false}
                        color={Colors.brandGrey}
                        style={[styles.progress]}
                    />
                    <Progress
                        type="circle"
                        size={100}
                        progress={progress * 100}
                        showsText={true}
                        borderWidth={0}
                        indeterminate={false}
                        color={Colors.primaryColor}
                        style={[styles.progress]}
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Progress Bar</Text>
                <Progress
                    type="bar"
                    borderWidth={0}
                    color={Colors.brandGrey}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Progress Bar with Text</Text>
                <Progress
                    type="bar"
                    borderWidth={0}
                    progress={progress * 100}
                    color={Colors.brandGrey}
                >

                </Progress>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Progress Bar with Custom Size and Percentage</Text>
                <Progress
                    type="bar"
                    height={10}
                    color={Colors.brandFacebook}
                    progress={progress * 100}
                    showsText={true}
                />

                <Progress
                    color={Colors.brandGoogle}
                    type="bar"
                    width={200}
                    height={20}
                    progress={progress * 100}
                    showsText={true}
                >
                    <Text>{progress == 1 ? 'Completed' : 'Fetching...'}</Text>
                </Progress>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Progress Pie</Text>
                <Progress
                    type="pie"
                    borderColor={Colors.primaryColor}
                    color={Colors.brandGrey}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Progress Pie with Custom Children</Text>
                <Progress
                    type="pie"
                    progress={progress * 100}
                    color={Colors.brandFacebook}
                    showsText={true}
                    style={[styles.pie]}
                >
                    <Text style={[styles.pieText]}>{progress == 1 ? 'Completed' : 'Fetching...'}</Text>
                </Progress>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Progress Pie with Custom Size and Percentage</Text>
                <Progress
                    type="pie"
                    color={Colors.brandGoogle}
                    progress={progress * 100}
                    showsText={true}
                    size={100}
                    style={[styles.pie]}
                >
                    <Text style={[styles.pieText]}> {Math.floor(progress * 100) + ' %'}</Text>
                </Progress>
            </View>
        </View>
    )
}
module.exports = view
