(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(67)},47:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),u=n.n(o),c=(n(47),n(7)),i=n(15),s=n(9),l=n(8),p=n(10),f=n(3),d=n.n(f),y=n(12),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).componentDidMount=function(){if(window.YT)n.loadVideo();else{var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=n.loadVideo;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},n.loadVideo=function(){var e=n.props.id;n.player=new window.YT.Player("youtube-player-".concat(e),{videoId:e,events:{onReady:n.onPlayerReady,onStateChange:n.onPlayerStateChange}})},n.onPlayerStateChange=function(e){n.props.onPlayerStateChange(e)},n.onPlayerReady=function(e){n.player=e.target},n.render=function(){var e=n.props.id;return a.a.createElement("div",null,a.a.createElement("div",{id:"youtube-player-".concat(e)}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadVideoById",value:function(e){this.player.loadVideoById(e,0)}},{key:"isPlayerReady",value:function(){return console.log(this.player.loadVideoById),!!this.player.loadVideoById}}]),t}(a.a.Component);function m(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){var u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&200===u.status&&a(JSON.parse(u.responseText)),4===u.readyState&&204===u.status&&a(),4===u.readyState&&o(u)},u.open(t,e,!0),n&&u.setRequestHeader("Authorization","Bearer "+n),r&&u.setRequestHeader("Content-Type","application/json"),u.send(JSON.stringify(r))}))}var v=function(){function e(t,n){Object(c.a)(this,e),this.accessToken=t,this.refreshToken=n}return Object(i.a)(e,[{key:"_makeRequest",value:function(){var e=Object(y.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(t,n,r);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),401!==e.t0.status){e.next=13;break}return e.next=11,this.getNewAccessToken(this.refreshToken);case 11:return this.accessToken=e.sent.access_token,e.abrupt("return",m(t,n,this.accessToken));case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getCurrentlyPlaying",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/currently-playing","GET",this.accessToken)}},{key:"pause",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/pause","PUT",this.accessToken)}},{key:"skip",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/next","POST",this.accessToken)}},{key:"getProfile",value:function(){return this._makeRequest("https://api.spotify.com/v1/me","GET",this.accessToken)}},{key:"getNewAccessToken",value:function(e){return m("http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/refresh_token?refresh_token=".concat(this.refreshToken),"GET")}}]),e}(),b=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},g=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).update=Object(y.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getCurrentlyPlaying();case 3:if(!(t=n.state.spotifyPlayer.currentlyPlaying)){e.next=9;break}return e.next=7,n.updateYoutubePlayer(t);case 7:return e.next=9,n.pauseSpotifyIfNearEnd(t);case 9:return e.next=11,n.skipWhenVideoEnds();case 11:return e.next=13,b(1500);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("e",e.t0);case 18:return e.prev=18,n.update(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])}))),n.skipWhenVideoEnds=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n.youtubePlayerState),0!==n.youtubePlayerState){e.next=4;break}return e.next=4,n.spotifyApi.skip();case 4:case"end":return e.stop()}}),e)}))),n.updateYoutubePlayerState=function(e){n.youtubePlayerState=e.data},n.pauseSpotifyIfNearEnd=function(){var e=Object(y.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.is_playing){e.next=2;break}return e.abrupt("return");case 2:t.item.duration_ms-t.progress_ms<15e3&&n.spotifyApi.pause();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateYoutubePlayer=function(){var e=Object(y.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isCurrentlyPlayingNew(t)){e.next=7;break}return e.next=3,n.getVideoIdFromCurrentlyPlaying(t);case 3:return r=e.sent,n.props.updateYoutubePlayer(r),e.next=7,n.waitForPlayerToPlay();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.waitForPlayerToPlay=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1===n.youtubePlayerState){e.next=5;break}return e.next=3,b(50);case 3:return e.next=5,n.waitForPlayerToPlay();case 5:case"end":return e.stop()}}),e)}))),n.getVideoIdFromCurrentlyPlaying=function(){var e=Object(y.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item.name,r=t.item.artists[0].name,console.log(n,r),e.next=5,m("http://localhost:3000/getVideoId","POST",void 0,{songName:n,artistName:r});case 5:return a=e.sent,console.log(a),e.abrupt("return",a.videoId);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.isCurrentlyPlayingNew=function(e){if(e==={})return!1;var t=n.state.lastSongId,r=e.item.id;return t!=r&&(n.setState({lastSongId:r}),!0)},n.getCurrentlyPlaying=Object(y.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.spotifyPlayer,e.next=3,n.spotifyApi.getCurrentlyPlaying();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:r=e.t0,t.currentlyPlaying=r,n.setState({spotifyPlayer:t});case 9:case"end":return e.stop()}}),e)}))),n.render=function(){return a.a.createElement("div",null,a.a.createElement("div",null,JSON.stringify(n.state.spotifyPlayer.currentlyPlaying)))},n.state={spotifyPlayer:{currentlyPlaying:{}},lastSong:""},n.youtubePlayerState=-1;var r=e.accessToken,o=e.refreshToken;return n.spotifyApi=new v(r,o),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.update();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(a.a.Component),k=(a.a.Component,n(32)),w=n.n(k),x=n(18),O=n(5),j=n(6),P=n(24);function E(){var e=Object(O.a)(["\n    color: grey;\n"]);return E=function(){return e},e}function C(){var e=Object(O.a)(["\n    display: inline;\n    margin: 5px;\n    color: grey;\n"]);return C=function(){return e},e}function S(){var e=Object(O.a)(["\n    margin: 10px;\n"]);return S=function(){return e},e}function T(){var e=Object(O.a)(["\n    height: 200px;\n    width: 200px;\n"]);return T=function(){return e},e}function U(){var e=Object(O.a)(["\n    text-align: center\n"]);return U=function(){return e},e}var I=j.a.div(U()),A=Object(j.a)(P.a)(T()),_=j.a.h2(S()),N=j.a.p(C()),R=j.a.p(E()),V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){var e=n.props.profile;return a.a.createElement(I,null,a.a.createElement(A,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(_,null,e.display_name),a.a.createElement(R,null,a.a.createElement(N,null,e.followers.total," followers")," | ",a.a.createElement(N,null,"premium"===e.product?"Premium":"Free Account")))},n}return Object(p.a)(t,e),t}(a.a.Component);function B(){var e=Object(O.a)(["\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    float: right;\n\n    &:hover {\n        color: red; // <Thing> when hovered\n    }\n"]);return B=function(){return e},e}function Y(){var e=Object(O.a)(["\n    display: inline-block;\n    margin: 23px 0px;\n\n"]);return Y=function(){return e},e}function F(){var e=Object(O.a)(["\n    display: inline-block;\n    height: 60px;\n    width: 60px;\n    margin: 10px 15px;\n    float: left;\n"]);return F=function(){return e},e}function J(){var e=Object(O.a)(["\n    border: 2px solid #888; \n    max-width: 350px;\n    overflow: auto;\n    text-align: left;\n    margin: auto;\n    border-radius: 5px;\n\n    &:hover {\n        box-shadow: 2px 2px #555;\n    }\n"]);return J=function(){return e},e}var M=j.a.div(J()),q=Object(j.a)(P.a)(F()),D=j.a.p(Y()),H=j.a.div(B()),z=function(e){window.localStorage.setItem("currentUser",JSON.stringify(e))},G=function(){return JSON.parse(window.localStorage.getItem("users"))||[]},L=function(e){window.localStorage.setItem("users",JSON.stringify(e))},W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).preventBubble=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},n.deleteAccountHandler=function(e){n.preventBubble(e),function(e){var t=G().filter((function(t){return t.profile.id!==e.profile.id}));L(t)}(n.props.user),n.props.updateUsers()},n.useAccountHandler=function(e){z(n.props.user),n.props.history.push("/YoutubeMySpotify")},n.render=function(){var e=n.props.user.profile;return a.a.createElement(M,{onClick:n.useAccountHandler},a.a.createElement(q,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(D,null,e.display_name),a.a.createElement(H,{onClick:n.deleteAccountHandler},"x"))},n}return Object(p.a)(t,e),t}(a.a.Component),X=Object(x.f)(W),K=n(25);function Q(){var e=Object(O.a)(["\n    margin: 15px 5px;\n"]);return Q=function(){return e},e}function Z(){var e=Object(O.a)(["\n    margin: 80px;\n    text-align: center\n"]);return Z=function(){return e},e}var $=j.a.div(Z()),ee=Object(j.a)(K.a)(Q()),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).updateUsers=function(){n.setState({users:G()})},n.storeCurrentUser=function(e){var t=n.state,r=t.currentUser,a=t.users;if(e){var o=r.profile.id;a.some((function(e){return e.profile.id===o}))||(a.push(r),n.setState({users:a}))}z(r),L(a),n.props.loginCallback(),n.props.history.push("/YoutubeMySpotify")},n.render=function(){var e=n.state,t=e.currentUser,r=e.users;return t.refreshToken&&t.profile?a.a.createElement("div",null,a.a.createElement("p",null,"Would you like to stay logged in?"),a.a.createElement("br",null),a.a.createElement(V,t),a.a.createElement(ee,{variant:"secondary",onClick:function(){return n.storeCurrentUser(!1)}},"No Thanks"),a.a.createElement(ee,{onClick:function(){return n.storeCurrentUser(!0)}},"Yes Please!")):a.a.createElement("div",null,a.a.createElement("p",null,r.length?"Your saved accounts...":"No Accounts"),r.map((function(e,t){return a.a.createElement(X,{user:e,updateUsers:n.updateUsers,key:t})})),a.a.createElement("br",null),a.a.createElement(ee,{onClick:function(){return window.location.href="http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/login"}},"Add a new Account"))},n.state={currentUser:n.getCurrentUserFromLocation(e.location),users:n.getStoredUsers()},n.spotifyApi=new v(n.state.currentUser.accessToken,n.state.currentUser.refresh_token),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"getStoredUsers",value:function(){return G()}},{key:"getCurrentUserFromLocation",value:function(e){var t=w.a.parse(e.search);return{accessToken:t.access_token,refreshToken:t.refresh_token}}},{key:"getUserProfile",value:function(){var e=Object(y.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.spotifyApi.accessToken){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.spotifyApi.getProfile();case 4:t=e.sent,(n=this.state.currentUser).profile=t,this.setState({currentUser:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUserProfile();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(a.a.Component),ne=Object(x.f)(te);function re(){var e=Object(O.a)(["\n    margin: 0;\n    display: inline;    \n"]);return re=function(){return e},e}function ae(){var e=Object(O.a)(["\n    padding: 9px;\n    background-color: black;\n"]);return ae=function(){return e},e}var oe=j.a.div(ae()),ue=j.a.p(re()),ce=n(40);function ie(){var e=Object(O.a)(["\n    display: inline;    \n    float: right;\n    margin: -8px;\n"]);return ie=function(){return e},e}var se=Object(j.a)(ce.a)(ie());var le=function(e){return a.a.createElement(se,{alignRight:!0},a.a.createElement(se.Toggle,{variant:e.variant,id:"dropdown-basic"},e.text),a.a.createElement(se.Menu,null,e.items.map((function(e,t){return Object.keys(e).length?a.a.createElement(se.Item,{href:e.href,key:t},e.text):a.a.createElement(se.Divider,{key:t})}))))},pe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(oe,null,a.a.createElement(ue,{onClick:function(){return window.location="/"}},"Youtube My Spotify"),a.a.createElement(le,n.generateDropDownProps()))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"generateDropDownProps",value:function(){return{variant:"secondary",text:"Account",items:this.generateItemsArrayFromUsers()}}},{key:"generateItemsArrayFromUsers",value:function(){var e=this,t=this.props.users.map((function(e){return{href:"/",text:e.profile.display_name}}));return t.push({}),t.push({onclick:function(){e.props.history.push("/AccountManager")},text:"Account Manager"}),t}}]),t}(a.a.Component),fe=(n(66),n(22)),de=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).loginCallback=function(){e.setState({currentUser:e.loadCurrentUser()}),e.setState({users:e.loadUsers()}),e.forceUpdate()},e.loadVideoById=function(t){e.player.current.loadVideoById(t)},e.player=a.a.createRef(),e.state={currentUser:e.loadCurrentUser(),users:e.loadUsers()},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadCurrentUser",value:function(){return JSON.parse(window.localStorage.getItem("currentUser"))}},{key:"loadUsers",value:function(){return JSON.parse(window.localStorage.getItem("users"))||[]}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(pe,this.state),"yoyoyo",a.a.createElement(fe.a,null,a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/"},a.a.createElement($,null,a.a.createElement(ne,{loginCallback:function(){return e.loginCallback()}}))))))}}]),t}(a.a.Component);u.a.render(a.a.createElement(de,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8fdde837.chunk.js.map