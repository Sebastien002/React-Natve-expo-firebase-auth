import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'antd-mobile-rn'
import { LinkBack } from 'arivaa-basic'
import {
    AdMobBanner
  } from 'expo-ads-admob';
import { Admob } from '../../config'

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
                            AdMob
                        </Text>
                        <View style={[styles.element]}>
                            <Text style={[styles.description]}>
                                Google AdMob will be helpful in monetization of the app in a smart way by gaining insights about your users and maximize your ad revenue.
                            </Text>
                            <View style={[styles.adMob]}>
                                {
                                    (adUnits || []).map((ad, index) => {
                                        switch (ad.type) {
                                            case 'banner':
                                                return (
                                                    <View key={index} style={[styles.banner]}>
                                                        <AdMobBanner
                                                            bannerSize={ad.bannerSize || 'fullBanner'}
                                                            adUnitID={ad.unitId}
                                                            testDeviceID="EMULATOR"
                                                            onDidFailToReceiveAdWithError={this.bannerError}
                                                        />
                                                    </View>
                                                )
                                            case 'interstitial' :
                                                return (
                                                    <View key={index} style={[styles.item]}>
                                                        <Button
                                                            onClick={this.showInterstitialAd.bind(this, ad)}>
                                                            <Text style={[styles.text]}>Show Interstitial Ad</Text>
                                                        </Button>
                                                    </View>
                                                )
                                            case 'rewarded' :
                                                return (
                                                    <View key={index} style={[styles.item]}>
                                                        <Button onClick={this.showRewardedAd.bind(this, ad)}>
                                                            <Text style={[styles.text]}>Show Rewarded Ad</Text>
                                                        </Button>
                                                    </View>
                                                )
                                        }
                                    })
                                }

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
