import React from "react";
import * as VectorIcons from '@expo/vector-icons/build/Icons';
const defaultIconSet = 'feather';
const iconMap = {};
/**
 * Camelcase to Dashcase
 * @param myStr
 * @returns {string}
 */
function camelCaseToDash( myStr ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}
/**
 * Create a map of lowercase keys so that
 * type can be case insensitive
 */
Object.keys(VectorIcons).map((key)=>{
    iconMap[key.toLowerCase()] = key;
    iconMap[camelCaseToDash(key).toLowerCase()] = key;
});
/**
 * View
 * @returns {XML}
 */
var view = function () {
    let {type} = this.props;

    type = (type || defaultIconSet).toLowerCase();
    if(!iconMap[type]){
        throw new Error("Icon Set - " + type + " not supported");
    }
    let Icon = VectorIcons[iconMap[type]];

    return (
        <Icon ref={(ref) => {
            this.iconRef = ref
        }} {...this.props}/>
    )

}
module.exports = view
