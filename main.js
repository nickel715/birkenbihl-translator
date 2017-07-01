const translate = require('google-translate-api');
var Table = require('cli-table');

var input = 'Я всё детство о ней мечтал';
var wordsToTranslate = input.split(' ');
var translation = [];

//for (var i = 0; i < myArray.length; i++)

var i = 0;

doTranslation();

function doTranslation() {
    translate(wordsToTranslate[i], {from: 'ru', to: 'de'}).then(res => {
        console.log(res.text);
        translation.push(res.text);
        console.log('debug');
        i++;
        if (wordsToTranslate.length > i) {
            doTranslation();
        } else {
            finish();
        }
    }).catch(err => {
        console.error(err);
    });
}

function finish() {
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
}
