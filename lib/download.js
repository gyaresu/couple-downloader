var data = require('../couple'),
    fs = require('fs'),
    https = require('https'),
    moment = require('moment'),
    Download = require('download'),
    path = require('path');

console.log(data[0]);

function mkdirSync(path) {
  try {
    fs.mkdirSync('./private/' + path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

function download(type) { // type = 'videos', 'images']
    var items = data.filter(function(each) {
        return each.mediaType == type && each.file;
    });

    console.log(items[2]);

    mkdirSync(type);

    for (var i = 0; i < items.length -1; ++i) {
        var dld = new Download();
        var name;

        if (items[i].from == 'me@gareth.com.au')
            name = 'Gareth';
        else
            name = 'Jess';

        dld
            .get(items[i].file)
            .dest('./private/' + type)
            .rename(moment(items[i].timeStamp).format() + '-' + name + '-.jpg')
            .run(function(err) {
                console.log(items[i].file, " has completed downloading.");
            });
    }
}
module.exports = download;