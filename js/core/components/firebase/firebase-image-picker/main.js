import React, {Component} from "react";
import ComponentView from "./view";
import {uploadImage} from '../util';
const DEFAULT_PATH="arivaaFiles";
/**
 * @description Firebase Image Picker Component
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            loading : false
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }
    /**
     * componentWillReceiveProps Hook
     */
    componentWillReceiveProps (nextProps) {
        const {value} = this.state;
        if (this.props.value == undefined && nextProps.value == undefined) {
            return
        }
        if (nextProps.value != value) {
            this.setState({value: nextProps.value})
        }

    }
    /**
     * On Change of image
     */
    async onChange(result){

        const {uploadOnChange,onChange} = this.props;
        if(!result){
            return;
        }
        this.result = result;
        if(uploadOnChange!=false){
            const downloadUrl = await this.upload();
            result.localUri = result.uri;
            result.uri = downloadUrl;
        }
        this.setState({value: result.uri})
        if(onChange instanceof Function){
            onChange(result)
        }
    }

    /**
     * Upload file to firebase
     * @param result
     */
   async upload(filename){
        const {result} = this;
        if(!result || !result.uri){
            console.warn("Result and URI is mandatory for calling upload URI")
            return;
        }
        const {uri} = result;
        let {uploadPath,beforeUpload,afterUpload,onError} = this.props;
        filename = filename || (uri.split("/").pop());
        uploadPath = uploadPath || DEFAULT_PATH;
        try{
            this.setState({
                loading : true
            });
            if(beforeUpload instanceof Function){
                beforeUpload(result)
            }
            let output= await uploadImage(uri,`${uploadPath}/${filename}`);

            this.setState({
                loading :false
            });
            if(afterUpload instanceof Function){
                afterUpload(result,output);
            }
            return output;
        } catch(e){
            console.warn("Error while uploading image to firebase",e);
            if(onError instanceof Function){
                onError(e,result);
            }
        }

    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Firebase-Image-Picker-Component'
