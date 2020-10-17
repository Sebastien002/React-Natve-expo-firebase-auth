import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import Tags from '../main'

var view = function () {
    let data = []
    for (let i = 0; i < 3; i++) {
        data.push({
            label: 'Label ' + i,
            value: 'Value ' + i
        })
    }
    let value = []
    for (let i = 0; i < 3; i++) {
        value.push('Value ' + i)
        i = i + 1
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.description]}>
                A Tag component will help users to categorize the content. In Arivaa we are providing different types of
                tags like Read only Tags, Single and Multi Select Tags and so on.
            </Text>
            <View style={[styles.section]}>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Read only Tags</Text>
                    <Tags
                        data={data}
                        readOnly={true}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Single Select Tags</Text>
                    <Tags
                        data={data}
                        value={'Value 1'}
                        multiple={false}
                        closable={false}
                        tagStyle={styles.tags}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Single Select Tags with Disabled</Text>
                    <Tags
                        data={data.map((item, index) => {
                            if (index != 0) {
                                return {
                                    ...item,
                                    disabled: true
                                }
                            } else {
                                return item
                            }
                        })}
                        value={'Value 1'}
                        multiple={false}
                        closable={false}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Multi Select Tags</Text>
                    <Tags
                        data={data}
                        value={value}
                        multiple={true}
                        closable={false}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Multi Select Tags with Add</Text>
                    <Tags
                        data={data}
                        type="add-select"
                        value={value}
                        multiple={true}
                        closable={true}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Single Select Tags with Add</Text>
                    <Tags
                        data={data}
                        value={'Value 1'}
                        type="add-select"
                        multiple={false}
                        closable={true}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.title]}>Only Add</Text>
                    <Tags
                        data={data}
                        type="add"
                        multiple={false}
                        closable={true}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
            </View>
        </View>
    )
}
module.exports = view
