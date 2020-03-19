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