import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import ArivaaCard from '../../card'
import ImageCard from '../image-card'
import ListCard from '../list-card'
import { getImage, getRandom } from '../../util'
import Toast from '../../toast'

const footerItems = [
    {
        icon: 'heart',
        text: '20',
    }, {
        icon: 'message-circle',
        text: '20',
    }, {
        icon: 'send',
        text: '2',
    }
];
/**
 * View
 * @returns {XML}
 */
var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A card is a flexible and extensible content container. It includes options for headers and footers, a
                wide variety of content.We provide a ready made image and list cards since they are most commonly used.
                Even if you want to create your own custom card, You can use our card component.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Card With a Header, Body and Footer</Text>
                <ArivaaCard
                    headerContent={getRandom('text')}
                    bodyContent={getRandom('paragraph')}
                    footerContent={getRandom('text')}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>List Card Demo</Text>
                <ListCard
                    headerContent={'Contact List'}
                    data={getRandom('contacts').map((contact, index) => {
                        return {
                            key: index,
                            title: contact.name,
                            subTitle: contact.phone,
                            image: getImage(contact.avatar)
                        }
                    })}
                    onItemClick={({title}) => {Toast.info(title + ' clicked')}}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Image Card With an Overlay</Text>
                <ImageCard
                    image={getRandom('image')}
                    overlay={true}
                    overlayTitle={getRandom('text')}
                    overlaySubTitle={getRandom('text')}
                    footerItems={footerItems}
                    onFooterItemClick={(item) => {Toast.info('Count is ' + item.text)}}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Card a Header and a Body</Text>
                <ArivaaCard
                    style={[styles.cardStyle]}
                    headerContent={getRandom('text')}
                    bodyContent={getRandom('paragraph')}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Card a Body and Footer</Text>
                <ArivaaCard
                    style={[styles.cardStyle]}
                    bodyContent={getRandom('paragraph')}
                    footerContent={getRandom('text')}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Image Card</Text>
                <ImageCard
                    image={getRandom('image')}
                    headerContent={getRandom('text')}
                    overlay={false}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Image Card With a Overlay (with title and subtitle) and a Footer</Text>
                <ImageCard
                    image={getRandom('image')}
                    overlay={true}
                    overlayTitle={getRandom('text')}
                    overlaySubTitle={getRandom('text')}
                    footerItems={footerItems}
                    onFooterItemClick={(item) => {Toast.info('Count is ' + item.text)}}
                />
            </View>

        </View>
    )
}
module.exports = view
