const translate = require('google-translate-api');
var Table = require('cli-table');

var input = process.argv[2];
var wordsToTranslate = input.split(' ');
var translation = [];
var i = 0;

doTranslation();

function doTranslation() {
    translate(wordsToTranslate[i], {from: 'ru', to: 'de'}).then(res => {
        translation.push(res.text);
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
    table.push(wordsToTranslate, translation);
    console.log(table.toString());
}
