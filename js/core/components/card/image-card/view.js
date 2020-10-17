import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import ArivaaCard from "../main";
import Link from "../../link";
import Image from "../../image";
import Icon from "../../icon";
import {getImage} from "../../util";
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {image, style, headerContent, overlay, overlayTitle, overlaySubTitle, footerItems} = this.props;
    const propStyles = this.props.styles || {};
    const bodyContent = (
        <View style={propStyles.body}>
            <Image source={getImage(image)} style={[styles.image, propStyles.bodyImage]}/>
            {
                overlay ? (
                    <View style={[styles.overlay, propStyles.overlay]}>
                        <View style={[styles.overlayContent, propStyles.overlayContent]}>
                            <Text style={[styles.overlayTitle, propStyles.overlayTitle]}>{overlayTitle}</Text>
                            <Text style={[styles.overlaySubTitle, propStyles.overlaySubTitle]}>{overlaySubTitle}</Text>
                        </View>
                    </View>
                ) : null
            }
        </View>
    );
    const footerContent = (
        <View style={[styles.footerContent, propStyles.footer]}>
            {
                footerItems ? (
                    footerItems.map((item, index) => {
                        return (
                            <Link onPress={this.onFooterItemClick.bind(this, item, index)} key={index}
                                  style={propStyles.footerItemLink}>
                                <View style={[styles.inline, propStyles.footerItemContainer]}>
                                    {
                                        item.icon ? (
                                            <Icon type="feather" name={item.icon} style={[styles.icon, propStyles.footerItemIcon]}/>
                                        ) : null
                                    }
                                    <Text style={[styles.count, propStyles.footerItemText]}>{item.text}</Text>
                                </View>
                            </Link>
                        )
                    })
                ) : null
            }
        </View>
    );
    return (
        <ArivaaCard
            style={style}
            headerContent={headerContent}
            bodyContent={bodyContent}
            footerContent={footerContent}
        />
    )
};
module.exports = view;
