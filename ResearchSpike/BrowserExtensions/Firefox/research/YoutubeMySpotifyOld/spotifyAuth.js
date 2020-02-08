class SpotifyTools {
    constructor(){
        this.creds = {
            access_token: null,
            refresh_token: null
        }
    }

    validate(callbackUrl){
        console.log('mp waus', callbackUrl)

        // const Http = new XMLHttpRequest();
        const url='http://localhost:80/callback?' + callbackUrl.split('?')[1];
        
        
        return fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(jsonResponse) {
            return JSON.parse(jsonResponse)
        });
        // this.setCreds(creds)
    }

    // async setCreds(creds){
    //     this.creds = await creds
    // }


    generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    login(){

        console.log(browser.identity.getRedirectURL())
        // let authURL = 'http://localhost:80/login'

        let storedState = this.generateRandomString(16);
        // res.cookie(stateKey, state);

        // your application requests authorization
        let scope =
            "user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state";
        let authURL = "https://accounts.spotify.com/authorize";
        authURL += `?response_type=code`;
        authURL += `&client_id=7d6e6d5684a3404e834793cca7f8382d`;
        authURL += `&scope=${encodeURIComponent(scope)}`;
        authURL += `&redirect_uri=${encodeURIComponent(browser.identity.getRedirectURL())}`;
        authURL += `&state=${storedState}`;

        console.log(authURL);
        browser.identity.launchWebAuthFlow({
            interactive: true,
            url: authURL
        }).then(this.validate)
        .then(creds => {
            this.creds = creds
        })

    }
}