import { ZIP_CODES } from "./Constants";
export function constructHomePageUrl(tier : string) {
    let homeUrl = '';
    switch(tier) {
        case 'T1': {
            homeUrl = 'https://www.toyota.com/?zipcode=' + ZIP_CODES.WILSON;
            break;
        }
        case 'T2': {
            homeUrl = 'https://www.buyatoyota.com/gst';
            break;
        }
        case 'T3': {
            homeUrl = 'https://www.wilsonofamestoyota.com/';
            break;
        }
    }
    return homeUrl;
}