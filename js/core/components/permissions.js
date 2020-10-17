import * as Permissions from 'expo-permissions';
/**
 * Check if permission is present
 * @param type
 * @returns {Promise.<*>}
 */
export async function checkPermission(type) {
    const {status} = await Permissions.getAsync(type);
    return status === 'granted';
}

/**
 * Ask for permission
 * @param type
 * @returns {Promise.<*>}
 */
export async function askPermission(type) {
    try{
        const {status} = await Permissions.askAsync(type);
        return status==='granted';
    }catch (e) {
        console.log(e);
    }
}

/**
 * Check if permission is present
 * @returns {Promise.<*>}
 * @param types
 */
export async function askPermissions(types) {
    types = types || [];
    let promises = [];
    types.map((type) => {
        promises.push(Permissions.askAsync(type));
    })
    return await Promise.all(promises);
}

