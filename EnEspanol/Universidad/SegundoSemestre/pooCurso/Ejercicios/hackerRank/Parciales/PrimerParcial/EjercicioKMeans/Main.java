import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ESCANEAR LA ENTRADA DEL USUARIO
        Scanner input = new Scanner(System.in);

        // LEER LA CANTIDAD DE PUNTOS
        int cantPuntos = input.nextInt();
        Punto[] puntos = new Punto[cantPuntos];
        int dimensionPuntos = input.nextInt();

        // LEER LOS PUNTOS
        List<Punto> puntosOriginales = new ArrayList<Punto>();
        for (int i = 0; i < cantPuntos; i++) {
            double[] posicion = new double[dimensionPuntos];
            for (int j = 0; j < dimensionPuntos; j++) 
                posicion[j] = input.nextDouble();
            Punto punto = new Punto(posicion);
            puntos[i] = punto;
            puntosOriginales.add(punto);
        }

        // LEER LA CANTIDAD DE CLUSTERS
        int cantClusters = input.nextInt();
        List<Cluster> clusters = new ArrayList<Cluster>();
        for (int i = 0; i < cantClusters; i++) {
            double[] posicion = new double[dimensionPuntos];
            for (int j = 0; j < dimensionPuntos; j++) 
                posicion[j] = input.nextDouble();
            clusters.add(new Cluster(new Punto(posicion)));
        }

        // LEER LA CANTIDAD DE ITERACIONES Y EL VALOR DE P
        int cantIteraciones = input.nextInt();
        double p = input.nextDouble();
        input.close();

        // INICIAR KMEANS Y FORMATEAR RESULTADOS
        KMeans kmeans = new KMeans(clusters, puntos, cantIteraciones, p);
        OutputFormatter formatter = new OutputFormatter(clusters, puntosOriginales);
        formatter.imprimirResultados();
    }

    // CLASE PUNTO
    public static class Punto {
        private double[] posicion;

        // CONSTRUCTOR DE LA CLASE PUNTO
        public Punto(double[] posicion) {
            this.posicion = posicion;}

        // OBTENER LA DIMENSION DEL PUNTO
        public int getDimension() {
            return this.posicion.length;}

        // ESTABLECER LA POSICION DEL PUNTO
        public void setPosicion(double[] posicion) {
            this.posicion = posicion;}

        // OBTENER UNA COORDENADA ESPECIFICA DEL PUNTO
        public double getCoord(int numCoord) {
            return this.posicion[numCoord];}

        // CALCULAR LA DISTANCIA DE MINKOWSKI ENTRE DOS PUNTOS
        public double calcularMinkowski(Punto comparable, double p) {
            double sumatoria = 0.0;
            for (int i = 0; i < this.posicion.length; i++) 
                sumatoria += Math.pow(Math.abs(comparable.getCoord(i) - this.getCoord(i)), p);
            return Math.pow(sumatoria, 1.0 / p);
        }

        // CONVERTIR EL PUNTO A UNA CADENA DE TEXTO
        public String toString() {
            return Arrays.toString(posicion);}
    }

    // CLASE CLUSTER
    public static class Cluster {
        private Punto centro;
        private ArrayList<Punto> puntos = new ArrayList<Punto>();

        // CONSTRUCTOR DE LA CLASE CLUSTER
        public Cluster(Punto centro) {
            this.centro = centro;}

        // OBTENER EL CENTROIDE DEL CLUSTER
        public Punto getCentro() {
            return this.centro;}

        // ESTABLECER EL CENTROIDE DEL CLUSTER
        public void setCentro(Punto centro) {
            this.centro = centro;}

        // OBTENER LOS PUNTOS DEL CLUSTER
        public ArrayList<Punto> getPuntos() {
            return this.puntos;}

        // ESTABLECER LOS PUNTOS DEL CLUSTER
        public void setPuntos(ArrayList<Punto> puntos) {
            this.puntos = puntos;}

        // AGREGAR UN PUNTO AL CLUSTER
        public void addPunto(Punto punto) {
            this.puntos.add(punto);}

        // ACTUALIZAR EL CENTROIDE DEL CLUSTER
        public void actualizarCentroide() {
            if (!puntos.isEmpty()) {
                int dimension = centro.getDimension();
                double[] posicion = new double[dimension];
                for (int i = 0; i < dimension; i++) {
                    double prom = 0.0;
                    for (Punto iPunto : puntos) 
                        prom += iPunto.getCoord(i);
                    posicion[i] = prom / (double) puntos.size();
                }
                this.centro.setPosicion(posicion);
            }
        }

        // REINICIAR LOS PUNTOS DEL CLUSTER
        public void reiniciarPuntos() {
            this.puntos.clear();}

        // CONVERTIR EL CLUSTER A UNA CADENA DE TEXTO
        public String toString() {
            return "Centroide: " + centro.toString();}
    }

    // CLASE KMEANS
    public static class KMeans {
        private List<Cluster> clusters;
        private Punto[] puntos;
        private int iteraciones;
        private double p;

        // CONSTRUCTOR DE LA CLASE KMEANS
        public KMeans(List<Cluster> clusters, Punto[] puntos, int iteraciones, double p) {
            this.clusters = clusters;
            this.puntos = puntos;
            this.iteraciones = iteraciones;
            this.p = p;

            // ALGORITMO KMEANS
            for (int i = 0; i < iteraciones + 1; i++) {
                for (Cluster cluster : clusters) 
                    cluster.reiniciarPuntos();

                for (Punto iPunto : this.puntos) {
                    int clusterMasCercano = 0;
                    double minDistancia = iPunto.calcularMinkowski(this.clusters.get(clusterMasCercano).getCentro(), p);

                    for (int j = 1; j < this.clusters.size(); j++) {
                        double next = iPunto.calcularMinkowski(this.clusters.get(j).getCentro(), p);
                        if (next < minDistancia) {
                            minDistancia = next;
                            clusterMasCercano = j;
                        }
                    }
                    this.clusters.get(clusterMasCercano).addPunto(iPunto);
                }
                for (Cluster iCluster : this.clusters) 
                    iCluster.actualizarCentroide();
            }
        }
    }

    // CLASE OUTPUTFORMATTER
    public static class OutputFormatter {
        private List<Cluster> clusters;
        private List<Punto> puntosOriginales;

        // CONSTRUCTOR DE LA CLASE OUTPUTFORMATTER
        public OutputFormatter(List<Cluster> clusters, List<Punto> puntosOriginales) {
            this.clusters = clusters;
            this.puntosOriginales = puntosOriginales;
        }

        // IMPRIMIR LOS RESULTADOS DEL ALGORITMO KMEANS
        public void imprimirResultados() {
            Map<Punto, Integer> puntoToClusterIndex = new HashMap<Punto, Integer>();
            for (int i = 0; i < clusters.size(); i++) {
                for (Punto p : clusters.get(i).getPuntos()) 
                    puntoToClusterIndex.put(p, i);
            }

            StringBuilder result = new StringBuilder();
            for (int i = 0; i < clusters.size(); i++) {
                Cluster cluster = clusters.get(i);
                if (i == 0)
                    result.append("Cluster ").append(i + 1).append(" - ").append(cluster.toString()).append("\nPuntos en el cluster:\n");
                else 
                    result.append("\nCluster ").append(i + 1).append(" - ").append(cluster.toString()).append("\nPuntos en el cluster:\n");

                List<Punto> puntos = new ArrayList<Punto>();
                for (Punto p : puntosOriginales) {
                    if (puntoToClusterIndex.get(p) == i) 
                        puntos.add(p);
                }

                for (int j = 0; j < puntos.size(); j++) {
                    result.append(puntos.get(j).toString());
                    if (j < puntos.size() - 1) 
                        result.append("\n");
                }
                
                if (i < clusters.size() - 1) 
                    result.append("\n");
            }
            
            System.out.println(result.toString());
        }
    }
}
