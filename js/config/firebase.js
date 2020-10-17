import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD-4zAwCnaBjjyl7eo5ZoSqxBkihh-DBNw",
    authDomain: "expo-app-5102b.firebaseapp.com",
    databaseURL: "https://expo-app-5102b.firebaseio.com",
    storageBucket: "expo-app-5102b.appspot.com",
    projectId : "expo-app-5102b"
};

export {
    firebaseConfig
};
export default firebase.initializeApp(firebaseConfig);
