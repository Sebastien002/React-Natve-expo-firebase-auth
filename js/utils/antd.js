import InputItemStyle from "antd-mobile-rn/lib/input-item/style/index.native";
/**
 * Get First error
 * @param errors
 */
export function getFirstError(errors) {
    //console.log(errors)
    const keys = Object.keys(errors || {});
    if (keys.length > 0) {
        return errors[keys[0]].errors[0].message;
    } else {
        return null;
    }
}
/**
 * Helper function for customizing antd input
 * style in input item
 * @param style
 * @returns {{input: {}}}
 */
export function getInputStyle(style) {
    return {
        ...InputItemStyle,
        input: {
            ...InputItemStyle.input,
            ...style.input
        }
    }
}