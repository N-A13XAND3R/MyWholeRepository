import java.util.*;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    int numeroDeIteraciones = input.nextInt();
    List<Integer> otrasFracciones = new ArrayList<Integer>();
    input.nextLine();

    for (int i = 0; i < numeroDeIteraciones * 2; i++) 
      otrasFracciones.add(input.nextInt());

    input.nextLine();
    int numeradorDeMiFraccion = input.nextInt();
    int denominadordDeMiFraccion = input.nextInt();

    Fraccion fraccion1 = new Fraccion(numeradorDeMiFraccion, denominadordDeMiFraccion, numeroDeIteraciones, otrasFracciones);
    System.out.println(fraccion1.fraccionGanadora());

  }
}

class Fraccion {

    int numerador;
    int denominador;
    int numeroDeIteraciones;
    List<Integer> otrasFracciones;

    public Fraccion(int numerador, int denominador, int numeroDeIteraciones, List<Integer> otrasFracciones) {
      this.numerador = numerador;
      this.denominador = denominador;
      this.numeroDeIteraciones = numeroDeIteraciones;
      this.otrasFracciones = otrasFracciones;
    }

    public String numeroMixto(){
      int entero = numerador / denominador;
      int residuo = numerador % denominador;

      if (entero == 0)
        return residuo + "/" + denominador;
      else if (residuo == 0)
        return "" + entero;
      else
        return entero + " " + Math.abs(residuo) + "/" + denominador;
    }

    public String fraccionGanadora() {
      float valorRealDeMiFraccion = (float) numerador / denominador;
      float menorDiferencia = Math.abs(valorRealDeMiFraccion - ((float) otrasFracciones.get(0) / otrasFracciones.get(1)));
      int numeradorGanador = otrasFracciones.get(0);
      int denominadorGanador = otrasFracciones.get(1);

      for (int i = 0; i < numeroDeIteraciones; i++) {
        float nuevaDiferencia = Math.abs(valorRealDeMiFraccion - ((float) otrasFracciones.get(2 * i) / otrasFracciones.get(2 * i + 1)));

        if (nuevaDiferencia < menorDiferencia) {
          menorDiferencia = nuevaDiferencia;
          numeradorGanador = otrasFracciones.get(2 * i);
          denominadorGanador = otrasFracciones.get(2 * i + 1);
        }
      }

      Fraccion fraccion2 = new Fraccion(numeradorGanador, denominadorGanador, numeroDeIteraciones, otrasFracciones);
      return Math.abs((numerador * denominadorGanador) - (denominador * numeradorGanador)) +"/"+ Math.abs(denominador * denominadorGanador) +"\n"+ fraccion2.numeroMixto();
      
    }
}
