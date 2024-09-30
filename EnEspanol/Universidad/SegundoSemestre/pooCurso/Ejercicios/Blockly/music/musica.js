//Solucion al primer ejercicio.
function start1() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

//Solucion al segundo ejercicio.
function do_something() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function start1() {
  do_something();
  do_something();
}

//Solucion al tercer ejercicio.
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function start1() {
  funtion0();
  funtion0();
  funtion1();
  funtion1();
}

//Solucion al cuarto ejercicio.
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function start1() {
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
}

//Solucion al quinto ejercicio.
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion3() {
  play(0.25, 7);
  play(0.25, 4);
  play(0.5, 7);
}

function start1() {
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
  funtion3();
  funtion3();
}

//Solucion al sexto ejercicio.
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion3() {
  play(0.25, 7);
  play(0.25, 4);
  play(0.5, 7);
}

function start1() {
  setInstrument('violin');
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
  funtion3();
  funtion3();
}

//Solucion al septimo ejercicio.
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function doAll() {
  setInstrument('violin');
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
  funtion3();
  funtion3();
}

function funtion3() {
  play(0.25, 7);
  play(0.25, 4);
  play(0.5, 7);
}

function start1() {
  doAll();
}

function start2() {
  rest(1);
  rest(1);
  doAll();
}

//Solucion al octavo ejercicio:
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function doAll() {
  setInstrument('violin');
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
  funtion3();
  funtion3();
}

function funtion3() {
  play(0.25, 7);
  play(0.25, 4);
  play(0.5, 7);
}

function start1() {
  doAll();
  doAll();
}

function start2() {
  rest(1);
  rest(1);
  doAll();
  doAll();
}

//Solucion al noveno ejericio. 
function funtion0() {
  play(0.25, 7);
  play(0.25, 8);
  play(0.25, 9);
  play(0.25, 7);
}

function doAll() {
  funtion0();
  funtion0();
  funtion1();
  funtion1();
  funtion2();
  funtion2();
  funtion3();
  funtion3();
}

function funtion1() {
  play(0.25, 9);
  play(0.25, 10);
  play(0.5, 11);
}

function funtion2() {
  play(0.125, 11);
  play(0.125, 12);
  play(0.125, 11);
  play(0.125, 10);
  play(0.25, 9);
  play(0.25, 7);
}

function funtion3() {
  play(0.25, 7);
  play(0.25, 4);
  play(0.5, 7);
}

function start1() {
  setInstrument('piano');
  doAll();
  doAll();
}


function start2() {
  setInstrument('trumpet');
  rest(1);
  rest(1);
  doAll();
  doAll();
}


function start3() {
  setInstrument('banjo');
  rest(1);
  rest(1);
  rest(1);
  rest(1);
  doAll();
  doAll();
}


function start4() {
  setInstrument('violin');
  rest(1);
  rest(1);
  rest(1);
  rest(1);
  rest(1);
  rest(1);
  doAll();
  doAll();
}
