import java.util.Scanner;

public class Empleado {
    private String nombre;
    private int edad;
    private String genero;
    private String departamento;
    private int semanasCotizadas;
    private double salario;

    public Empleado(String nombre, int edad, String genero, String departamento, int semanasCotizadas, double salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.departamento = departamento;
        this.semanasCotizadas = semanasCotizadas;
        this.salario = salario;
    }

    public double obtenerBonificacion() {
        double bonificacion = 0.0;
        if (semanasCotizadas <= 325) {
            bonificacion = 0.10;
        } else if (semanasCotizadas <= 650) {
            bonificacion = 0.15;
        } else if (semanasCotizadas <= 975) {
            bonificacion = 0.20;
        } else {
            bonificacion = 0.25;
        }
        return bonificacion;
    }

    public void aumentarSalario() {
        double bonificacion = obtenerBonificacion();
        salario += salario * bonificacion;
        System.out.println("Su nuevo salario es:" + salario);
    }

    public void aumentarSemanasCotizadas() {
        semanasCotizadas++;
    }

    public void derechoPensionarse() {
        if (semanasCotizadas >= 1300 && ((genero.equals("H") && edad >= 62) || (genero.equals("M") && edad >= 57))) {
            System.out.println(nombre + " tiene derecho a la pension");
        } else {
            System.out.println("Aun no tiene derecho a la pension");
        }
    }

    public int cuantasSemanasFaltanParaPensionarse() {
        int semanasFaltantes = 1300 - semanasCotizadas +1;
        return semanasFaltantes > 0 ? semanasFaltantes : 0;
    }

    public void mostrarInformacion() {
        System.out.println("Nombre:" + nombre + " edad:" + edad + " genero:" + genero + " departamento:" + departamento + " semanas Cotizadas:" + semanasCotizadas + " Salario:" + salario + " pesos");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nombre = scanner.nextLine();
        int edad = scanner.nextInt();
        scanner.nextLine(); 
        String genero = scanner.nextLine();
        String departamento = scanner.nextLine();
        int semanasCotizadas = scanner.nextInt();
        scanner.nextLine(); 
        double salario = Double.parseDouble(scanner.nextLine());

        Empleado empleado = new Empleado(nombre, edad, genero, departamento, semanasCotizadas, salario);
        empleado.aumentarSalario();
        empleado.aumentarSemanasCotizadas();
        empleado.derechoPensionarse();

        if (empleado.cuantasSemanasFaltanParaPensionarse() > 0) {
            System.out.println("Le hacen falta: " + empleado.cuantasSemanasFaltanParaPensionarse() + " semanas");
        } else {
            System.out.println("Ya cumplio las semanas");
        }

        empleado.mostrarInformacion();
    }
}
