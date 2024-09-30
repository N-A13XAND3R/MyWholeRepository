import java.util.Scanner;
        
public class Persona {
    
    String nombre;
    Long edad; 
    char genero; 
    Double peso; 
    Double altura; 
    
    public Persona(String name, Long age, char gender, Double weight, Double height){
        
        nombre = name;
        edad = age;
        genero = gender;
        peso = weight;
        altura = height;
        
    }
    
    public String obtenerInformacion(){
        return ("Nombre:"+nombre+" edad:"+edad+" genero:"+genero+" peso:"+peso+" altura:"+altura);
    }
    
    public Double obtenerIDC(){
        return peso/(altura * altura);
    }
    
    public String obtenerAdultez(){
        return "Mayor de edad: "+(edad > 17);
    }


    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        String name =  input.nextLine();
        long age =  input.nextLong();
        char gender =  input.next().charAt(0);
        double weight =  input.nextDouble();
        double height=  input.nextDouble();
        
        
        Persona persona = new Persona(name, age, gender, weight, height);

        System.out.println(persona.obtenerIDC());
        System.out.println(persona.obtenerAdultez());
        System.out.println(persona.obtenerInformacion());
    }  
}
