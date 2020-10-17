import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import Link from "../main";
import BackLink from "../back-link";
import ExternalLink from "../external-link";
import Thumbnail from '../../thumbnail'
var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A Link component is useful to implement navigation inside your application.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Back Link</Text>
                <BackLink/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Back Link With Custom Back Image</Text>
                <BackLink backIcon={<Thumbnail icon="arrow-left"/>}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Internal Link</Text>
                <Link
                    link="elements"
                    text="Go Back To Elements List"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>External Link</Text>
                <ExternalLink
                    link="https://www.google.com"
                >
                    <Thumbnail iconProps = {{
                        type : 'font-awesome'
                    }} icon="google"/>
                </ExternalLink>
            </View>
        </View>
    )
}
module.exports = view
