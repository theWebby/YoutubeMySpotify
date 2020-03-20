const { session } = require('electron')

exports.deleteCookies = async () => {
    session.defaultSession.cookies.get({})
  .then((cookies) => {
    console.log('these', cookies)

    cookies.map(cookie => {

      let url = '';
      // get prefix, like https://www.
      url += cookie.secure ? 'https://' : 'http://';
      url += cookie.domain.charAt(0) === '.' ? 'www' : '';
      // append domain and path
      url += cookie.domain;
      url += cookie.path;
      session.defaultSession.cookies.remove(url, cookie.name)
    })

    return cookies
  }).catch((error) => {
    console.log(error)
    return error
  })
}

exports.runAdBlockers = () => {
  const myFilters = ['doubleclick', 'pagead', 'js/bg', 'annotations_invideo', 'get_midroll_info', 'ptracking']
  session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    let shouldBlock = myFilters.some(myFilter => {
      return details.url.includes(myFilter);
    })
    
    if (shouldBlock){
      return
    }

    callback({ requestHeaders: details.requestHeaders })
  })
}