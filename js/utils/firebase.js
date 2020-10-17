import firebase from 'firebase';
import {decode} from 'base-64';
const uploadedFilesPath = "uploadedFiles";
const  storageRef = firebase.storage().ref();

/**
 * Get Custom RecaptchaApplicationVerifier in order
 * to support Recaptcha Verification
 * @param token
 * @returns {ApplicationVerifier}
 */
export function getRecaptchaApplicationVerifier(token){
    let ApplicationVerifier = function (token) {
        this.type = "recaptcha";
        this.verify = () => {
            return new firebase.Promise.resolve(token);
        }
    };
    ApplicationVerifier.prototype = firebase.auth.ApplicationVerifier;
    return new ApplicationVerifier(token);
}

/**
 * Upload File Base64
 * @param files
 * @param filesPath - Optional
 */
export async function uploadFileBase64(file,filesPath=uploadedFilesPath,config){
    const childRef = storageRef.child(filesPath);
    await childRef.putString(getBase64FromDataUri(file));
    const downloadURL = childRef.getDownloadURL();
    return downloadURL;
}
/**
 * Upload File blob
 * @param file
 * @param filesPath - Optional
 */
export async function uploadFileBlob(file,filesPath=uploadedFilesPath,config){
    const childRef = storageRef.child(filesPath);
    await childRef.put(file);
    const downloadURL = childRef.getDownloadURL();
    return downloadURL;
}
/**
 * Upload File
 * @param file
 * @param filesPath
 * @returns {Promise}
 */
export async function uploadFile(file,filesPath=uploadedFilesPath,config){
    config = config || {};

    if(file instanceof Blob || file instanceof File){
        config.contentType = file.type || config.contentType;
        return uploadFileBlob(file,filesPath,config);
    } else if(typeof file=="string"){
        const forceBlob = config.forceBlob;
            if(file.startsWith("file://")){
                let response =  await fetch(file);
                file = await response.blob();
                return uploadFileBlob(file,filesPath,config);
            } else {
                if(forceBlob && typeof file=="string") {
                    file = dataURLtoBlob(file);
                    return uploadFileBlob(file,filesPath,config);
                } else {
                    return uploadFileBase64(file,filesPath);
                }
            }

    } else {
        throw "Invalid file type"
    }
}

/**
 * Upload Image
 * @param file
 * @param filesPath
 * @returns {Promise}
 */
export async function uploadImage(file,filesPath=uploadedFilesPath,config){
    return uploadFile(file,filesPath,{
        contentType : "image/png",
        ...config
    })
}


/**
 * Convert data URI to blob
 * @param dataurl
 * @returns {*}
 */
export function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = decode(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
        console.log(mime)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

/**
 * Get base64 from data uri
 * @param dataurl
 * @returns {*}
 */
export function getBase64FromDataUri(dataurl){
    var arr = dataurl.split(',');
    return arr.length>1?arr[1]:dataurl[0];
}
