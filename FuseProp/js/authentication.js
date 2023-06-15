const checkLoggedIn = () => {
    let isLoggedIn = Cookies.get('logged');

    if (!isLoggedIn) {
        window.location.replace("../login.html");
    }
};
checkLoggedIn();