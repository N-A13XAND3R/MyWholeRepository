import java.util.*;

class Avion {
    private String empresa;
    private int capacidad;
    private int numeroSillasEjecutivas;
    private int numeroSillasEconomicas;

    public Avion(String empresa, int capacidad) {
        this.empresa = empresa;
        this.capacidad = capacidad;
        this.numeroSillasEjecutivas = (int) (capacidad * 0.4);
        this.numeroSillasEconomicas = (int) (capacidad * 0.6);
    }

    public String getEmpresa() {
        return empresa;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public int getNumeroSillasEjecutivas() {
        return numeroSillasEjecutivas;
    }

    public int getNumeroSillasEconomicas() {
        return numeroSillasEconomicas;
    }

    public void actualizarSillasEjecutivas(int cantidad) {
        this.numeroSillasEjecutivas -= cantidad;
    }

    public void actualizarSillasEconomicas(int cantidad) {
        this.numeroSillasEconomicas -= cantidad;
    }
}

class Pasajero {
    private String nombre;
    private String apellido;
    private int documento;

    public Pasajero(String nombre, String apellido, int documento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public int getDocumento() {
        return documento;
    }
}

class Reserva {
    private Vuelo vuelo;
    private Pasajero pasajero;
    private String clase;
    private int cantidadDeSillasAReservar;
    private double precioTotal;

    public Reserva(Vuelo vuelo, Pasajero pasajero, String clase, int cantidadDeSillasAReservar) {
        this.vuelo = vuelo;
        this.pasajero = pasajero;
        this.clase = clase;
        this.cantidadDeSillasAReservar = cantidadDeSillasAReservar;

        if (vuelo.hayDisponibilidad(clase, cantidadDeSillasAReservar)) {
            vuelo.reservarSillas(clase, cantidadDeSillasAReservar);
            double precioBase = clase.equalsIgnoreCase("Ejecutiva") ? vuelo.getPrecio() * 2.5 : vuelo.getPrecio();
            this.precioTotal = (precioBase * cantidadDeSillasAReservar) + (vuelo.getImpuesto() * cantidadDeSillasAReservar);
            System.out.println("Reserva creada con exito. Precio total: $" + precioTotal);
        } else {
            System.out.println("Error al crear la reserva: No hay suficientes asientos disponibles.");
        }
    }

    public double getPrecioTotal() {
        return precioTotal;
    }
}

abstract class Vuelo {
    protected int numero;
    protected String origen;
    protected String destino;
    protected String fecha;
    protected Avion avion;
    protected double precio;
    protected int sillasEjecutivasDisponibles;
    protected int sillasEconomicasDisponibles;

    public Vuelo(int numero, String origen, String destino, String fecha, Avion avion, double precio) {
        this.numero = numero;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
        this.avion = avion;
        this.precio = precio;
        this.sillasEjecutivasDisponibles = avion.getNumeroSillasEjecutivas();
        this.sillasEconomicasDisponibles = avion.getNumeroSillasEconomicas();
    }

    public int getNumero() {
        return numero;
    }

    public String getOrigen() {
        return origen;
    }

    public String getDestino() {
        return destino;
    }

    public String getFecha() {
        return fecha;
    }

    public Avion getAvion() {
        return avion;
    }

    public double getPrecio() {
        return precio;
    }

    public boolean hayDisponibilidad(String clase, int cantidad) {
        if (clase.equalsIgnoreCase("Ejecutiva")) {
            return cantidad <= sillasEjecutivasDisponibles;
        } else {
            return cantidad <= sillasEconomicasDisponibles;
        }
    }

    public void reservarSillas(String clase, int cantidad) {
        if (clase.equalsIgnoreCase("Ejecutiva")) {
            avion.actualizarSillasEjecutivas(cantidad);
        } else {
            avion.actualizarSillasEconomicas(cantidad);
        }
    }

    public abstract double getImpuesto();

    @Override
    public String toString() {
        return "Origen: " + origen + ", Destino: " + destino + ", Fecha: " + fecha + ", Empresa: " + avion.getEmpresa() + ", Precio: " + precio;
    }
}

class VueloNacional extends Vuelo {
    public VueloNacional(int numero, String origen, String destino, String fecha, Avion avion, double precio) {
        super(numero, origen, destino, fecha, avion, precio);
    }

    @Override
    public double getImpuesto() {
        return 1000;
    }
}

class VueloInternacional extends Vuelo {
    private String escalas;

    public VueloInternacional(int numero, String origen, String destino, String fecha, Avion avion, double precio, String escalas) {
        super(numero, origen, destino, fecha, avion, precio);
        this.escalas = escalas;
    }

    @Override
    public double getImpuesto() {
        return 2500;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}

class SistemaGestionVuelos {
    private List<Avion> aviones = new ArrayList<>();
    private List<Pasajero> pasajeros = new ArrayList<>();
    private List<Vuelo> vuelos = new ArrayList<>();

    public void registrarAvion(String empresa, int capacidad) {
        Avion avion = new Avion(empresa, capacidad);
        aviones.add(avion);
        System.out.println("Avion registrado con exito.");
    }

