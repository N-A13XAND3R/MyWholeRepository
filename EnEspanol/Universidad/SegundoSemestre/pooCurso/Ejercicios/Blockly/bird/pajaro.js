
//Solucion al primer ejercicio.
heading(45);

//Solucion al segundo ejercicio.
if (noWorm()) {
  heading(0);
} else {
  heading(90);
}

//Solucion al tercer ejercicio.
if (noWorm()) {
  heading(300);
} else {
  heading(60);
}

//Solucion al cuarto ejercicio.
if (getX() < 80) {
  heading(0);
} else {
  heading(270);
}

//Solucion al quinto ejercicio.
if (getY() > 20) {
  heading(270);
} else {
  heading(180);
}

//Solucion al sexto ejercicio.
if (noWorm()) {
  heading(345);
} else if (getY() < 80) {
  heading(120);
} else {
  heading(180);
}

//Solucion al septimo ejercicio.
if (getY() > 50) {
  heading(240);
} else if (noWorm()) {
  heading(300);
} else {
  heading(180);
}

//Solucion al octavo ejercicio:
if (getX() < 50 && noWorm()) {
  heading(30);
} else if (noWorm()) {
  heading(330);
} else if (getY() < 55) {
  heading(120);
} else {
  heading(60);
}

//Solucion al noveno ejericio. 
if (noWorm() && getX() > 20) {
  heading(195);
} else if (noWorm()) {
  heading(270);
} else if (getX() < 40) {
  heading(75);
} else {
  heading(300);
}

//Solcuion al decimo ejericio.
if (noWorm() && getX() < 40) {
  heading(75);
} else if (noWorm()) {
  heading(315);
} else if (getX() > 40) {
  heading(135);
} else {
  heading(255);
}
