import java.io.*;
import java.util.*;
import java.lang.Math;

public class Main {
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    String inputDeHackerRank = input.nextLine();
    String[] listaDeNumeros = inputDeHackerRank.split(" ");

    Fraccion fraccion1 = new Fraccion(listaDeNumeros[0], listaDeNumeros[1]);
    System.out.println(fraccion1.fraccionNormal() + " " + fraccion1.numeroMixto());

  }
}

class Fraccion {

  int numerador;
  int denominador;
  int numeradorArreglado;
  int denominadorArreglado;

  public Fraccion(String a, String b) {

    numerador = Integer.parseInt(a);
    denominador = Integer.parseInt(b);

    numeradorArreglado = (numerador * denominador * Math.abs(numerador) / Math.abs(numerador * denominador));
    denominadorArreglado = (numerador * denominador * Math.abs(denominador) / (denominador * numerador));

  }

  public String fraccionNormal() {

    return numeradorArreglado + "/" + (denominadorArreglado);

  }

  public String numeroMixto() {

    int entero = numeradorArreglado / denominadorArreglado;
    int residuo = numeradorArreglado % denominadorArreglado;

    if (entero == 0) {
      return residuo + "/" + denominadorArreglado;
    } else if (residuo == 0) {
      return "" + entero;
    } else {
      return entero + " " + Math.abs(residuo) + "/" + denominadorArreglado;

    }
  }
}
