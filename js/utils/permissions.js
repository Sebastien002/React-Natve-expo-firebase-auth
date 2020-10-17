import * as Permissions from "expo-permissions";

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
    return await Permissions.askAsync(type);
}

/**
 * Check if permission is present
 * @param type
 * @returns {Promise.<*>}
 */
export async function askPermissions(types) {
    types = types || [];
    let promises = [];
    types.map((type) => {
        promises.push(Permissions.askAsync(type));
    })
    return await Promise.all(promises);
}

