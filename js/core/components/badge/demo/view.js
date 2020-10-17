import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import ArivaaBadge from "../../badge";
import ArivaaThumbnail from "../../thumbnail";
import {getRandom} from '../../util';
import {Colors} from "arivaa-basic/styles";

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Badges are used to add show a numeric or boolean information(Mostly) related to specific context
                like user, notifications, calls etc. We provide Avatar and Icon Badges by default
                and to create a custom badge according to use cases.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Avatar Badge Demo</Text>
                <View style={[styles.flexRow]}>
                    <ArivaaBadge
                        type="avatar"
                        dot={true}
                        image = {getRandom("image")}
                    />
                    <ArivaaBadge
                        type="avatar"
                        text = {30}
                        image = {getRandom("image")}
                    />
                    <ArivaaBadge
                        type="avatar"
                        text = {40}
                        overflowCount = {30}
                        height = {100}
                        width = {100}
                        image = {getRandom("image")}
                    />
                </View>
            </View>

            <View style={[styles.section]}>
                <Text style={[styles.title]}>Icon Badge Demo</Text>
                <View style={[styles.flexRow]}>
                    <ArivaaBadge
                        type="icon"
                        dot={true}
                        icon = "bell"
                    />
                    <ArivaaBadge
                        type="icon"
                        text={10}
                        icon = "message-circle"
                    />
                    <ArivaaBadge
                        type="icon"
                        text = {30}
                        overflowCount={20}
                        icon = "phone"
                    />
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Custom Badge Demo</Text>
                <View style={[styles.flexRow]}>
                    <ArivaaBadge
                        dot={true}
                        size={'large'}
                        text = {20}
                        containerStyle = {styles.customBadgeContainer}
                        content = {
                            <View style = {styles.customBadge}>

                            </View>
                        }
                    />
                    <ArivaaBadge
                        text={10}
                        size={'large'}
                        overflowCount = {5}
                        containerStyle = {styles.customBadgeContainer}
                        content = {
                            <ArivaaThumbnail
                                text="A"
                                borderRadius = {50}
                            />
                        }
                    />
                    <ArivaaBadge
                        text={10}
                        size={'large'}
                        containerStyle = {styles.customBadgeContainer}
                        content = {
                            <ArivaaThumbnail
                                text="I"
                                iconStyle = {{
                                color : Colors.primaryColor
                                }}
                                borderRadius = {50}
                            />
                        }
                    />
                </View>
            </View>
        </View>
    )
}
module.exports = view
