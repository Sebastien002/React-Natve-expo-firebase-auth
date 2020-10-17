import React, { Component } from 'react'
import ComponentView from './view'
import ActionSheet from '../actionSheet'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { isIos } from '../util'
import { askPermission } from '../permissions'
import { Colors } from 'arivaa-basic/styles'

/**
 * @description Image Picker
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor (props) {
        super(props)
        this.state = {
            value: props.value || null
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount () {
    }

    /**
     * On trigger press
     */
    onPress (onPress) {
        this.openMenu()
        if (onPress instanceof Function) {
            onPress()
        }
    }

    /**
     * Open Menu
     */
    openMenu () {
        const BUTTONS = [
            {
                title: 'Open Camera',
                action: this.openCamera.bind(this),
                icon: 'camera'
            },
            {
                title: 'Select from Gallery',
                action: this.openGallery.bind(this),
                icon: 'sidebar'
            },
            {
                title: 'Cancel',
                action: this.onCancel.bind(this),
                style: {
                    backgroundColor: Colors.primaryColor,
                    borderColor: Colors.primaryColor
                },
                textStyle: {
                    color: '#fff'
                }
            }
        ]
        const {title, actionsheet, getActionsheet} = this.props;
        (actionsheet || (getActionsheet && getActionsheet()) || ActionSheet).showActionSheetWithOptions({
            options: BUTTONS,
            native: false,
            hideCancel: true,
            message: title || 'Select Image',
            //onCancel : this.onCancel.bind(this)
        })
    }

    /**
     * componentWillReceiveProps Hook
     */

    componentWillReceiveProps (nextProps) {
        const {value} = this.state
        if (this.props.value == undefined && nextProps.value == undefined) {
            return
        }
        if (nextProps.value != value) {
            this.setState({value: nextProps.value})
        }

    }

    /**
     * Check Permission Status
     */
    async checkPermissionStatus (permission) {
        try{
            return await askPermission(permission);
        }catch (e) {
            console.warn(e);
        }
    }

    /**
     * Open Camera
     */
    async openCamera () {
        const permissionStatus = await this.checkPermissionStatus(Permissions.CAMERA_ROLL)
        if (!permissionStatus) {
            return
        }
        let result = await ImagePicker.launchCameraAsync({
            base64: isIos()
        })
        this.onImageSelected(result)
    }

    /**
     * Open gallery
     */
    async openGallery () {
        try{
            const permissionStatus = await this.checkPermissionStatus(Permissions.CAMERA_ROLL)
            if (!permissionStatus) {
                return
            }
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
                base64: this.isBase64Enabled()
            });
            this.onImageSelected(result)
        } catch(e){
            console.warn("Error while opening gallery",e);
            throw e;
        }
    }

    isBase64Enabled () {
        const {enableBase64Android, disableBase64Ios} = this.props
        return isIos() ? !disableBase64Ios : (enableBase64Android == true)
    }

    /**
     * On Image Selected
     * @param result
     */
    onImageSelected (result) {
        const {onImageSelected} = this.props;

        if (!result.cancelled) {
            if (isIos()) {
                result.base64Image = 'data:image/png;base64,' + result.base64;
                result.fileUri = result.base64Image;
                this.setState({value: result.base64Image})
            } else {
                if (this.isBase64Enabled() && result.base64) {
                    result.base64Image = 'data:image/png;base64,' + result.base64
                }
                result.fileUri = result.uri;
                this.setState({value: result.uri})
            }
            this.executeOnChange(result)
        }
        //To be removed in future
        onImageSelected ? onImageSelected(result) : null
    }

    /**
     * Execute on change
     * @param result
     */
    executeOnChange (result) {
        const {onChange} = this.props
        if (onChange && onChange instanceof Function) {
            onChange(result)
        }
    }

    /**
     * On Cancel
     */
    onCancel () {
        const {onCancel} = this.props
        onCancel ? onCancel() : null
    }

    /**
     * Get URIO
     */
    getUri () {
        const {value} = this.state
        return value
    }

    /**
     * Execute on change
     */
    clearFile () {
        this.setState({
            value: null
        })
        this.executeOnChange(null)
    }

    /**
     * Configuration to be exposed to outside
     * @returns {{getUri: (function(this:Main)), clearFiles: (function(this:Main))}}
     */
    getExposedConfig () {
        return {
            getUri: this.getUri.bind(this),
            clearFile: this.clearFile.bind(this),
            openDialog: this.openMenu.bind(this)
        }
    }

    /**
     * Render Method
     * @returns {*}
     */
    render () {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Image-Picker'
