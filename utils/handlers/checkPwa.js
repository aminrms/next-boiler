import is from "is_js";

export const checkIfPwa = () => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
    }
    return false;
}

export const isIOS = () => {
    return is.ios();
}

export const getUserAgentInfo = () => {
    let browser;
    let os;
    const isIos = is.ios();
    if (is.desktop()) {
        os = "desktop"
    } else if (is.mobile()) {
        os = "mobile"
    }
    if (is.safari()) {
        browser = "safari"
    } else if (is.chrome()) {
        browser = "chrome"
    }
    return {
        os,
        browser,
        isIos,
    }
}

export const shareURL = (url, title) => {
    if (navigator?.share) {
        navigator?.share({
            title,
            url,
        });
    }
}