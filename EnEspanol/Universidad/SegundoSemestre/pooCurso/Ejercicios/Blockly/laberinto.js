
//Solucion al primer ejercicio.
moveForward();
moveForward();

//Solucion al segundo ejercicio.

moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();

//Solucion al tercer ejercicio. 

while (notDone()) {
  moveForward();
}

//Solucion al cuarto ejercicio. 

while (notDone()) {
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}

// solucion al quinto ejercicio. 

moveForward();
moveForward();
turnLeft();
while (notDone()) {
  moveForward();
}

//Solucion al sexto ejercicio. 

while (notDone()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}

//Solucion al septimo ejercicio. 

while (notDone()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}

//Solucion al octavo ejercicio.

while (notDone()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
  if (isPathRight()) {
    turnRight();
  }
}

//Solcuion al noveno ejercicio.

while (notDone()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}

//Solucion al decimo ejercicio.

while (notDone()) {
  if (isPathLeft()) {
    turnLeft();
    moveForward();
  } else {
    if (isPathForward()) {
      moveForward();
    } else {
      turnRight();
    }
  }
}
