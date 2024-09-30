//Solucion al primer ejercicio.
cannon(90, 40);

//Solucion al segundo ejercicio.
cannon(180, 50);

//Solucion al tercer ejercicio.
while (true) {
  cannon(45, 60);
}

//Solucion al cuarto ejercicio.
while (true){
  cannon(270, 60);
}

//Solucion al quinto ejercicio.
while (true) {
  cannon(180, scan(180));
}

//Solucion al sexto ejercicio.
while (true){
  cannon(0, scan(0));
}

//Solucion al septimo ejercicio.
swim(315);
while (true) {
  cannon(315, scan(315));
}

//Solucion al octavo ejercicio:
swim(280);

//Solucion al noveno ejericio. 
while (true) {
  if (getX() < 50) {
    swim(0);
  } else {
    stop();
  }
  cannon(0, scan(0));
}

//Solcuion al decimo ejericio.
while (true){
  cannon(45, scan(45));
  
  if (getX()>50 || getX() == 0){
    stop;
  }else{
    swim(45);
  }
}