    public void registrarPasajero(String nombre, String apellido, int documento) {
        Pasajero pasajero = new Pasajero(nombre, apellido, documento);
        pasajeros.add(pasajero);
        System.out.println("Pasajero registrado con exito.");
    }

    public void crearVueloNacional(int numero, String origen, String destino, String fecha, String empresaAvion, double precio) {
        Avion avion = buscarAvion(empresaAvion);
        if (avion != null) {
            VueloNacional vuelo = new VueloNacional(numero, origen, destino, fecha, avion, precio);
            vuelos.add(vuelo);
            System.out.println("Vuelo creado con exito.");
        }
    }

    public void crearVueloInternacional(int numero, String origen, String destino, String fecha, String empresaAvion, double precio, String escalas) {
        Avion avion = buscarAvion(empresaAvion);
        if (avion != null) {
            VueloInternacional vuelo = new VueloInternacional(numero, origen, destino, fecha, avion, precio, escalas);
            vuelos.add(vuelo);
            System.out.println("Vuelo creado con exito.");
        }
    }

    public void crearReserva(int tipoVuelo, int numeroVuelo, String clase, String nombrePasajero, int cantidad) {
        Vuelo vuelo = buscarVuelo(numeroVuelo);
        Pasajero pasajero = buscarPasajero(nombrePasajero);
        if (vuelo != null && pasajero != null) {
            new Reserva(vuelo, pasajero, clase, cantidad);
        }
    }

    public void mostrarInformacionVuelo(int numeroVuelo) {
        Vuelo vuelo = buscarVuelo(numeroVuelo);
        if (vuelo != null) {
            System.out.println(vuelo);
        }
    }

    private Avion buscarAvion(String empresa) {
        for (Avion avion : aviones) {
            if (avion.getEmpresa().equalsIgnoreCase(empresa)) {
                return avion;
            }
        }
        return null;
    }

    private Vuelo buscarVuelo(int numero) {
        for (Vuelo vuelo : vuelos) {
            if (vuelo.getNumero() == numero) {
                return vuelo;
            }
        }
        return null;
    }

    private Pasajero buscarPasajero(String nombre) {
        for (Pasajero pasajero : pasajeros) {
            if (pasajero.getNombre().equalsIgnoreCase(nombre)) {
                return pasajero;
            }
        }
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        SistemaGestionVuelos sistema = new SistemaGestionVuelos();
        Scanner input = new Scanner(System.in);
        int opcion = -1;

        while (opcion != 0) {
            try {
                String opcionStr = input.nextLine();  
                opcion = Integer.parseInt(opcionStr); 

                switch (opcion) {
                    case 1:
                        String empresa = input.nextLine();
                        String capacidadStr = input.nextLine();
                        int capacidad = Integer.parseInt(capacidadStr);  
                        sistema.registrarAvion(empresa, capacidad);
                        break;

                    case 2:
                        String nombre = input.nextLine();
                        String apellido = input.nextLine();
                        String documentoStr = input.nextLine();
                        int documento = Integer.parseInt(documentoStr);  
                        sistema.registrarPasajero(nombre, apellido, documento);
                        break;

                    case 3:
                        String tipoVueloStr = input.nextLine();
                        int tipoVuelo = Integer.parseInt(tipoVueloStr);
                        String numeroVueloStr = input.nextLine();
                        int numeroVuelo = Integer.parseInt(numeroVueloStr);
                        String clase = input.nextLine();
                        String nombrePasajero = input.nextLine();
                        String cantidadStr = input.nextLine();
                        int cantidad = Integer.parseInt(cantidadStr);
                        sistema.crearReserva(tipoVuelo, numeroVuelo, clase, nombrePasajero, cantidad);
                        break;

                    case 4:
                        String empresaVueloNacional = input.nextLine();
                        String numeroVueloNacionalStr = input.nextLine();
                        int numeroVueloNacional = Integer.parseInt(numeroVueloNacionalStr);
                        String origen = input.nextLine();
                        String destino = input.nextLine();
                        String fecha = input.nextLine();
                        String precioStr = input.nextLine();
                        double precio = Double.parseDouble(precioStr);
                        sistema.crearVueloNacional(numeroVueloNacional, origen, destino, fecha, empresaVueloNacional, precio);
                        break;

                    case 5:
                        String empresaVueloInternacional = input.nextLine();
                        String numeroVueloInternacionalStr = input.nextLine();
                        int numeroVueloInternacional = Integer.parseInt(numeroVueloInternacionalStr);
                        String origenInt = input.nextLine();
                        String destinoInt = input.nextLine();
                        String fechaInt = input.nextLine();
                        String escalas = input.nextLine();
                        String precioIntStr = input.nextLine();
                        double precioInt = Double.parseDouble(precioIntStr);
                        sistema.crearVueloInternacional(numeroVueloInternacional, origenInt, destinoInt, fechaInt, empresaVueloInternacional, precioInt, escalas);
                        break;

                    case 6:
                        String numVueloStr = input.nextLine();
                        int numVuelo = Integer.parseInt(numVueloStr);
                        sistema.mostrarInformacionVuelo(numVuelo);
                        break;

                    case 0:
                        break;

                    default:
                        break;
                }
            } catch (NumberFormatException e) {
                System.out.println("Error");
            }
        }
    }
}
