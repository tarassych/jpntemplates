const checkLoggedIn = () => {
    let isLoggedIn = Cookies.get('logged');

    if (!isLoggedIn && !window.location.pathname.includes('login')) {
        window.location.replace("https://www.fuseprop.com/demo/login.html");
    } else if (isLoggedIn && window.location.pathname.includes('login')) {
        window.location.replace("https://www.fuseprop.com/demo/pages/home.html");
    }
};
checkLoggedIn();
