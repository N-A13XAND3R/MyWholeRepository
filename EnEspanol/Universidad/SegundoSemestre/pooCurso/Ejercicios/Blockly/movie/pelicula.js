//Solucion al primer ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, 70, 5);
line(40, 50, 20, 70, 5);

//Solucion al segundo ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, time(), 5);
line(40, 50, 20, 70, 5);

//Solucion al tercer ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, time(), 5);
line(40, 50, 20, 100 - time(), 5);

//Solucion al cuarto ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, time(), 5);
line(40, 50, 20, 100 - time(), 5);
line(40, 20, time(), 0, 5);
line(60, 20, 100 - time(), 0, 5);

//Solucion al quinto ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
line(40, 50, 20, 100 - time(), 5);
line(40, 20, time(), 0, 5);
line(60, 20, 100 - time(), 0, 5);

//Solucion al sexto ejercicio.
penColour('#ff0000');
circle(50, 70, 10);
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#ff0000');
circle(80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#000000');
line(40, 50, 20, 100 - time(), 5);
penColour('#ff0000');
circle(20, 100 - time(), 5);
penColour('#000000');
line(40, 20, time(), 0, 5);
line(60, 20, 100 - time(), 0, 5);

//Solucion al septimo ejercicio.
penColour('#ff0000');
if (time() <= 50) {
  circle(50, 70, 10);
} else {
  circle(50, 80, 20);
}
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#ff0000');
circle(80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#000000');
line(40, 50, 20, 100 - time(), 5);
penColour('#ff0000');
circle(20, 100 - time(), 5);
penColour('#000000');
line(40, 20, time(), 0, 5);
line(60, 20, 100 - time(), 0, 5);

//Solucion al octavo ejercicio:
penColour('#ff0000');
if (time() <= 50) {
  circle(50, 70, 10);
} else {
  circle(50, 80, 20);
}
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#ff0000');
circle(80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#000000');
line(40, 50, 20, 100 - time(), 5);
penColour('#ff0000');
circle(20, 100 - time(), 5);
penColour('#000000');
if (time() < 50) {
  line(40, 20, time(), 0, 5);
  line(60, 20, 100 - time(), 0, 5);
} else {
  line(40, 20, 100 - time(), 0, 5);
  line(60, 20, time(), 0, 5);
}

//Solucion al noveno ejericio. 
penColour('#009900');
circle(50, time() / 2, time() / 2);
penColour('#ff0000');
if (time() <= 50) {
  circle(50, 70, 10);
} else {
  circle(50, 80, 20);
}
penColour('#3333ff');
rect(50, 40, 20, 40);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#ff0000');
circle(80, Math.pow((time() - 50) / 5, 2), 5);
penColour('#000000');
line(40, 50, 20, 100 - time(), 5);
penColour('#ff0000');
circle(20, 100 - time(), 5);
penColour('#000000');
if (time() < 50) {
  line(40, 20, time(), 0, 5);
  line(60, 20, 100 - time(), 0, 5);
} else {
  line(40, 20, 100 - time(), 0, 5);
  line(60, 20, time(), 0, 5);
}
