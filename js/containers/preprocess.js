/**
 * Pre process a container with redux wrappers
 */
import {connect} from "react-redux";
import {localize} from "react-localize-redux";
export default function (container, pluginsConfiguration) {
    if (pluginsConfiguration.localize) {
        container = localize(container, 'locale');
    }
    if (pluginsConfiguration.connect) {
        container = connect.apply(this, pluginsConfiguration.connect)(container)
    }
    return container;
}
