import React from "react";
import Menu from './menu';
import List from './list';
import {getModifiedProps} from '../util'
const supportedTypes = ['list', 'menu'];
/**
 * View
 * @returns {XML}
 */
var view = function () {
    let {type} = this.props;
    type = (type || '').toLowerCase();
    if (supportedTypes.indexOf(type) == -1) {
        type = 'menu'
    }
    const componentProps = getModifiedProps(this.props,['type']);
    switch(type){
        case 'menu':
            return <Menu {...componentProps}/>;
        case 'list' :
            return <List {...componentProps}/>;
    }
}
module.exports = view
