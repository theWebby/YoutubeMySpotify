(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{46:function(e,t,n){e.exports=n.p+"static/media/SpotifyOnPhoneSignal.347114d2.png"},47:function(e,t,n){e.exports=n.p+"static/media/LogoOnScreen.52bf02e0.png"},59:function(e,t,n){e.exports=n(84)},64:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=(n(64),n(6)),u=n(14),s=n(8),l=n(7),p=n(9),f=n(4),m=n.n(f),y=n(13),d=n(2),h=n(3),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).componentDidMount=function(){if(window.YT)n.loadVideo();else{var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=n.loadVideo;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},n.loadVideo=function(){var e=n.props.id;n.player=new window.YT.Player("youtube-player-".concat(e),{videoId:e,events:{onReady:n.onPlayerReady,onStateChange:n.onPlayerStateChange}})},n.onPlayerStateChange=function(e){n.props.onPlayerStateChange(e)},n.onPlayerReady=function(e){n.player=e.target},n.render=function(){var e=n.props.id;return a.a.createElement("div",{className:n.props.className},a.a.createElement("div",{id:"youtube-player-".concat(e)}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"loadVideoById",value:function(e){this.player.loadVideoById(e,0)}},{key:"isPlayerReady",value:function(){return console.log(this.player.loadVideoById),!!this.player.loadVideoById}}]),t}(a.a.Component);function v(){var e=Object(d.a)(["\n    margin: auto;\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return g=function(){return e},e}var k=h.a.div(g()),x=Object(h.a)(b)(v()),O=n(56);function j(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){var c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&200===c.status&&a(JSON.parse(c.responseText)),4===c.readyState&&204===c.status&&a(),4===c.readyState&&o(c)},c.open(t,e,!0),n&&c.setRequestHeader("Authorization","Bearer "+n),r&&c.setRequestHeader("Content-Type","application/json"),c.send(JSON.stringify(r))}))}var E=function(){function e(t,n){Object(i.a)(this,e),this.accessToken=t,this.refreshToken=n}return Object(u.a)(e,[{key:"_makeRequest",value:function(){var e=Object(y.a)(m.a.mark((function e(t,n,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t,n,r);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),401!==e.t0.status){e.next=13;break}return e.next=11,this.getNewAccessToken(this.refreshToken);case 11:return this.accessToken=e.sent.access_token,e.abrupt("return",j(t,n,this.accessToken));case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"get",value:function(e){return this._makeRequest(e,"GET",this.accessToken)}},{key:"getCurrentlyPlaying",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/currently-playing","GET",this.accessToken)}},{key:"pause",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/pause","PUT",this.accessToken)}},{key:"skip",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/next","POST",this.accessToken)}},{key:"prev",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/previous","POST",this.accessToken)}},{key:"seek",value:function(e){return this._makeRequest("https://api.spotify.com/v1/me/player/seek?position_ms=".concat(e),"PUT",this.accessToken)}},{key:"play",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/player/play","PUT",this.accessToken)}},{key:"getProfile",value:function(){return this._makeRequest("https://api.spotify.com/v1/me","GET",this.accessToken)}},{key:"getTopTracks",value:function(){return this._makeRequest("https://api.spotify.com/v1/me/top/tracks?limit=50","GET",this.accessToken)}},{key:"getNewAccessToken",value:function(e){return j("https://youtubemyspotify.uk/refresh_token?refresh_token=".concat(this.refreshToken),"GET")}}]),e}(),w=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},P=n(20);function C(){var e=Object(d.a)(["\n    display: inline-block;\n    width: 200px;\n    overflow: hidden;\n    white-space: nowrap;\n"]);return C=function(){return e},e}function T(){var e=Object(d.a)(["\n    display: inline;\n    margin: 5px;\n    color: grey;\n"]);return T=function(){return e},e}function S(){var e=Object(d.a)(["\n    display: block;\n    text-align: center;\n    margin: 10px;\n"]);return S=function(){return e},e}function N(){var e=Object(d.a)(["\n    border-radius: 100px;\n    line-height: 0;\n    padding: 10px;\n    margin: 10px;\n"]);return N=function(){return e},e}var U=Object(h.a)(P.a)(N()),A=h.a.div(S()),Y=h.a.p(T()),_=h.a.div(C()),I=n(19),R=n(43),M=n.n(R),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(A,null,a.a.createElement("div",{className:n.props.className},n.renderInfoPanel(),n.renderControlPanel()))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onPlay",value:function(){this.props.spotifyApi.play().catch((function(e){console.log(e)}))}},{key:"onSkip",value:function(){"Your Top 50 Tracks"!==this.props.playingContext?this.props.spotifyApi.skip().catch((function(e){console.log(e)})):this.props.playNextFromTop50()}},{key:"onPrev",value:function(){this.props.spotifyApi.prev().catch((function(e){console.log(e)}))}},{key:"renderControlPanel",value:function(){var e=this,t=this.props.currentlyPlaying;return a.a.createElement("div",null,a.a.createElement(U,{variant:"secondary",onClick:function(){return e.onPrev()}},a.a.createElement(I.c,null)),a.a.createElement(U,{variant:"secondary",onClick:function(){return e.onPlay()}},t.is_playing?a.a.createElement(I.e,null):a.a.createElement(I.f,null)),a.a.createElement(U,{variant:"secondary",onClick:function(){return e.onSkip()}},a.a.createElement(I.d,null)))}},{key:"renderInfoPanel",value:function(){var e=this.props.currentlyPlaying;return Object.keys(e).length?a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(Y,null,e.item.name)," | ",a.a.createElement(Y,null,e.item.album.name)),a.a.createElement(_,null,a.a.createElement(M.a,{velocity:.025},e.item.artists.map((function(e,t,n){return e.name+(t===n.length-1?"":", ")}))))):a.a.createElement("div",null,"Nothing is currently playing")}}]),t}(a.a.Component),V=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).update=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.mounted){e.next=21;break}return e.prev=1,e.next=4,n.getCurrentlyPlaying();case 4:if(t=n.state.spotifyPlayer.currentlyPlaying,0===Object.keys(t).length){e.next=10;break}return e.next=8,n.updateYoutubePlayer(t);case 8:return e.next=10,n.pauseSpotifyIfNearEnd(t);case 10:return e.next=12,n.skipWhenVideoEnds();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("e",e.t0);case 17:return e.next=19,w(1500);case 19:e.next=0;break;case 21:case"end":return e.stop()}}),e,null,[[1,14]])}))),n.skipWhenVideoEnds=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.youtubePlayerState){e.next=3;break}return e.next=3,n.spotifyApi.skip();case 3:case"end":return e.stop()}}),e)}))),n.updateYoutubePlayerState=function(e){n.youtubePlayerState=e.data},n.pauseSpotifyIfNearEnd=function(){var e=Object(y.a)(m.a.mark((function e(t){var r,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.is_playing,a=t.progress_ms,o=t.item,r){e.next=3;break}return e.abrupt("return");case 3:o.duration_ms-a<15e3&&n.spotifyApi.seek(a-15e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateYoutubePlayer=function(){var e=Object(y.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isCurrentlyPlayingNew(t)){e.next=7;break}return e.next=3,n.getVideoIdFromCurrentlyPlaying(t);case 3:return r=e.sent,n.props.updateYoutubePlayer(r),e.next=7,n.waitForPlayerToPlay();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.waitForPlayerToPlay=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1===n.youtubePlayerState){e.next=5;break}return e.next=3,w(50);case 3:return e.next=5,n.waitForPlayerToPlay();case 5:case"end":return e.stop()}}),e)}))),n.getVideoIdFromCurrentlyPlaying=function(){var e=Object(y.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.item.name,r=t.item.artists[0].name,e.next=4,j("https://youtubemyspotify.uk/getVideoId","POST","",{songName:n,artistName:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.isCurrentlyPlayingNew=function(e){var t=n.state.lastSongId,r=e.item.id;return t!==r&&(n.setState({lastSongId:r}),!0)},n.updatePlayingContext=function(e){n.props.onPlayingContextChange(e),n.setState({playingContext:e})},n.playNextFromTop50=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.spotifyPlayer,e.next=3,n.getNextTopTrack();case 3:t.currentlyPlaying.item=e.sent,n.setState({spotifyPlayer:t}),n.updatePlayingContext("Your Top 50 Tracks");case 6:case"end":return e.stop()}}),e)}))),n.getCurrentlyPlaying=Object(y.a)(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.spotifyPlayer,e.next=3,n.spotifyApi.getCurrentlyPlaying();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:if(r=e.t0,Object.keys(r).length){e.next=11;break}0!==n.youtubePlayerState&&-1!==n.youtubePlayerState||n.playNextFromTop50(),e.next=15;break;case 11:return t.currentlyPlaying=r,n.setState({spotifyPlayer:t}),e.next=15,n.getPlayingContextFromCurrentlyPlaying(r);case 15:case"end":return e.stop()}}),e)}))),n.render=function(){return a.a.createElement("div",null,a.a.createElement(F,Object.assign({},n.state.spotifyPlayer,{spotifyApi:n.spotifyApi,playingContext:n.state.playingContext,playNextFromTop50:n.playNextFromTop50})))},n.state={spotifyPlayer:{currentlyPlaying:{}},lastSong:"",topTracks:[],playingContext:""},n.youtubePlayerState=-1,n.mounted=!1;var r=e.accessToken,o=e.refreshToken;return n.spotifyApi=new E(r,o),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTopTracks();case 2:this.mounted=!0,this.update();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1,console.log("unmounting")}},{key:"getTopTracks",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.spotifyApi.getTopTracks();case 3:e.t1=e.sent.items,e.t2={topTracks:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNextTopTrack",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(O.a)(this.state.topTracks),n=t[0],(r=t.slice(1)).length){e.next=4;break}return e.next=4,this.getTopTracks();case 4:return this.setState({topTracks:r}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPlayingContextFromCurrentlyPlaying",value:function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.context){e.next=6;break}return e.next=3,this.spotifyApi.get(t.context.href);case 3:e.t0=e.sent.name,e.next=7;break;case 6:e.t0="Search Results";case 7:n=e.t0,this.updatePlayingContext(n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),t}(a.a.Component);function q(){var e=Object(d.a)(["\n    text-align: center;\n    margin-top: 10px;\n"]);return q=function(){return e},e}var B=h.a.p(q()),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(B,null,"Playing from: ",n.state.playingContext)},n.state={playingContext:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"updatePlayingContext",value:function(e){this.setState({playingContext:e})}}]),t}(a.a.Component),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){var e=n.props.className;return console.log(e),a.a.createElement("div",{className:e})},n}return Object(p.a)(t,e),t}(a.a.Component);function H(){var e=Object(d.a)(["\n    && {\n        flex-grow: 1;\n        color: red;\n    }\n"]);return H=function(){return e},e}function J(){var e=Object(d.a)(["\n    display: flex;\n"]);return J=function(){return e},e}var G=h.a.div(J()),L=Object(h.a)(z)(H()),W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(G,null,a.a.createElement(L,{className:"hello"}),a.a.createElement(L,{className:"hello"}),a.a.createElement(L,{className:"hello"}))},n}return Object(p.a)(t,e),t}(a.a.Component),X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).updateYoutubePlayer=function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n.YoutubePlayer.current.loadVideoById(t),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,w(10);case 8:n.updateYoutubePlayer(t);case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),n.onYoutubePlayerStateChange=function(e){n.SpotifyPlayer.current.updateYoutubePlayerState(e)},n.onPlayingContextChange=function(e){n.PlayingContext.current.updatePlayingContext(e)},n.render=function(){return a.a.createElement(k,null,a.a.createElement(D,{ref:n.PlayingContext}),a.a.createElement(x,{className:"someclassname",ref:n.YoutubePlayer,onPlayerStateChange:n.onYoutubePlayerStateChange,id:""}),a.a.createElement(V,Object.assign({},n.props,{ref:n.SpotifyPlayer,updateYoutubePlayer:n.updateYoutubePlayer,onPlayingContextChange:n.onPlayingContextChange})),a.a.createElement("hr",{style:{width:"95%"}}),a.a.createElement(W,null))},n.YoutubePlayer=a.a.createRef(),n.SpotifyPlayer=a.a.createRef(),n.PlayingContext=a.a.createRef(),n}return Object(p.a)(t,e),t}(a.a.Component),K=n(44),Q=n.n(K),Z=n(21),$=n(29);function ee(){var e=Object(d.a)(["\n    color: grey;\n"]);return ee=function(){return e},e}function te(){var e=Object(d.a)(["\n    display: inline;\n    margin: 5px;\n    color: grey;\n"]);return te=function(){return e},e}function ne(){var e=Object(d.a)(["\n    margin: 10px;\n"]);return ne=function(){return e},e}function re(){var e=Object(d.a)(["\n    height: 200px;\n    width: 200px;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n    text-align: center\n"]);return ae=function(){return e},e}var oe=h.a.div(ae()),ce=Object(h.a)($.a)(re()),ie=h.a.h2(ne()),ue=h.a.p(te()),se=h.a.p(ee()),le=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){var e=n.props.profile;return a.a.createElement(oe,null,a.a.createElement("iframe",{style:{display:"none"},src:"https://spotify.com/logout"}),a.a.createElement(ce,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(ie,null,e.display_name),a.a.createElement(se,null,a.a.createElement(ue,null,e.followers.total," followers")," | ",a.a.createElement(ue,null,"premium"===e.product?"Premium":"Free Account")))},n}return Object(p.a)(t,e),t}(a.a.Component);function pe(){var e=Object(d.a)(["\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    float: right;\n\n    &:hover {\n        color: red; // <Thing> when hovered\n    }\n"]);return pe=function(){return e},e}function fe(){var e=Object(d.a)(["\n    display: inline-block;\n    margin: 23px 0px;\n\n"]);return fe=function(){return e},e}function me(){var e=Object(d.a)(["\n    display: inline-block;\n    height: 60px;\n    width: 60px;\n    margin: 10px 15px;\n    float: left;\n"]);return me=function(){return e},e}function ye(){var e=Object(d.a)(["\n    border: 2px solid #888; \n    max-width: 350px;\n    overflow: auto;\n    text-align: left;\n    margin: auto;\n    border-radius: 5px;\n\n    &:hover {\n        box-shadow: 2px 2px #555;\n    }\n"]);return ye=function(){return e},e}var de=h.a.div(ye()),he=Object(h.a)($.a)(me()),be=h.a.p(fe()),ve=h.a.div(pe()),ge=function(e){window.localStorage.setItem("currentUser",JSON.stringify(e))},ke=function(){return JSON.parse(window.localStorage.getItem("currentUser"))},xe=function(e){window.localStorage.setItem("users",JSON.stringify(e))},Oe=function(){return JSON.parse(window.localStorage.getItem("users"))||[]},je=function(e){var t=Oe(),n=ke(),r=t.filter((function(t){return t.profile.id!==e.profile.id}));xe(r),n.profile.id===e.profile.id&&window.localStorage.removeItem("currentUser")},Ee=function(){var e=window.location.href.includes("localhost")?"http://localhost:3001/%23/AccountManager":"https://thewebby.github.io/YoutubeMySpotify/%23/AccountManager";window.location.href="".concat("http://ec2-52-56-132-53.eu-west-2.compute.amazonaws.com:3000/","login?clientUrl=").concat(e)},we=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).preventBubble=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},n.deleteAccountHandler=function(e){n.preventBubble(e),je(n.props.user),n.props.updateUsers()},n.useAccountHandler=function(e){ge(n.props.user),n.props.history.push("/YoutubeMySpotify")},n.render=function(){var e=n.props.user.profile;return a.a.createElement(de,{onClick:n.useAccountHandler},a.a.createElement(he,{src:e.images.length?e.images[0].url:"https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383",roundedCircle:!0}),a.a.createElement(be,null,e.display_name),a.a.createElement(ve,{onClick:n.deleteAccountHandler},"x"))},n}return Object(p.a)(t,e),t}(a.a.Component),Pe=Object(Z.f)(we);function Ce(){var e=Object(d.a)(["\n    position: absolute;\n    bottom: 10px;\n    color: #DDD;\n    margin: 5px;\n    left: 0;\n    right: 0;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(d.a)(["\n    margin: 15px 5px;\n"]);return Te=function(){return e},e}function Se(){var e=Object(d.a)(["\n    margin: 80px;\n    text-align: center\n"]);return Se=function(){return e},e}var Ne=h.a.div(Se()),Ue=Object(h.a)(P.a)(Te()),Ae=h.a.p(Ce()),Ye=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).updateUsers=function(){n.setState({users:Oe()}),n.props.updateUsers()},n.storeCurrentUser=function(e){var t=n.state,r=t.currentUser,a=t.users;if(e){var o=r.profile.id;a.some((function(e){return e.profile.id===o}))||(a.push(r),n.setState({users:a}))}ge(r),xe(a),n.props.updateUsers(),n.props.history.push("/YoutubeMySpotify")},n.render=function(){var e=n.state,t=e.currentUser,r=e.users;return t.refreshToken&&t.profile?a.a.createElement("div",null,a.a.createElement("p",null,"Would you like to stay logged in?"),a.a.createElement("br",null),a.a.createElement(le,t),a.a.createElement(Ue,{variant:"secondary",onClick:function(){return n.storeCurrentUser(!1)}},"No Thanks"),a.a.createElement(Ue,{onClick:function(){return n.storeCurrentUser(!0)}},"Yes Please!"),a.a.createElement(Ae,null,"If you wish to sign in using a different facebook account, you must first ",a.a.createElement("a",{target:"_blank",href:"https://www.facebook.com"},"log out")," of your current facebook account.")):a.a.createElement("div",null,a.a.createElement("p",null,r.length?"Your saved accounts...":"No Accounts"),r.map((function(e,t){return a.a.createElement(Pe,{user:e,updateUsers:n.updateUsers,key:t})})),a.a.createElement("br",null),a.a.createElement(Ue,{onClick:function(){return Ee()}},"Add a new Account"))},n.state={currentUser:n.getCurrentUserFromLocation(e.location),users:n.getStoredUsers()},n.spotifyApi=new E(n.state.currentUser.accessToken,n.state.currentUser.refresh_token),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getStoredUsers",value:function(){return Oe()}},{key:"getCurrentUserFromLocation",value:function(e){var t=Q.a.parse(e.search);return{accessToken:t.access_token,refreshToken:t.refresh_token}}},{key:"getUserProfile",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.spotifyApi.accessToken){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.spotifyApi.getProfile();case 4:t=e.sent,(n=this.state.currentUser).profile=t,this.setState({currentUser:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUserProfile();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(a.a.Component),_e=Object(Z.f)(Ye),Ie=n(46),Re=n.n(Ie),Me=n(47),Fe=n.n(Me),Ve=n(85),qe=n(86),Be=n(87);function De(){var e=Object(d.a)(["\n  margin: 20px;\n  font-size: 30px;\n  opacity: 0;\n\n  animation: "," 1s linear;\n   animation-delay: ",";\n//animation-delay: 10000ms;\n  transition: visibility 1s linear;\n  animation-fill-mode: forwards;\n"]);return De=function(){return e},e}function ze(){var e=Object(d.a)(["\n  from {\n      opacity: 0;      \n  }\n\n  to {\n      opacity: 1;\n  }\n"]);return ze=function(){return e},e}var He=Object(h.b)(ze()),Je=h.a.p(De(),He,(function(e){return 0===e.delay?"0ms":e.delay.toString()+"ms"})),Ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(Je,{delay:n.props.delay},n.props.children)},console.log(e),n}return Object(p.a)(t,e),t}(a.a.Component);Ge.defaultProps={delay:0};var Le=Ge;function We(){var e=Object(d.a)(["\n  margin: 5px;\n"]);return We=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  margin-top: 3%;\n  margin-bottom: 3%;\n  font-size: 80px  \n"]);return Xe=function(){return e},e}function Ke(){var e=Object(d.a)(["\n  text-align: center;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(d.a)(["\n  //max-height: 600px; \n//  margin: 50px 0;\n  //max-width: 40%;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(d.a)(["\n  position: fixed;\n  bottom: -5%;\n  right: -2%;\n  max-height: 35%;\n  max-width: 21%;\n  transform: rotateY(180deg)\n"]);return Ze=function(){return e},e}var $e=h.a.img(Ze()),et=h.a.img(Qe()),tt=(h.a.div(Ke()),h.a.h1(Xe())),nt=Object(h.a)(P.a)(We()),rt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).onClickHere=function(){return n.props.currentUser?n.props.history.push("/YoutubeMySpotify"):n.props.users.length?n.props.history.push("/AccountManager"):void Ee()},n.render=function(){return a.a.createElement(Ve.a,{fluid:!0},a.a.createElement(qe.a,null,a.a.createElement(Be.a,{className:"text-center"},a.a.createElement(tt,null,"Youtube My Spotify"))),a.a.createElement(qe.a,null,a.a.createElement(Be.a,{md:"6"},a.a.createElement("div",{className:"text-center"},a.a.createElement(et,{className:"w-75",src:Fe.a}))),a.a.createElement(Be.a,{md:"6",className:"mt-4"},a.a.createElement(qe.a,null,a.a.createElement(Be.a,{md:"12"},a.a.createElement(Le,{delay:0},"Open Spotify on your phone."))),a.a.createElement(qe.a,null,a.a.createElement(Be.a,{md:{span:11,offset:1}},a.a.createElement(Le,{delay:1e3},"Put music on."))),a.a.createElement(qe.a,null,a.a.createElement(Be.a,{md:{span:10,offset:2}},a.a.createElement(Le,{delay:2e3},"Mute your phone."))),a.a.createElement(qe.a,null,a.a.createElement(Be.a,{md:{span:9,offset:3}},a.a.createElement(Le,{delay:3e3},a.a.createElement(nt,{size:"lg",variant:"secondary",className:"ml-5 font-",onClick:function(){return n.onClickHere()}},a.a.createElement("span",{className:"mr-2"},"Get Started"),a.a.createElement(I.a,{style:{fontSize:"35px"}}))))),a.a.createElement($e,{className:"d-flex align-self-end",src:Re.a}))))},console.log(e),n.state={showFirst:!1,showSecond:!1,showThird:!1},setTimeout((function(){n.state.showFirst=!0}),300),setTimeout((function(){n.state.showSecond=!0}),600),setTimeout((function(){n.state.showThird=!0}),900),n}return Object(p.a)(t,e),t}(a.a.Component),at=Object(Z.f)(rt);function ot(){var e=Object(d.a)(["\n    margin: 0;\n    display: inline;    \n"]);return ot=function(){return e},e}function ct(){var e=Object(d.a)(["\n    padding: 9px;\n    background-color: black;\n"]);return ct=function(){return e},e}var it=h.a.div(ct()),ut=h.a.p(ot()),st=n(35);function lt(){var e=Object(d.a)(["\n    color: #ccc;\n    &&:hover{\n        background-color: #4b545e;\n        color: #ccc;\n    }\n"]);return lt=function(){return e},e}function pt(){var e=Object(d.a)(["\n    display: inline;    \n    float: right;\n    margin: -8px;\n"]);return pt=function(){return e},e}var ft=Object(h.a)(st.a)(pt()),mt=Object(h.a)(st.a.Item)(lt()),yt=a.a.forwardRef((function(e,t){var n=e.children,r=e.onClick;return a.a.createElement("a",{href:"",ref:t,style:{color:"#ccc"},class:"btn btn-link",onClick:function(e){e.preventDefault(),r(e)}},n,a.a.createElement("span",{class:"ml-1 text-muted",style:{fontSize:"10px"}},"\u25bc"))}));a.a.forwardRef((function(e,t){var n=e.children,r=e.style,o=e.className,c=e["aria-labelledby"];return a.a.createElement("div",{ref:t,style:r,className:o,"aria-labelledby":c},a.a.createElement("ul",{className:"list-unstyled mb-0 "},n))}));var dt=function(e){return a.a.createElement(ft,{alignRight:!0},a.a.createElement(ft.Toggle,{as:yt,id:"dropdown-basic",variant:e.variant},e.children),a.a.createElement(ft.Menu,{className:"bg-dark"},e.items.map((function(e,t){return function(e,t){return Object.keys(e).length?a.a.createElement(mt,{onClick:e.onclick,key:t},e.isCurrentUser?a.a.createElement("span",null,"\ud83c\udfb5"):null," ",e.text):a.a.createElement(ft.Divider,{key:t})}(e,t)}))))},ht=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).render=function(){return a.a.createElement(it,null,a.a.createElement(ut,{onClick:function(){return window.location="/YoutubeMySpotify"}},"Youtube My Spotify"),a.a.createElement(dt,Object.assign({variant:"primary"},n.generateDropDownProps()),a.a.createElement(I.b,{className:"mr-1",style:{fontSize:"20px"}}),"Account"))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"generateDropDownProps",value:function(){return{variant:"secondary",text:"Account",items:this.generateItemsArrayFromUsers()}}},{key:"generateItemsArrayFromUsers",value:function(){var e=this,t=ke(),n=this.props.users.map((function(n){return{onclick:function(){ge(n),e.props.history.push("/YoutubeMySpotify")},text:n.profile.display_name,isCurrentUser:n.profile.id===t.profile.id}}));return this.props.users.length&&n.push({}),n.push({onclick:function(){e.props.history.push("/AccountManager")},text:"Account Manager"}),n}},{key:"isCurrentUser",value:function(e){}}]),t}(a.a.Component),bt=Object(Z.f)(ht),vt=(n(83),n(22)),gt=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).updateUsers=function(){e.setState({currentUser:ke()}),e.setState({users:Oe()}),e.forceUpdate()},e.loadVideoById=function(t){e.player.current.loadVideoById(t)},e.player=a.a.createRef(),e.state={currentUser:ke(),users:Oe()},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"}),a.a.createElement(vt.a,null,a.a.createElement(Z.c,null,a.a.createElement(Z.a,{path:"/YoutubeMySpotify"},a.a.createElement(bt,this.state),a.a.createElement(X,this.state.currentUser)),a.a.createElement(Z.a,{path:"/AccountManager"},a.a.createElement(bt,this.state),a.a.createElement(Ne,null,a.a.createElement(_e,{updateUsers:function(){return e.updateUsers()}}))),a.a.createElement(Z.a,{path:"/"},a.a.createElement(at,{currentUser:this.state.currentUser,users:this.state.users})))))}}]),t}(a.a.Component);c.a.render(a.a.createElement(gt,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4572c484.chunk.js.map