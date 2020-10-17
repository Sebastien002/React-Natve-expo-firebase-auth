import Constants from 'expo-constants';
const isStandAloneApp = Constants.appOwnership == "standalone";
const config = {
    androidAppId: "ca-app-pub-5213082437607074~4492652978",
    iosAppId: "ca-app-pub-5213082437607074~4041883374",
    adUnits: [
        {
            type: "banner",
            size : "fullBanner",
            unitId: "ca-app-pub-5213082437607074/4452946916"
        },{
            type : "interstitial",
            unitId : "ca-app-pub-5213082437607074/3244818785"
        },{
            type : "rewarded",
            unitId : "ca-app-pub-5213082437607074/1455426090"
        }
    ],
    testDeviceID : isStandAloneApp?"EMULATOR" : "EMULATOR"//To be changed to device info
};
/**
 * Example usage inside a container -
 *
 <AdMobBanner
 bannerSize="fullBanner"
 adUnitID="ca-app-pub-5213082437607074/1892084957" // Test ID, Replace with your-admob-unit-id
 testDeviceID="EMULATOR"
 />
 *
 */
export default config;
