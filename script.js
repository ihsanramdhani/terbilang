'use strict';
let ratusan = '';
let puluhan = '';
let satuan = '';
const number = prompt('Masukkan angka dari 1-1000 ');

if (number[0] == '1') {
  ratusan = 'se';
} else if (number[0] == '2') {
  ratusan = 'dua ';
} else if (number[0] == '3') {
  ratusan = 'tiga ';
} else if (number[0] == '4') {
  ratusan = 'empat ';
} else if (number[0] == '5') {
  ratusan = 'lima ';
} else if (number[0] == '6') {
  ratusan = 'enam ';
} else if (number[0] == '7') {
  ratusan = 'tujuh ';
} else if (number[0] == '8') {
  ratusan = 'delapan ';
} else if (number[0] == '9') {
  ratusan = 'sembilan ';
} else if (number[0] == '0') {
  ratusan = undefined;
}

if (number[1] == '1') {
  puluhan = 'se';
} else if (number[1] == '2') {
  puluhan = 'dua ';
} else if (number[1] == '3') {
  puluhan = 'tiga ';
} else if (number[1] == '4') {
  puluhan = 'empat ';
} else if (number[1] == '5') {
  puluhan = 'lima ';
} else if (number[1] == '6') {
  puluhan = 'enam ';
} else if (number[1] == '7') {
  puluhan = 'tujuh ';
} else if (number[1] == '8') {
  puluhan = 'delapan ';
} else if (number[1] == '9') {
  puluhan = 'sembilan ';
} else if (number[1] == '0') {
  puluhan = undefined;
}

if (number[2] == '1') {
  satuan = 'satu ';
} else if (number[2] == '2') {
  satuan = 'dua ';
} else if (number[2] == '3') {
  satuan = 'tiga ';
} else if (number[2] == '4') {
  satuan = 'empat ';
} else if (number[2] == '5') {
  satuan = 'lima ';
} else if (number[2] == '6') {
  satuan = 'enam ';
} else if (number[2] == '7') {
  satuan = 'tujuh ';
} else if (number[2] == '8') {
  satuan = 'delapan ';
} else if (number[2] == '9') {
  satuan = 'sembilan ';
} else if (number[2] == '0') {
  satuan = undefined;
}

console.log(
  `${ratusan != undefined ? ratusan + 'ratus' : ''} ${
    number[1] == '1'
      ? `${number[2] == '1' ? 'se' : satuan}belas`
      : `${puluhan}puluh ${satuan}`
  }`
);