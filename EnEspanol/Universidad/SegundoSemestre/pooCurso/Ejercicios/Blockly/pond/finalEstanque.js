function swiming(angle){
  swim(angle, 100);
}

function attack(para1){
  cannon(135+para1, scan(135+para1))
  cannon(270+para1, scan(270+para1))
  cannon(45+para1, scan(45+para1))
}

while (true){
  while(getX()< 80){
    swiming(0);
    attack(0);
  }
  while(getY()< 80){
    swiming(90);
    attack(90);
  }
  while(getX()> 20){
    swiming(180);
    attack(180);
  }
  while(getY()> 20){
    swiming(270);
    attack(270);
  }
}
