(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(67)},47:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),c=n.n(o),u=(n(47),n(7)),i=n(15),s=n(9),l=n(8),p=n(10),f=n(3),d=n.n(f),y=n(12),m=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).componentDidMount=function(){if(window.YT)n.loadVideo();else{var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=n.loadVideo;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},n.loadVideo=function(){var e=n.props.id;n.player=new window.YT.Player("youtube-player-".concat(e),{videoId:e,events:{onReady:n.onPlayerReady,onStateChange:n.onPlayerStateChange}})},n.onPlayerStateChange=function(e){n.props.onPlayerStateChange(e)},n.onPlayerReady=function(e){n.player=e.target},n.render=function(){var e=n.props.id;return a.a.createElement("div",null,a.a.createElement("div",{id:"youtube-player-".concat(e)}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadVideoById",value:function(e){this.player.loadVideoById(e,0)}},{key:"isPlayerReady",value:function(){return console.log(this.player.loadVideoById),!!this.player.loadVideoById}}]),t}(a.a.Component);function h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){var c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&200===c.status&&a(JSON.parse(c.responseText)),4===c.readyState&&204===c.status&&a(),4===c.readyState&&o(c)},c.open(t,e,!0),n&&c.setRequestHeader("Authorization","Bearer "+n),r&&c.setRequestHeader("Content-Type","application/json"),c.send(JSON.stringify(r))}))}var b=function(){function e(t,n){Object(u.a)(this,e),this.accessToken=t,this.refreshToken=n}return Object(i.a)(e,[{key:"_makeRequest",value:function(){var e=Object(y.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t,n,r);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),401!==e.t0.status){e.next=13;break}return e.next=11,this.getNewAccessToken(this.refreshToken);case 11:return this.accessToken=e.sent.access_token,e.abrupt("return",h(t,n,this.accessToken));case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getCurrentlyPlaying",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/currently-playing","GET",this.accessToken)}},{key:"pause",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/pause","PUT",this.accessToken)}},{key:"skip",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/next","POST",this.accessToken)}},{key:"getProfile",value:function(){return this._makeRequest("https://api.spotify.com/v1/me","GET",this.accessToken)}},{key:"getNewAccessToken",value:function(e){return h("http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/refresh_token?refresh_token=".concat(this.refreshToken),"GET")}}]),e}(),v=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},g=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).update=Object(y.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,n.getCurrentlyPlaying();case 4:if(t=n.state.spotifyPlayer.currentlyPlaying,0===Object.keys(t).length){e.next=10;break}return e.next=8,n.updateYoutubePlayer(t);case 8:return e.next=10,n.pauseSpotifyIfNearEnd(t);case 10:return e.next=12,n.skipWhenVideoEnds();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("e",e.t0);case 17:return e.next=19,v(1500);case 19:e.next=0;break;case 21:case"end":return e.stop()}}),e,null,[[1,14]])}))),n.skipWhenVideoEnds=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n.youtubePlayerState),0!==n.youtubePlayerState){e.next=4;break}return e.next=4,n.spotifyApi.skip();case 4:case"end":return e.stop()}}),e)}))),n.updateYoutubePlayerState=function(e){n.youtubePlayerState=e.data},n.pauseSpotifyIfNearEnd=function(){var e=Object(y.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.is_playing){e.next=2;break}return e.abrupt("return");case 2:t.item.duration_ms-t.progress_ms<15e3&&n.spotifyApi.pause();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateYoutubePlayer=function(){var e=Object(y.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isCurrentlyPlayingNew(t)){e.next=7;break}return e.next=3,n.getVideoIdFromCurrentlyPlaying(t);case 3:return r=e.sent,n.props.updateYoutubePlayer(r),e.next=7,n.waitForPlayerToPlay();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.waitForPlayerToPlay=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1===n.youtubePlayerState){e.next=5;break}return e.next=3,v(50);case 3:return e.next=5,n.waitForPlayerToPlay();case 5:case"end":return e.stop()}}),e)}))),n.getVideoIdFromCurrentlyPlaying=function(){var e=Object(y.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item.name,r=t.item.artists[0].name,console.log(n,r),e.next=5,h("http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/getVideoId","POST","",{songName:n,artistName:r});case 5:return a=e.sent,console.log(a),e.abrupt("return",a.videoId);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.isCurrentlyPlayingNew=function(e){var t=n.state.lastSongId,r=e.item.id;return t!=r&&(n.setState({lastSongId:r}),!0)},n.getCurrentlyPlaying=Object(y.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.spotifyPlayer,e.next=3,n.spotifyApi.getCurrentlyPlaying();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:r=e.t0,t.currentlyPlaying=r,n.setState({spotifyPlayer:t});case 9:case"end":return e.stop()}}),e)}))),n.render=function(){return a.a.createElement("div",null,a.a.createElement("div",null,JSON.stringify(n.state.spotifyPlayer.currentlyPlaying)))},n.state={spotifyPlayer:{currentlyPlaying:{}},lastSong:""},n.youtubePlayerState=-1;var r=e.accessToken,o=e.refreshToken;return n.spotifyApi=new b(r,o),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.update();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(a.a.Component),k=n(4),w=n(5),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){var e=n.props.className;return console.log(e),a.a.createElement("div",{className:e},"some cool playlist")},n}return Object(p.a)(t,e),t}(a.a.Component);function j(){var e=Object(k.a)(["\n    && {\n        flex-grow: 1;\n        color: red;\n    }\n"]);return j=function(){return e},e}function x(){var e=Object(k.a)(["\n    display: flex;\n"]);return x=function(){return e},e}var P=w.a.div(x()),E=Object(w.a)(O)(j()),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(P,null,a.a.createElement(E,{className:"hello"}),a.a.createElement(E,{className:"hello"}),a.a.createElement(E,{className:"hello"}))},n}return Object(p.a)(t,e),t}(a.a.Component);function C(){var e=Object(k.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return C=function(){return e},e}var U=w.a.div(C()),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).updateYoutubePlayer=function(){var e=Object(y.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n.YoutubePlayer.current.loadVideoById(t),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,v(10);case 8:n.updateYoutubePlayer(t);case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),n.onYoutubePlayerStateChange=function(e){n.SpotifyPlayer.current.updateYoutubePlayerState(e)},n.render=function(){return a.a.createElement(U,null,a.a.createElement(m,{ref:n.YoutubePlayer,onPlayerStateChange:n.onYoutubePlayerStateChange,id:"iAtomM7ybOM"}),a.a.createElement(g,Object.assign({},n.props,{ref:n.SpotifyPlayer,updateYoutubePlayer:n.updateYoutubePlayer})),a.a.createElement(S,null))},n.YoutubePlayer=a.a.createRef(),n.SpotifyPlayer=a.a.createRef(),n}return Object(p.a)(t,e),t}(a.a.Component),A=n(35),I=n.n(A),N=n(18),Y=n(24);function _(){var e=Object(k.a)(["\n    color: grey;\n"]);return _=function(){return e},e}function R(){var e=Object(k.a)(["\n    display: inline;\n    margin: 5px;\n    color: grey;\n"]);return R=function(){return e},e}function V(){var e=Object(k.a)(["\n    margin: 10px;\n"]);return V=function(){return e},e}function B(){var e=Object(k.a)(["\n    height: 200px;\n    width: 200px;\n"]);return B=function(){return e},e}function M(){var e=Object(k.a)(["\n    text-align: center\n"]);return M=function(){return e},e}var D=w.a.div(M()),F=Object(w.a)(Y.a)(B()),J=w.a.h2(V()),q=w.a.p(R()),H=w.a.p(_()),z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){var e=n.props.profile;return a.a.createElement(D,null,a.a.createElement("iframe",{style:{display:"none"},src:"https://spotify.com/logout"}),a.a.createElement(F,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(J,null,e.display_name),a.a.createElement(H,null,a.a.createElement(q,null,e.followers.total," followers")," | ",a.a.createElement(q,null,"premium"===e.product?"Premium":"Free Account")))},n}return Object(p.a)(t,e),t}(a.a.Component);function L(){var e=Object(k.a)(["\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    float: right;\n\n    &:hover {\n        color: red; // <Thing> when hovered\n    }\n"]);return L=function(){return e},e}function G(){var e=Object(k.a)(["\n    display: inline-block;\n    margin: 23px 0px;\n\n"]);return G=function(){return e},e}function W(){var e=Object(k.a)(["\n    display: inline-block;\n    height: 60px;\n    width: 60px;\n    margin: 10px 15px;\n    float: left;\n"]);return W=function(){return e},e}function X(){var e=Object(k.a)(["\n    border: 2px solid #888; \n    max-width: 350px;\n    overflow: auto;\n    text-align: left;\n    margin: auto;\n    border-radius: 5px;\n\n    &:hover {\n        box-shadow: 2px 2px #555;\n    }\n"]);return X=function(){return e},e}var K=w.a.div(X()),Q=Object(w.a)(Y.a)(W()),Z=w.a.p(G()),$=w.a.div(L()),ee=function(e){window.localStorage.setItem("currentUser",JSON.stringify(e))},te=function(){return JSON.parse(window.localStorage.getItem("users"))||[]},ne=function(e){window.localStorage.setItem("users",JSON.stringify(e))},re=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).preventBubble=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},n.deleteAccountHandler=function(e){n.preventBubble(e),function(e){var t=te().filter((function(t){return t.profile.id!==e.profile.id}));ne(t)}(n.props.user),n.props.updateUsers()},n.useAccountHandler=function(e){ee(n.props.user),n.props.history.push("/YoutubeMySpotify")},n.render=function(){var e=n.props.user.profile;return a.a.createElement(K,{onClick:n.useAccountHandler},a.a.createElement(Q,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(Z,null,e.display_name),a.a.createElement($,{onClick:n.deleteAccountHandler},"x"))},n}return Object(p.a)(t,e),t}(a.a.Component),ae=Object(N.f)(re),oe=n(25);function ce(){var e=Object(k.a)(["\n    position: absolute;\n    bottom: 10px;\n    color: #DDD;\n    margin: 5px;\n    left: 0;\n    right: 0;\n"]);return ce=function(){return e},e}function ue(){var e=Object(k.a)(["\n    margin: 15px 5px;\n"]);return ue=function(){return e},e}function ie(){var e=Object(k.a)(["\n    margin: 80px;\n    text-align: center\n"]);return ie=function(){return e},e}var se=w.a.div(ie()),le=Object(w.a)(oe.a)(ue()),pe=w.a.p(ce()),fe=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).updateUsers=function(){n.setState({users:te()}),n.props.updateUsers()},n.storeCurrentUser=function(e){var t=n.state,r=t.currentUser,a=t.users;if(e){var o=r.profile.id;a.some((function(e){return e.profile.id===o}))||(a.push(r),n.setState({users:a}))}ee(r),ne(a),n.props.updateUsers(),n.props.history.push("/YoutubeMySpotify")},n.onAddNewAccount=function(){window.location.href="http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/login"},n.render=function(){var e=n.state,t=e.currentUser,r=e.users;return t.refreshToken&&t.profile?a.a.createElement("div",null,a.a.createElement("p",null,"Would you like to stay logged in?"),a.a.createElement("br",null),a.a.createElement(z,t),a.a.createElement(le,{variant:"secondary",onClick:function(){return n.storeCurrentUser(!1)}},"No Thanks"),a.a.createElement(le,{onClick:function(){return n.storeCurrentUser(!0)}},"Yes Please!"),a.a.createElement(pe,null,"If you wish to sign in using a different facebook account, you must first ",a.a.createElement("a",{target:"_blank",href:"https://www.facebook.com"},"log out")," of your current facebook account.")):a.a.createElement("div",null,a.a.createElement("p",null,r.length?"Your saved accounts...":"No Accounts"),r.map((function(e,t){return a.a.createElement(ae,{user:e,updateUsers:n.updateUsers,key:t})})),a.a.createElement("br",null),a.a.createElement(le,{onClick:function(){return n.onAddNewAccount()}},"Add a new Account"))},n.state={currentUser:n.getCurrentUserFromLocation(e.location),users:n.getStoredUsers()},n.spotifyApi=new b(n.state.currentUser.accessToken,n.state.currentUser.refresh_token),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"getStoredUsers",value:function(){return te()}},{key:"getCurrentUserFromLocation",value:function(e){var t=I.a.parse(e.search);return{accessToken:t.access_token,refreshToken:t.refresh_token}}},{key:"getUserProfile",value:function(){var e=Object(y.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.spotifyApi.accessToken){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.spotifyApi.getProfile();case 4:t=e.sent,(n=this.state.currentUser).profile=t,this.setState({currentUser:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUserProfile();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"spotifyLogout",value:function(){var e=window.open("https://www.spotify.com/logout/","Spotify Logout","width=700,height=500,top=40,left=40");setTimeout((function(){e.close()}),2e3),console.log("logged out now")}}]),t}(a.a.Component),de=Object(N.f)(fe);function ye(){var e=Object(k.a)(["\n    margin: 0;\n    display: inline;    \n"]);return ye=function(){return e},e}function me(){var e=Object(k.a)(["\n    padding: 9px;\n    background-color: black;\n"]);return me=function(){return e},e}var he=w.a.div(me()),be=w.a.p(ye()),ve=n(40);function ge(){var e=Object(k.a)(["\n    display: inline;    \n    float: right;\n    margin: -8px;\n"]);return ge=function(){return e},e}var ke=Object(w.a)(ve.a)(ge());var we=function(e){return a.a.createElement(ke,{alignRight:!0},a.a.createElement(ke.Toggle,{variant:e.variant,id:"dropdown-basic"},e.text),a.a.createElement(ke.Menu,null,e.items.map((function(e,t){return Object.keys(e).length?a.a.createElement(ke.Item,{onClick:e.onclick,key:t},e.text):a.a.createElement(ke.Divider,{key:t})}))))},Oe=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(he,null,a.a.createElement(be,{onClick:function(){return window.location="/"}},"Youtube My Spotify"),a.a.createElement(we,n.generateDropDownProps()))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"generateDropDownProps",value:function(){return{variant:"secondary",text:"Account",items:this.generateItemsArrayFromUsers()}}},{key:"generateItemsArrayFromUsers",value:function(){var e=this,t=this.props.users.map((function(e){return{href:"/",text:e.profile.display_name}}));return t.push({}),t.push({onclick:function(){e.props.history.push("/AccountManager")},text:"Account Manager"}),t}}]),t}(a.a.Component),je=Object(N.f)(Oe),xe=(n(66),n(19)),Pe=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).updateUsers=function(){e.setState({currentUser:e.loadCurrentUser()}),e.setState({users:e.loadUsers()}),e.forceUpdate()},e.loadVideoById=function(t){e.player.current.loadVideoById(t)},e.player=a.a.createRef(),e.state={currentUser:e.loadCurrentUser(),users:e.loadUsers()},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadCurrentUser",value:function(){return JSON.parse(window.localStorage.getItem("currentUser"))}},{key:"loadUsers",value:function(){return JSON.parse(window.localStorage.getItem("users"))||[]}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"}),a.a.createElement(xe.a,null,a.a.createElement(je,this.state),"gh-pages yo yo",a.a.createElement(N.c,null,a.a.createElement(N.a,{path:"/YoutubeMySpotify"},a.a.createElement(T,this.state.currentUser)),a.a.createElement(N.a,{path:"/AccountManager"},a.a.createElement(se,null,a.a.createElement(de,{updateUsers:function(){return e.updateUsers()}}))))))}}]),t}(a.a.Component);c.a.render(a.a.createElement(Pe,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b9ebed7f.chunk.js.map