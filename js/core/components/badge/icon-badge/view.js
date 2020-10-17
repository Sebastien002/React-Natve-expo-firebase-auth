import React from "react";
import CustomBadge from '../custom-badge';
import styles from './styles';
import Icon from "../../icon";
import {getModifiedProps} from '../../util';
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {icon,text,dot,iconProps,style,contentStyle} = this.props;
    const hasText = text || this.props.overflowCount;
    return (
        <CustomBadge
            {...getModifiedProps(this.props,["icon","iconProps"])}
            dot={dot &&  true}
            size={'small'}
            style={[styles.badge,style]}
            contentStyle={[hasText?styles.badgeIconCounterStyle:styles.badgeStyle,contentStyle]}
            content={
                <Icon type="feather" name={icon || 'bell'}
                      size={25}
                      color="#000"
                      style={[hasText?styles.iconCounter:styles.icon]}
                      {...iconProps}
                />
            }
        />
    )
}
module.exports = view
