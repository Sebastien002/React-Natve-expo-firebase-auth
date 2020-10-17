import Storage from "react-native-storage";
import {AsyncStorage} from "react-native";

let defaultExpires = 1000 * 3600 * 24;
let storage = new Storage({
    // maximum capacity, default 1000 
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: defaultExpires,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return 
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

function save(config) {
    let key = config.key;
    let id = config.id;
    let value = config.value;
    let obj = {
        key: key, // Note: Do not use underscore("_") in key!
        rawData: value,
        expires: config.expires ? config.expires : defaultExpires
    };
    if (id) {
        obj.id = id;
    }
    return storage.save(obj);
}

function load(config) {
    let obj = {
        key: config.key
    };
    if (config.id) {
        obj.id = config.id;
    }
    return storage.load(obj);
}

function remove(key) {
    storage.remove({
        key: key
    });
}
module.exports = {
    save: save,
    load: load,
    remove: remove
}
