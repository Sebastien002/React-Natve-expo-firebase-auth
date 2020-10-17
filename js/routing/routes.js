import Sample from "../containers/sample";
import HeaderWithMenu from "../containers/headerWithMenu";
import Login from "../containers/login";
import SignUp from "../containers/signUp";
import ForgotPassword from "../containers/forgotPassword";
import ResetPassword from "../containers/resetPassword";
import ChangePassword from "../containers/change-password";
import Analytics from "../containers/analytics";
import Admob from "../containers/admob";
import PushNotifications from "../containers/push-notifications";
import Elements from "../containers/elements";
import ElementView from "../containers/elementView";
import Map from "../containers/map";
import Verification from "../containers/verification";
import Splash from "../containers/splash";
import Home from "../containers/home";
import Profile from "../containers/profile";
import EditProfile from "../containers/editProfile";
import FacebookAds from "../containers/facebookAds";
import React from "react";
import {ModalUtils} from "arivaa-basic";
import Drawer from "../containers/drawer";
import {createDrawerNavigator, createStackNavigator} from "react-navigation";
export const INITIAL_ROUTE = 'unsecured';
export const INITIAL_SECURED_ROUTE = 'home';
export const INITIAL_UNSECURED_ROUTE = 'login';

const securedRoutes = {
    home: {
        screen: Home,
        header: false
    },
    profile: {
        screen: Profile,
        header: false
    },
    editProfile: {
        screen: EditProfile,
        header: false
    },
    changePassword: {
        screen: ChangePassword,
        header: false
    },
    admob: {
        screen: Admob,
        header: false
    },
    analytics: {
        screen: Analytics,
        header: false
    },
    pushNotifications: {
        screen: PushNotifications,
        header: false
    },
    map: {
        screen: Map,
        header: false
    },
    facebookAds: {
        screen: FacebookAds,
        header: false
    },
    elements: {
        screen: Elements,
        header: false
    },
    elementView: {
        screen: ElementView,
        header: false
    }
}
const unsecuredRoutes = {
    sample: {
        screen: Sample
    },
    login: {
        screen: Login
    },
    signUp: {
        screen: SignUp
    },
    forgotPassword: {
        screen: ForgotPassword
    },
    resetPassword: {
        screen: ResetPassword
    },
    verification: {
        screen: Verification
    },
    splash: {
        screen: Splash
    },
    elements: {
        screen: Elements,
        header: false
    },
    elementView: {
        screen: ElementView,
        header: false
    }
}

const Routes = {
    unsecured: {
        screen: createStackNavigator(unsecuredRoutes, {
            initialRouteName: INITIAL_UNSECURED_ROUTE,
            navigationOptions: {
                header: null
            }
        })
    },
    secured: {
        screen: createDrawerNavigator({
            drawer: {
                screen: createStackNavigator(securedRoutes, {
                    navigationOptions: (props) => {
                        let navigationOptions = {}
                        const {navigation} = props
                        const routeName = navigation.state.routeName

                        navigationOptions.header =
                            <HeaderWithMenu hide={securedRoutes[routeName].header} navigation={navigation}/>
                        return navigationOptions
                    },
                    initialRouteName: INITIAL_SECURED_ROUTE
                })
            }
        }, {
            /**
             * There is a reason why we had to put secured routes in a Stack Navigator
             * nested inside the stack navigator, We dont want to show header in
             * Drawer and there is no way to hide header in case of draweropen and
             * show in case of normal route. So we have put all the routes under
             * a stack navigator where the header will be shown and in drawer
             * it is set to null
             */
            initialRouteName: 'drawer',
            navigationOptions: (props) => {
                const {navigation} = props
                return {
                    header: null
                }
            },
            drawerBackgroundColor :'transparent',
            contentComponent: Drawer,
            /**
             * Fix for https://github.com/react-navigation/react-navigation/issues/3148
             */
            drawerOpenRoute: 'DrawerOpen',
            drawerCloseRoute: 'DrawerClose',
            drawerToggleRoute: 'DrawerToggle'
        })
    }
}
const Modals = {
    verification: Verification,
    login: Login,
    signUp: SignUp
}
setTimeout(() => {
    ModalUtils.setModalScenes(Modals)
})


const mainNavigator = createStackNavigator(Routes, {
    initialRouteName: INITIAL_ROUTE,
    headerMode: 'none'
});
export default mainNavigator;
