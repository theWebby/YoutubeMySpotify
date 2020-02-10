function request(theUrl, method = "GET", params = null){
    return new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                resolve(JSON.parse(xmlHttp.responseText));
            }
            else if (xmlHttp.readyState == 4){
                reject()
            }
        }
        xmlHttp.open(method, theUrl, true); // true for asynchronous 
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken)
        if (params){
            xmlHttp.setRequestHeader('Content-Type', 'application/json');
        }
        xmlHttp.send(JSON.stringify(params));
    })
}
