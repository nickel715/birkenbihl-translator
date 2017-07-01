const translate = require('google-translate-api');
var Table = require('cli-table');

var input = 'Я всё детство о ней мечтал';
var wordsToTranslate = input.split(' ');
var translation = {};

wordsToTranslate.map(function(val) {
translation[val] = '';
translate(val, {from: 'ru', to: 'de'}).then(res => {
    //console.log(val);
    //console.log(res.text);
    translation[val] = res.text;
}).catch(err => {
    console.error(err);
});

});

var table = new Table({
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  style: { 'padding-left': 0, 'padding-right': 0 }
});
console.log(translation);
table.push(wordsToTranslate, translation);
console.log(table.toString());
