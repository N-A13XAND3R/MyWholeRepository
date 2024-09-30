import java.util.*;

class Punto {
    List<Integer> coordenadas;

    Punto(List<Integer> coordenadas) {
        this.coordenadas = coordenadas; // CONSTRUCTOR 
    }

    // METODO PARA CALCULAR LA DISTANCIA DE MINKOWSKI ENTRE DOS PUNTOS
    double distanciaMinkowski(Punto otro, double p) {
        double suma = 0;
        for (int i = 0; i < coordenadas.size(); i++) 
            suma += Math.pow(Math.abs(coordenadas.get(i) - otro.coordenadas.get(i)), p); 
        return Math.pow(suma, 1 / p); 
    }
}

class Cluster {
    Punto centroide;
    List<Punto> puntos;
    List<String> palabras;

    Cluster(Punto centroide) {
        this.centroide = centroide; // CONSTRUCTOR PARA INICIALIZAR EL CENTROIDE DEL CLUSTER
        this.puntos = new ArrayList<Punto>(); // INICIALIZACION DE LA LISTA DE PUNTOS
        this.palabras = new ArrayList<String>(); // INICIALIZACION DE LA LISTA DE PALABRAS
    }

    // METODO PARA ACTUALIZAR EL CENTROIDE DEL CLUSTER
    void actualizarCentroide() {
        if (puntos.isEmpty()) return; // SI NO HAY PUNTOS, NO SE ACTUALIZA EL CENTROIDE

        int dimensiones = centroide.coordenadas.size();
        List<Integer> nuevoCentroide = new ArrayList<Integer>();
        for (int i = 0; i < dimensiones; i++) {
            int suma = 0;
            for (Punto p : puntos) 
                suma += p.coordenadas.get(i); 
            nuevoCentroide.add(suma / puntos.size()); // CALCULO DE LA NUEVA COORDENADA PROMEDIO
        }
        centroide = new Punto(nuevoCentroide); // ACTUALIZACION
    }
}

class KMeans {
    List<Punto> puntos;
    List<Cluster> clusters;
    List<String> palabras;
    double p;
    
   // CONSTRUCTOR
    KMeans(List<Punto> puntos, List<Cluster> clusters, double p, List<String> palabras) {
        this.puntos = puntos;  
        this.clusters = clusters; 
        this.p = p; 
        this.palabras = palabras; 
    }

    // METODO PARA EJECUTAR EL ALGORITMO KMEANS
    void ejecutar(int iteraciones) {
        for (int i = 0; i < iteraciones; i++) {
            for (Cluster c : clusters) {
                c.puntos.clear(); 
                c.palabras.clear(); 
            }

            for (int j = 0; j < puntos.size(); j++) {
                Punto punto = puntos.get(j);
                Cluster clusterCercano = clusters.get(0);
                double distanciaMinima = punto.distanciaMinkowski(clusterCercano.centroide, p); 

                for (Cluster cluster : clusters) {
                    double distancia = punto.distanciaMinkowski(cluster.centroide, p); 
                    if (distancia < distanciaMinima) {
                        distanciaMinima = distancia; 
                        clusterCercano = cluster;}
                }
                clusterCercano.puntos.add(punto); 
                clusterCercano.palabras.add(palabras.get(j)); 
            }

            for (Cluster cluster : clusters) 
                cluster.actualizarCentroide(); 
        }
    }
}

public class Main {
    // METODO PARA CONTAR LAS LETRAS DE UNA PALABRA
    private static List<Integer> contarLetras(String palabra) {
        List<Integer> conteo = new ArrayList<Integer>();
        for (int i = 0; i < 26; i++) 
            conteo.add(0); 
        for (char c : palabra.toCharArray()) {
            if (Character.isLetter(c)) {
                int indice = Character.toLowerCase(c) - 'a';
                if (indice >= 0 && indice < 26) 
                    conteo.set(indice, conteo.get(indice) + 1); 
            }
        }
        return conteo; 
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int numPalabras = input.nextInt(); 
        input.nextLine(); 

        List<String> palabras = new ArrayList<String>();
        List<Punto> puntos = new ArrayList<Punto>();

        // LECTURA DE PALABRAS Y CREACION DE PUNTOS
        for (int i = 0; i < numPalabras; i++) {
            String palabra = input.nextLine();
            palabras.add(palabra);
            puntos.add(new Punto(contarLetras(palabra))); 
        }

        int numClusters = input.nextInt(); 
        List<Cluster> clusters = new ArrayList<Cluster>();

        // LECTURA DE COORDENADAS Y CREACION DE CLUSTERS
        for (int i = 0; i < numClusters; i++) {
            List<Integer> coordenadas = new ArrayList<Integer>();
            for (int j = 0; j < 26; j++) 
                coordenadas.add(input.nextInt());
            input.nextLine(); 
            clusters.add(new Cluster(new Punto(coordenadas))); 
        }

        double p = input.nextDouble(); 
        int iteraciones = input.nextInt(); 
        input.close();

        KMeans kmeans = new KMeans(puntos, clusters, p, palabras); 
        kmeans.ejecutar(iteraciones); // EJECUCION DEL ALGORITMO KMEANS

        // IMPRESION DE LOS RESULTADOS
        for (int i = 0; i < clusters.size(); i++) {
            Cluster cluster = clusters.get(i);
            if (i > 0)
                System.out.println("");
            System.out.println("Cluster " + (i + 1));
            System.out.println("Palabras en el cluster:");
            for (String palabra : cluster.palabras) {
                System.out.println(palabra);
            }
        }
    }
}
