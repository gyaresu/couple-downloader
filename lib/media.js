var data = require('../couple');

var types = {};

data.map(function(each) {
    console.log(types);
    typeof(types[each.eventType]) === 'number' ? types[each.eventType] += 1: types[each.eventType] = 1;
});

//console.log(types);