import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { LinkBack } from 'arivaa-basic'
import { Button } from 'antd-mobile-rn'
import * as FacebookAds from 'expo-ads-facebook';
import { Admob } from '../../config'
import NativeAd from './native-ad'
FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
const adsManager = new FacebookAds.NativeAdsManager('513432372363654_568838906823000', 2)
var view = function () {
    const {translate} = this.props
    const {adUnits} = Admob
    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.elementView]}>
                        <Text style={[styles.header]}>
                            Facebook Ads
                        </Text>
                        <View style={[styles.element]}>
                            <Text style={[styles.description]}>
                                When using Facebook Ads in development, you'll need to register your device to be able
                                to show ads.
                            </Text>
                            <View style={[styles.section]}>
                                <Text style={[styles.title]}>Facebook Banner Ad</Text>
                                <View style={[styles.ad]}>
                                    <FacebookAds.BannerAd
                                        placementId="513432372363654_973262539713966"
                                        type="standard"
                                        onPress={() => console.log('click')}
                                        onError={(err) => console.log('error', err)}
                                        style={{marginLeft:-10,marginTop:-20}}
                                    />
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.title]}>Facebook Interstitial Ad</Text>
                                <View style={[styles.item]}>
                                    <Button
                                        onClick={this.showInterstitialAd.bind(this)}>
                                        <Text style={[styles.text]}>Show Interstitial Ad</Text>
                                    </Button>
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.title, styles.margin]}>Native Ad</Text>
                                <Text style={[styles.message]}>(Native Ads can be customized to match the design of the
                                    app)</Text>
                                <View style={[styles.item]}>
                                    <NativeAd adsManager={adsManager}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
