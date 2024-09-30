import java.util.*;

abstract class Personaje {

    protected String nombre;
    protected int puntosDeVida;
    protected int puntosDeAtaque;

    public Personaje(String nombre, int puntosDeVida, int puntosDeAtaque) {
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.puntosDeAtaque = puntosDeAtaque;
    }

    // Metodo atacar definido en Personaje
    public void atacar(Personaje personaje) {
        personaje.setPuntosDeVida(personaje.getPuntosDeVida() - this.puntosDeAtaque);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPuntosDeVida() {
        return puntosDeVida;
    }

    public void setPuntosDeVida(int puntosDeVida) {
        this.puntosDeVida = puntosDeVida;
    }

    public int getPuntosDeAtaque() {
        return puntosDeAtaque;
    }

    public void setPuntosDeAtaque(int puntosDeAtaque) {
        this.puntosDeAtaque = puntosDeAtaque;
    }
}

final class Villano extends Personaje {

    public Villano(String nombre, int puntosDeVida, int puntosDeAtaque) {
        super(nombre, puntosDeVida, puntosDeAtaque);
    }
}

final class Heroe extends Personaje {

    private int creditos;
    private int numeroDeCuras = 2;
    private int numeroDeBoost = 2;

    public Heroe(String nombre, int puntosDeVida, int puntosDeAtaque, int creditos) {
        super(nombre, puntosDeVida, puntosDeAtaque);
        this.creditos = creditos;
    }

    public int getCreditos() {
        return creditos;
    }

    public void setCreditos(int creditos) {
        this.creditos = creditos;
    }

    public int getNumeroDeCuras() {
        return numeroDeCuras;
    }

    public void setNumeroDeCuras(int numeroDeCuras) {
        this.numeroDeCuras = numeroDeCuras;
    }

    public int getNumeroDeBoost() {
        return numeroDeBoost;
    }

    public void setNumeroDeBoost(int numeroDeBoost) {
        this.numeroDeBoost = numeroDeBoost;
    }

    public void curar() {
        if (this.numeroDeCuras > 0) {
            this.setPuntosDeVida(this.getPuntosDeVida() + 50);
            this.setNumeroDeCuras(this.getNumeroDeCuras() - 1);
            System.out.println(this.getNombre() + " aumenta su vida. Vida actual: " + this.getPuntosDeVida() + "");
        } else {
            System.out.println("No tienes mas habilidades disponibles, debes comprar. Perdiste el turno.");
        }
    }

    public void boost() {
        if (this.getNumeroDeBoost() > 0) {
            this.setPuntosDeAtaque(this.getPuntosDeAtaque() * 2);
            this.setNumeroDeBoost(this.getNumeroDeBoost() - 1);
            System.out
                    .println(this.getNombre() + " duplica su ataque. Ataque actual: " + this.getPuntosDeAtaque() + "");
        } else {
            System.out.println("No tienes mas habilidades disponibles, debes comprar. Perdiste el turno.");
        }
    }
}

final class Tienda {

    private int valorCura = 40;
    private int valorBoost = 20;

    public int getValorCura() {
        return valorCura;
    }

    public int getValorBoost() {
        return valorBoost;
    }

    public void cobrarCura(Heroe miHeroe) {
        if (miHeroe.getCreditos() >= this.getValorCura()) {
            miHeroe.setCreditos(miHeroe.getCreditos() - this.getValorCura());
            miHeroe.setNumeroDeCuras(miHeroe.getNumeroDeCuras() + 1);
            System.out.println("Has comprado la habilidad aumentar_vida");
        } else {
            System.out.println("No tienes los suficientes creditos para comprar esta habilidad. Perdiste el turno.");
        }
    }

    public void cobrarBoost(Heroe miHeroe) {
        if (miHeroe.getCreditos() >= this.getValorBoost()) {
            miHeroe.setCreditos(miHeroe.getCreditos() - getValorBoost());
            miHeroe.setNumeroDeBoost(miHeroe.getNumeroDeBoost() + 1);
            System.out.println("Has comprado la habilidad duplicar_ataque");
        } else {
            System.out.println("No tienes los suficientes creditos para comprar esta habilidad. Perdiste el turno.");
        }
    }
}

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String nombreHeroe = input.nextLine();
        int puntosDeVidaHeroe = input.nextInt();
        int puntosDeAtaqueHeroe = input.nextInt();
        int creditosHeroe = input.nextInt();
        input.nextLine();

        String nombreVillano = input.nextLine();
        int puntosDeVidaVillano = input.nextInt();
        int puntosDeAtaqueVillano = input.nextInt();

        Heroe heroe = new Heroe(nombreHeroe, puntosDeVidaHeroe, puntosDeAtaqueHeroe, creditosHeroe);
        Villano villano = new Villano(nombreVillano, puntosDeVidaVillano, puntosDeAtaqueVillano);
        Tienda tienda = new Tienda();

        System.out.println("Comienza la batalla");
        System.out.println(heroe.getNombre() + ": Vida = " + heroe.getPuntosDeVida() + "");
        System.out.println(villano.getNombre() + ": Vida = " + villano.getPuntosDeVida() + "");

        while (true) {

            int opcion = input.nextInt();

            if (opcion == 1) {
                heroe.atacar(villano);
                System.out.println(villano.getNombre() + " recibe " + heroe.getPuntosDeAtaque() + " puntos de dano. Vida restante: " + villano.getPuntosDeVida() + "");
                if (villano.getPuntosDeVida() <= 0) {
                    System.out.println("Has derrotado al villano.");
                    break;
                }
            } else if (opcion == 2) {

                input.nextLine();
                String usarHabilidad = input.nextLine();

                if (usarHabilidad.equals("aumentar_vida")) {
                    heroe.curar();
                } else if (usarHabilidad.equals("duplicar_ataque")) {
                    heroe.boost();
                } else {
                    System.out.println("Uso invalido");
                }
            } else if (opcion == 3) {

                input.nextLine();
                String comprarHabilidad = input.nextLine();

                if (comprarHabilidad.equals("aumentar_vida")) {
                    tienda.cobrarCura(heroe);
                } else if (comprarHabilidad.equals("duplicar_ataque")) {
                    tienda.cobrarBoost(heroe);
                } else {
                    System.out.println("Compra invaida");
                }
            } else {
                System.out.println("Opcion invalida.");
            }
            villano.atacar(heroe);
            System.out.println(heroe.getNombre() + " recibe " + villano.getPuntosDeAtaque()+ " puntos de dano. Vida restante: " + heroe.getPuntosDeVida() + "");
            if (heroe.getPuntosDeVida() <= 0) {
                System.out.println("El heroe ha sido derrotado.");
                break;
            }
        }
    }
}
