import java.util.Scanner;

class Triki {
    private char[][] tresEnLinea = {{'a','a','a'},{'a','a','a'},{'a','a','a'}};
    
    public char verificarCasilla(int fila, int columna) {
        return tresEnLinea[fila][columna];
    }
    
    public char verificarGanador() {
        for (int i = 0; i < 3; i++) {
            if (tresEnLinea[i][0] != 'a' && tresEnLinea[i][0] == tresEnLinea[i][1] && tresEnLinea[i][0] == tresEnLinea[i][2]) {
                return tresEnLinea[i][0];
            }
            if (tresEnLinea[0][i] != 'a' && tresEnLinea[0][i] == tresEnLinea[1][i] && tresEnLinea[0][i] == tresEnLinea[2][i]) {
                return tresEnLinea[0][i];
            }
        }
        if (tresEnLinea[0][0] != 'a' && tresEnLinea[0][0] == tresEnLinea[1][1] && tresEnLinea[0][0] == tresEnLinea[2][2]) {
            return tresEnLinea[0][0];
        }
        if (tresEnLinea[0][2] != 'a' && tresEnLinea[0][2] == tresEnLinea[1][1] && tresEnLinea[0][2] == tresEnLinea[2][0]) {
            return tresEnLinea[0][2];
        }
        return 'a';
    }
    
    public void marcarCasilla(char simbolo, int fila, int columna) {
        tresEnLinea[fila][columna] = simbolo;
    }
    
    public void imprimirTablero() {
        for (char[] fila : tresEnLinea) {
            for (char index : fila) {
                System.out.print(index);
            }
            System.out.println();
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Triki triki = new Triki();
        while (triki.verificarGanador() == 'a') {
            String simbolo = input.nextLine();
            if (simbolo.length() == 1 && (simbolo.charAt(0) == 'X' || simbolo.charAt(0) == 'O')) {
                System.out.println("SA");
                while (true) {
                    int coord1 = input.nextInt();
                    int coord2 = input.nextInt();
                    if (coord1 >= 0 && coord1 <= 2 && coord2 >= 0 && coord2 <= 2 && triki.verificarCasilla(coord1, coord2) == 'a') {
                        System.out.println("CA");
                        triki.marcarCasilla(simbolo.charAt(0), coord1, coord2);
                        if (triki.verificarGanador() == 'a') {
                            input.nextLine();
                        }
                        break;
                    } else {
                        System.out.println("CNA");
                    }
                }
            } else {
                System.out.println("SNA");
            }
        }
        triki.imprimirTablero();
        System.out.println("El simbolo ganador fue: " + triki.verificarGanador());
    }
}
