import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int numeroDeIteraciones = input.nextInt();
        input.nextLine(); 

        String listaDePropios = "";
        String listaDeMixtos = "";
        String listaDeTodo = "";

        for (int i = 0; i < numeroDeIteraciones; i++) {

            String inputDeHackerRank = input.nextLine();
            String[] listaDeNumeros = inputDeHackerRank.split(" ");

            Fraccion fraccion1 = new Fraccion(listaDeNumeros[0], listaDeNumeros[1]);
            listaDePropios = listaDePropios + fraccion1.fraccionNormal()+ " ";
            listaDeMixtos = listaDeMixtos + fraccion1.numeroMixto()+ " ";
            listaDeTodo = listaDeTodo + fraccion1.fraccionNormal() + " " + fraccion1.numeroMixto()+ " ";
        }
        
        char tipoDeLista = input.nextLine().charAt(0);

        if (tipoDeLista == 'p'){
            System.out.println(listaDePropios);
        }else if (tipoDeLista == 'm'){
            System.out.println(listaDeMixtos);
        }else{
            System.out.println(listaDeTodo);
        }
    }
}

class Fraccion {
  int numerador;
  int denominador;

  public Fraccion(String a, String b) {
    numerador = Integer.parseInt(a);
    denominador = Integer.parseInt(b);
    numerador= (numerador * denominador * Math.abs(numerador) / Math.abs(numerador * denominador));
    denominador = (numerador * denominador * Math.abs(denominador) / (denominador * numerador));
  }

  public String fraccionNormal() {
    return numerador + "/" + (denominador);
  }

  public String numeroMixto() {
    int entero = numerador/ denominador;
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
