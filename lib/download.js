var data = require('../couple'),
    fs = require('fs'),
    https = require('https'),
    moment = require('moment'),
    Download = require('download'),
    path = require('path');

//console.log(data[2]);

function mkdirSync(path) {
  try {
    fs.mkdirSync('./private/' + path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

function download(type) { // type = 'video', 'images']
    var items = data.filter(function(each) {
        return each.mediaType == type && each.file;
    });

    var ext,
        txt = [];

    switch (type) {
        case 'video':
            ext = '.mov';
            break;
        case 'image':
            ext = '.jpg';
            break;
        case 'text':
            ext = '.txt';
            break;
        default:
            ext = '';
    }

    //console.log(items[2]);

    mkdirSync(type);

    for (var i = 0; i < items.length -1; ++i) {
        var name;
        var dld = new Download();

        if (items[i].from == 'me@gareth.com.au')
            name = 'Gareth';
        else
            name = 'Jess';

        if (ext === '.jpg' || ext === '.mov')
            dld
                .get(items[i].file)
                .dest('./private/' + type)
                .rename(moment(items[i].timeStamp).format() + '-' + name + ext)
                .run(function(err) {
                    console.log(items[i].file, " has completed downloading.");
                });
        else if (ext === '.txt')
            items[i]
    }
}
module.exports = download;