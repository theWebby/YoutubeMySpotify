var request = require("request");
const fs = require('fs');

function getTopResult(q, callback){
    var url = "https://www.youtube.com/results?search_query=" + q;
    var result = "boPyHl3iptQ"
    request(
        { uri:  url},
        function(error, response, body) {
            var txt = body;
    
            var re1='.*?';	// Non-greedy match on filler
            var re2='((https://i.ytimg.com/vi/)[a-zA-Z0-9]+)';	// Alphanum 1
    
            var p = new RegExp(re1+re2,["i"]);
            var m = p.exec(txt);
            if (m != null)
            {
                var alphanum1=m[1].replace(m[2], '');
                var result = (alphanum1);
            }
            
            callback(result)
        }
    );
}