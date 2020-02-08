// $( document ).ready(function() {
//     console.log( "ready!" );
// });

function removePlayer(){
    console.log("loaded")
    var player = document.getElementById("player");
    player.parentNode.removeChild(player);
}

console.log('here', document.getElementById("player"))
setTimeout(removePlayer, 5000);
// while ()