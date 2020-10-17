import Component, {Main} from "./main";
import LinkBackComponent from "./back-link";
import ExternalLinkComponent,{goToExternalLink} from "./external-link";
export {default as Demo} from './demo'
export default Component;
export const LinkWithoutNavigation = Main;
export const LinkBack = LinkBackComponent;
export const ExternalLink = ExternalLinkComponent;
export {goToExternalLink} from './external-link'
