import React from "react";
import styles from "./styles";
import { Text, View,Image} from "react-native";
import {Link} from "arivaa-basic";
import girl from "../../../assets/girl.jpg";
import left from "../../../assets/left.png";
import Icon from "../../core/components/icon";

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {drawer,navigation} = this.props
    return (
        <View style={[styles.container]} >
            <View style={[styles.imageContainer]}>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={girl}/>
                {
                    !navigation.state.isDrawerOpen ? (
                        <Link onPress={this.openDrawer.bind(this)} style={[styles.trigger]}>
                            <Image
                                resizeMode="cover"
                                source={left}
                                style={styles.triggerIcon}
                            />
                        </Link>
                    ) : null
                }
            </View>
            <View style={[styles.new]}>
                <Link style={[styles.link]} link="elements">
                    <View style={[styles.linkView]}>
                        <Text style={[styles.text]}>Try UI Component Demos</Text>
                        <Icon type="foundation" style={[styles.icon]} name='burst-new'/>
                    </View>
                </Link>
            </View>
        </View>
    )
}
module.exports = view
