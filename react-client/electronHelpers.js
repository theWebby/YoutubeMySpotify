const { session } = require("electron");

const deleteCookies = async () => {
  session.defaultSession.cookies
    .get({})
    .then(cookies => {
      console.log("these", cookies);

      cookies.map(cookie => {
        let url = "";
        // get prefix, like https://www.
        url += cookie.secure ? "https://" : "http://";
        url += cookie.domain.charAt(0) === "." ? "www" : "";
        // append domain and path
        url += cookie.domain;
        url += cookie.path;
        session.defaultSession.cookies.remove(url, cookie.name);
      });

      return cookies;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

exports.adBlocker = (url) => {
  const myFilters = [
    "doubleclick",
    "pagead",
    "js/bg",
    "annotations_invideo",
    "get_midroll_info",
    "ptracking"
  ];

  const shouldBlock = myFilters.some(myFilter => {
    return url.includes(myFilter);
  });

  return shouldBlock;
};

exports.clearCookiesHook = (url) => {
  if (url == 'http://localhost:3000/'){ //change to account manager when you've fixed routing
    deleteCookies()
  } 
};
