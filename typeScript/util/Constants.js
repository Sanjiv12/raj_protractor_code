"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = exports.JENKINS_OPTIONS = exports.PLATFORMS = void 0;
exports.PLATFORMS = {
    ANDROID: 'Android'
};
exports.JENKINS_OPTIONS = {
    CHROME_DESKTOP: 'ChromeDesktop',
    CHROME_ANDROID: 'ChromeAndroid',
    SAFARI_DESKTOP: 'SafariDesktop',
    SAFARI_IOS: 'SafariIOS',
    FIREFOX: 'Firefox',
    EDGE: 'Edge',
    ALL_SUBPROD: 'AllSubprod',
    ALL: 'All'
};
exports.CLI = {
    params: '--params',
    browserPlatformParam: '.browserPlatformCombo',
    splitChar: '='
};
