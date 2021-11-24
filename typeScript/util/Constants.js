"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WAIT_TIMES = exports.CLI = exports.JENKINS_OPTIONS = exports.OWNERS_URL_REDIRECT = exports.TCOM_WEBSITE = exports.PLATFORMS = void 0;
exports.PLATFORMS = {
    PLATFORM_CAPABILITY: 'platformName',
    ANDROID: 'Android'
};
exports.TCOM_WEBSITE = 'https://www.toyota.com';
exports.OWNERS_URL_REDIRECT = 'stg-aem-tcom.origin.cepo-proxy.tms.aws.toyota.com';
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
    valueSplitChar: '=',
    browserSplitChar: ','
};
exports.WAIT_TIMES = {
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    MAX_DURATION: 90000,
    IMPLICIT_WAIT_TIME: 30000,
    MAX_COMMAND_TIMEOUT: 15000
};
