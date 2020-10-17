import axios from 'axios';
import {Toast} from "arivaa-basic/components";

let userList = [
    {
        id: Math.random(),
        email: "demo@laxaar.com",
        password: "12345",
        name: "Demo User",
        phone: "9999999999",
        _token: null
    }
];
let loggedInUser = null;
const REQUEST_DELAY = 1000;
/**
 * Get a user by email
 * @param email
 */
function getUserByEmail(email) {
    return userList.filter((user) => {
        return user.email.toLowerCase() == email.toLowerCase()
    })[0];
}
/**
 * Get a socially signed in user
 * @param provider
 * @param credentials
 * @returns {*}
 */
function getSocialUser(provider, credentials) {
    provider = provider.toLowerCase();
    return userList.filter((user) => {

        if (user.socialInfo) {
            switch (provider) {
                case 'google':
                    return user.socialInfo.idToken == credentials.idToken;
                case 'facebook':
                    return user.socialInfo.token == credentials.token;
            }
        }
        return null;
    })[0];
}
/**
 * Creates a new user
 * @param user
 */
function createUser(user) {
    user = {
        id: Math.random(),
        ...user
    };
    userList.push(user);
    return user;
}
/**
 * Login a user
 * @param provider, @param credentials
 */
export  function login(provider, credentials) {
    // const data = JSON.parse(config.data);
    // const {provider, credentials} = data;
    const {email, password} = credentials;
    return new Promise(function (resolve, reject) {
        setTimeout(async () => {
            let user;
            let _token = null;
            switch ((provider || "").toLowerCase()) {
                case 'local' :
                    const response = await axios.post(`http://192.168.104.93:3000/api/user/login`, credentials);
                    console.log(response.data, "<-RES");
                    if(response.data.state == 'fail'){
                        Toast.fail(response.data.message, 1)
                    }
                    else{
                        loggedInUser = response.data.user;
                        _token = response.data._token;
                    }
                    break;
                case 'facebook':
                    user = getSocialUser(provider, credentials);
                    if (user) {
                        loggedInUser = user;
                    } else {
                        try{
                            const response = await axios.get(`https://graph.facebook.com/me?access_token=${credentials.token}`);
                            loggedInUser = createUser({
                                provider: provider,
                                socialInfo: {
                                    ...credentials,
                                },
                                ...response.data
                            });
                        } catch(e){
                            resolve([500, {
                                state: 'fail',
                                provider: provider,
                                message: "Error while signing up with facebook"
                            }])
                        }
                    }
                    break;
                case 'google':
                    user = getSocialUser(provider, credentials);
                    if (user) {
                        loggedInUser = user;
                    } else {

                        loggedInUser = createUser({
                            provider: provider,
                            socialInfo: credentials,
                            ...credentials.user
                        })

                    }
                    break;
            }
            if (loggedInUser) {
                resolve([200, {
                    state: 'success',
                    provider: provider,
                    token: _token
                }]);
            } else {
                resolve([401, {
                    state: 'fail',
                    provider: provider,
                    message: "Invalid Login"
                }])
            }
        }, REQUEST_DELAY);
    });

}

/**
 * Forgot Password
 * @param config
 */
export function forgotPassword(config) {
    const data = JSON.parse(config.data);
    const {email} = data;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const user = getUserByEmail(email)
            if (user) {
                resolve([200]);
            } else {
                resolve([500])
            }
        }, REQUEST_DELAY);
    });

}

/**
 * Check if it's phone number or not
 * @param provider @param data
 */

CheckValueIsNumberOrNot=(value)=>{
 
    if(isNaN(value))
    {
      // If the Given Value is Not Number Then It Will Return True and This Part Will Execute.
      return false;
    }
    else
    {
      // If the Given Value is Number Then It Will Return False and This Part Will Execute.
      return true;
    }
    
  }

/**
 * Sign up
 * @param provider @param data
 */
export async function signUp(data) {
    // const data = JSON.parse(config.data);
    const {email, password, name} = data;
    let isPhone = this.CheckValueIsNumberOrNot(email);
    console.log(isPhone,"PHONE");
    if (isPhone) {
            const {phone, password} = data;
            try{
                const user = {
                    phone: email,
                    password: password,
                    name: name
                  };
                const response = await axios.post(`http://192.168.104.93:3000/api/user/phoneRegister`, user);
                console.log(response);
            } catch(e){
                resolve([500, {
                    message: "Error while signing up with local"
                }])
            }
    }
    else{
        try{
            const user = {
                email: email,
                password: password,
                name: name
              };
            const response = await axios.post(`http://192.168.104.93:3000/api/user/register`, user);
            console.log(response,"response");
        } catch(e){
            resolve([500, {
                message: "Error while signing up with local"
            }])
        }
    }
    
}


/**
 * Verify Otp
 * @param config
 */
export function verifyOtp(config) {
    const data = JSON.parse(config.data);
    const {otp} = data;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (otp == 1234) {
                resolve([200]);
            } else {
                resolve([500]);
            }
        }, REQUEST_DELAY);
    });
}


/**
 * Reset Password
 * @param config
 */
export function resetPassword(config) {
    const data = JSON.parse(config.data);
    //console.log(data)
    const {otp, password, email} = data;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (otp == 1234) {
                var user = getUserByEmail(email);
                user.password = password
                resolve([200]);
            } else {
                resolve([500]);
            }
        }, REQUEST_DELAY);
    });
}
/**
 * Change Password
 * @param config
 */
export function changePassword(config) {
    const data = JSON.parse(config.data);
    //console.log(data)
    const {otp, password, email} = data;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            var user = getUserByEmail(loggedInUser.email);
            user.password = password;
            resolve([200]);
        }, REQUEST_DELAY);
    });
}

/**
 * New Address
 * @param config
 */
export function newAddress(config) {
    const data = JSON.parse(config.data);
    //console.log(data);
}

/**
 * Save Profile Mock
 * @param config
 */
export function saveProfile(config) {
    const data = JSON.parse(config.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            loggedInUser = {
                loggedInUser,
                ...data
            }
            resolve([200, loggedInUser]);
        }, REQUEST_DELAY);
    });
}
/**
 * get Profile mock
 * @param config
 */
export function getProfile(config) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve([200, loggedInUser]);
        }, REQUEST_DELAY);
    });
}
