var data = require('../couple');

var txt = data.map(function(item) {
    if (item.enc)
        decode = new Buffer(item.text, 'base64');
        return {text: decode, from: item.from, time: item.timeStamp};
    else
        return {text: item.text, from: item.from, time: item.timeStamp}
});