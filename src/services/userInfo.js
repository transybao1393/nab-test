import parser from 'ua-parser-js';
import {
    publishMessage
} from './rabbitmq';

//- tracking activities
let trackingActivities = async (req) => {

    //- calling customer activities service through rabbitmq
    //- not waiting for response
    let ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    var userAgent = parser(req.headers['user-agent']);
    let data = {
        caUserAgent: userAgent.ua,
        caBrowser: userAgent.browser,
        caOS: userAgent.os,
        caRemoteAddress: ip,
        caMethod: req.method,
        caOriginalUrl: req.originalUrl,
        caParams: req.params,
        caQuery: req.query
    };

    publishMessage(data);
};

export {
    trackingActivities
};
