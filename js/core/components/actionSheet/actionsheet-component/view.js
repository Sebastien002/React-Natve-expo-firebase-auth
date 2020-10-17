import React from "react";
import ActionSheet  from 'react-native-action-sheet-component/src/ActionSheet'
var view = function () {
    const {visible,props} = this.state;
    return visible?(
        <ActionSheet ref = {(ref)=>{this.actionsheet = ref}} {...props} />
    ):null
}
module.exports = view
