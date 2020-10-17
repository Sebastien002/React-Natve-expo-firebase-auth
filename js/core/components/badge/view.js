import React from "react";
import styles from "./styles";
import {View} from "react-native";
import {Badge} from "antd-mobile-rn";
import {getModifiedProps,mergeStyles} from '../util';
import AvatarBadge from './avatar-badge';
import IconBadge from './icon-badge';
import CustomBadge from './custom-badge'

/**
 * View
 * @returns {XML}
 */
var view = function () {

    switch(this.getType()){
        case 'avatar':
            return <AvatarBadge {...this.props}/>
        case 'icon' :
            return <IconBadge {...this.props}/>
        default :
            return <CustomBadge {...this.props}/>
    }
};
module.exports = view;
