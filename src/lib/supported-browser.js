import Bowser from 'bowser';
const browser = Bowser.getParser(window.navigator.userAgent);
const minVersions = {
    // declare browsers per OS
    windows: {
        "internet explorer": ">=15",
    },
    macos: {
        safari: ">=11"
    },

    // per platform (mobile, desktop or tablet)
    mobile: {
        safari: '>=9',
        'android browser': '>3.10'
    },

    // or in general
    chrome: ">=63",
    firefox: ">57",
    opera: ">=22",

};


/**
 * Helper function to determine if the browser is supported at all.
 * @returns {boolean} False if the platform is definitely not supported.
 */
const supportedBrowser = () => {
    if (browser.isBrowser("msie")) {
        return false;
    }
    return true;
};

/**
 * Helper function to determine if the browser meets the minimum recommended version
 * @returns {boolean} False if the browser isn't a recommended browser, or doesn't
 * meet the minimum version for recommended browsers.
 * NOTE: uses strict_mode==true so that any browser not listed in the minVersions
 *   always returns false
 */

const recommendedBrowser = () => {
    return !browser.satisfies(minVersions) ||
        window.navigator.userAgent.toLowerCase().indexOf('googlebot') !== -1;
}

export {
    supportedBrowser as default,
    recommendedBrowser
};
