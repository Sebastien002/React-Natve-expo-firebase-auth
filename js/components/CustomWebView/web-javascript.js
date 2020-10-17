/**
 * Utility for storing webview javascript
 */
import {firebaseConfig} from '../../config';
/**
 * Javascript for enabling recaptcha in
 * webpage
 * @type {string}
 */
const renderRecaptcha = `
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('main-container',{
					'size': 'normal',
					'callback': function (response) {
						document.getElementById("loading").style.display="block";
						window.location.hash = "response=" + response;
					},
					'expired-callback': function () {
						document.getElementById("loading").style.display="block";					
						window.location.hash = "response=";
					}
				});
    window.recaptchaVerifier.render().then(function (widgetId) {
        document.getElementById("title").innerHTML="Please verify captcha in order to proceed";
        document.getElementById("loading").style.display="none";
		window.recaptchaWidgetId = widgetId;
	});
`;
const githubLogin = `
    var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                var token = result.credential.accessToken;
                window.location.hash = "response=" + token;
            } else {
                setTimeout(function(){
                    firebase.auth().signInWithRedirect(provider);
                },2000);                
            }           
        }).catch(function(error) {
            alert(JSON.stringify(error));
            window.location.hash = "response=";
    });
`;
const twitterLogin = `
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {                
                var token = result.credential.accessToken;
                var secret = result.credential.secret;
                window.location.hash = "response=" + JSON.stringify({token:token,secret:secret});                
            } else {
                setTimeout(function(){
                    firebase.auth().signInWithRedirect(provider);
                },2000);
            }
            
        }).catch(function(error) {
            alert(JSON.stringify(error));
            window.location.hash = "response=";
    });
`;

const sample = `
    alert("It works");
`;

const getScript = (script)=>{
    return `
        setTimeout(function(){
			var config = {
				apiKey: "${firebaseConfig.apiKey}",
				authDomain: "${firebaseConfig.authDomain}",
				projectId: "${firebaseConfig.projectId}"
			};
			firebase.initializeApp(config);
			firebase.auth().languageCode = 'en';			
			${script}
    	});
`;
};

export default  {
    recaptcha : getScript(renderRecaptcha),
    github : getScript(githubLogin),
    twitter : getScript(twitterLogin),
    sample : getScript(sample)
}
