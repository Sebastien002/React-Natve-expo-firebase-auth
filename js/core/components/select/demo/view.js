import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import Select from '../index.js'
import { Colors } from 'arivaa-basic/styles'

import { isIos } from '../../util'

function getData (count) {
    let data = []
    for (let i = 0; i < count; i++) {
        data.push({
            label: 'Item ' + i + 1,
            value: String(i + 1)
        })
    }
    return data
}

var view = function () {
    const onChange = (value) => {
        console.log('Selected Values', value)
    }
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                The Select component is used to create drop down list options for the user. It provides options in a
                drop-down menu or picker.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Select Modal</Text>
                <Select
                    data={getData(5)}
                    onChange={onChange.bind(this)}
                    type="modal"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>MultiSelect Modal</Text>
                <Select
                    data={getData(5)}
                    multiple={true}
                    onChange={onChange.bind(this)}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Select Picker</Text>
                <Select
                    data={getData(5)}
                    onChange={onChange.bind(this)}
                    type="picker"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Large Number of items in Modal</Text>
                <Select
                    data={getData(100)}
                    multiple={true}
                    onChange={onChange.bind(this)}
                    type="modal"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Large Number of items in Picker</Text>
                <Select
                    data={getData(100)}
                    multiple={false}
                    onChange={onChange.bind(this)}
                    type="picker"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Changing Theme</Text>
                <Select
                    data={getData(100)}
                    multiple={false}
                    onChange={onChange.bind(this)}
                    theme={Colors.primaryColor}
                    styles={{
                        selectContainer: {marginBottom: 10}
                    }}
                    type="picker"
                />
                <Select
                    data={getData(100)}
                    multiple={true}
                    onChange={onChange.bind(this)}
                    theme={Colors.primaryColor}
                />
            </View>
        </View>
    )
}
module.exports = view
