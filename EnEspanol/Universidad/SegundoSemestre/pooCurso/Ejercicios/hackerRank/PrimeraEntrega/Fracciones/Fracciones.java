import java.util.Scanner;
import java.lang.Math;

public class Fracciones {

    String fraccion;

    public Fracciones(String fraction){
        
        fraccion = fraction;
        
    }   

    public String obtenerMixto(){
    
        String[] partes = fraccion.split(" "); 
        int numerador = Integer.parseInt(partes[0]);
        int denominador = Integer.parseInt(partes[1]);
        
        int entero = numerador/denominador;
        int sobrante = numerador % denominador;
        
        String mixto = entero+" "+sobrante+"/"+denominador;
        
        if (numerador*denominador>0){
            
            if (sobrante == 0)
                mixto = entero+"";
            else if (entero == 0)  
                mixto = Math.abs(sobrante)+"/"+Math.abs(denominador);
            else if (numerador < 0 && denominador < 0)
                mixto = entero+" "+Math.abs(sobrante)+"/"+Math.abs(denominador);         
            
        }
        else{
            
            if (sobrante == 0)
                mixto = entero+"";
            else if (entero == 0)
                mixto = -Math.abs(sobrante)+"/"+Math.abs(denominador);
            else
                mixto = entero+" "+ Math.abs(sobrante)+"/"+Math.abs(denominador);
        }
            
        return mixto;
    }
    
    public String obtenerSimple(){
    
        String[] partes = fraccion.split(" "); 
        int numerador = Integer.parseInt(partes[0]);
        int denominador = Integer.parseInt(partes[1]);
        
        if (numerador * denominador > 0){
            denominador = Math.abs(denominador);
            numerador = Math.abs(numerador);
        }

        int primerFactor = numerador;
        int segundoFactor = denominador;
        
        while (segundoFactor != 0) {
            int temp = segundoFactor;
            segundoFactor = primerFactor % segundoFactor;
            primerFactor = temp;
        }
        
        String reduccion; 
        if (denominador < 0)
            reduccion = (numerador/-Math.abs(primerFactor))+"/"+(denominador/-Math.abs(primerFactor));
        else
            reduccion = (numerador/Math.abs(primerFactor))+"/"+(denominador/Math.abs(primerFactor));
        
        return reduccion;
    }

    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        String fraction =  input.nextLine();
        
        Fracciones fraccion = new Fracciones(fraction);

        System.out.println(fraccion.obtenerSimple()+" "+fraccion.obtenerMixto());
    }    
}
