import java.util.Scanner;

interface Curso {
    double calcularNotaFinal();
    boolean estaAprobado(double notaFinal);
    String obtenerRendimiento(double notaFinal);
}

class CursoRegular implements Curso {
    private double examen;
    private double tarea;
    private double proyecto;

    public CursoRegular(double examen, double tarea, double proyecto) {
        this.examen = examen;
        this.tarea = tarea;
        this.proyecto = proyecto;
    }

    @Override
    public double calcularNotaFinal() {
        return (examen * 0.6) + (tarea * 0.3) + (proyecto * 0.1);
    }

    @Override
    public boolean estaAprobado(double notaFinal) {
        return notaFinal >= 60;
    }

    @Override
    public String obtenerRendimiento(double notaFinal) {
        if (notaFinal >= 90) {
            return "Excelente";
        } else if (notaFinal >= 75) {
            return "Bueno";
        } else if (notaFinal >= 60) {
            return "Suficiente";
        } else {
            return "Insuficiente";
        }
    }
}

class CursoAvanzado implements Curso {
    private double examen;
    private double tarea;
    private double proyecto;

    public CursoAvanzado(double examen, double tarea, double proyecto) {
        this.examen = examen;
        this.tarea = tarea;
        this.proyecto = proyecto;
    }

    @Override
    public double calcularNotaFinal() {
        return (examen * 0.7) + (tarea * 0.1) + (proyecto * 0.2);
    }

    @Override
    public boolean estaAprobado(double notaFinal) {
        return notaFinal >= 70;
    }

    @Override
    public String obtenerRendimiento(double notaFinal) {
        if (notaFinal >= 90) {
            return "Excelente";
        } else if (notaFinal >= 80) {
            return "Bueno";
        } else if (notaFinal >= 70) {
            return "Suficiente";
        } else {
            return "Insuficiente";
        }
    }
}

class Taller implements Curso {
    private double examen;
    private double tarea;
    private double proyecto;

    public Taller(double examen, double tarea, double proyecto) {
        this.examen = examen;
        this.tarea = tarea;
        this.proyecto = proyecto;
    }

    @Override
    public double calcularNotaFinal() {
        return (examen * 0.3) + (tarea * 0.2) + (proyecto * 0.5);
    }

    @Override
    public boolean estaAprobado(double notaFinal) {
        return notaFinal >= 65;
    }

    @Override
    public String obtenerRendimiento(double notaFinal) {
        if (notaFinal >= 85) {
            return "Excelente";
        } else if (notaFinal >= 75) {
            return "Bueno";
        } else if (notaFinal >= 65) {
            return "Suficiente";
        } else {
            return "Insuficiente";
        }
    }
}

public class SistemaCursos {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.nextLine(); 

        for (int i = 1; i <= n; i++) {
            String[] datos = input.nextLine().split(" ");
            String tipoCurso = datos[0];
            double examen = Double.parseDouble(datos[1]);
            double tarea = Double.parseDouble(datos[2]);
            double proyecto = Double.parseDouble(datos[3]);

            Curso curso;

            if (tipoCurso.equals("CursoRegular")) {
                curso = new CursoRegular(examen, tarea, proyecto);
            } else if (tipoCurso.equals("CursoAvanzado")) {
                curso = new CursoAvanzado(examen, tarea, proyecto);
            } else {
                curso = new Taller(examen, tarea, proyecto);
            }

            double notaFinal = curso.calcularNotaFinal();
            String estado = curso.estaAprobado(notaFinal) ? "Aprobado" : "No Aprobado";
            String rendimiento = curso.obtenerRendimiento(notaFinal);

            System.out.println("Curso " + i + " (" + tipoCurso + "):");
            System.out.println("Nota Final: " + notaFinal);
            System.out.println("Estado: " + estado);
            System.out.println("Rendimiento: " + rendimiento);
            System.out.println(); 
        }
        input.close();
    }
}
