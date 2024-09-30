import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    int numeroDeFracciones = input.nextInt();
    int numerador1 = input.nextInt();
    int denominador1 = input.nextInt();
    String listaDeRespuestas = "";

    for (int i = 0; i < numeroDeFracciones - 1; i++) {

      int numerador2 = input.nextInt();
      int denominador2 = input.nextInt();

      int numerador = numerador1 * denominador2;
      int denominador = denominador1 * numerador2;

      numerador1 = numerador2;
      denominador1 = denominador2;

      numerador = (numerador * denominador * Math.abs(numerador) / Math.abs(numerador * denominador));
      denominador = (numerador * denominador * Math.abs(denominador) / (denominador * numerador));

      Fraccion fracciones = new Fraccion(numerador, denominador);
      listaDeRespuestas = listaDeRespuestas + fracciones.numeroMixto()+ " ";

    }
    System.out.println(listaDeRespuestas);
  }
}

class Fraccion {

  int numerador;
  int denominador;

  public Fraccion(int numerador, int denominador) {
    this.numerador = (numerador * denominador * Math.abs(numerador) / Math.abs(numerador * denominador));
    this.denominador = (numerador * denominador * Math.abs(denominador) / (denominador * numerador));
  }

  public String numeroMixto() {
    int entero = numerador / denominador;
    int residuo = numerador % denominador;

    if (entero == 0) {
      return residuo + "/" + denominador;
    } else if (residuo == 0) {
      return "" + entero;
    } else {
      return entero + " " + Math.abs(residuo) + "/" + denominador;
    }
  }
}
