const checkLoggedIn = () => {
    let isLoggedIn = Cookies.get('logged');

    if (!isLoggedIn && !window.location.pathname.includes('login')) {
        window.location.replace("../login.html");
    } else if (isLoggedIn && window.location.pathname.includes('login')) {
        window.location.replace("../pages/home.html");
    }
};
checkLoggedIn();