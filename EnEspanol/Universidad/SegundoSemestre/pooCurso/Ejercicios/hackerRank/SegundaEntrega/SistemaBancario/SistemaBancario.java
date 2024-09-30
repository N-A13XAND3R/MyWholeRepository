import java.util.Scanner;

public class SistemaBancario{
    
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    int n = input.nextInt(), numeroDeEmpleados;
    String tipoDeCliente;
    double ingresos, deudas, patrimonio;

    for (int i = 0; i < n; i++){

      tipoDeCliente= input.next();
      String ingresosConPuntos = input.next();
      ingresos = convertirAEntero(ingresosConPuntos);
      deudas = input.nextDouble();

      if (tipoDeCliente.equals("PersonaNatural")) {
        PersonaNatural personaNatural = new PersonaNatural(deudas, ingresos);
        personaNatural.outPut();
      }
      else if (tipoDeCliente.equals("EmpresaPequena")) {
        numeroDeEmpleados = input.nextInt();
        EmpresaPequena empresaPequena = new EmpresaPequena(deudas, ingresos, numeroDeEmpleados);
        empresaPequena.outPut();
      }
      else{
        String patrimonioConPuntos = input.next();
        patrimonio = convertirAEntero(patrimonioConPuntos);
        numeroDeEmpleados = input.nextInt();
        GranCorporacion granCorporacion = new GranCorporacion(deudas, ingresos, patrimonio, numeroDeEmpleados);
        granCorporacion.outPut();

      } 
    }
    input.close();
  }
  
  public static int convertirAEntero(String numero) {
        String numeroSinPuntos = numero.replace(".", "");
        return Integer.parseInt(numeroSinPuntos);
    }
}

interface Cliente {

    public void calcularRiesgo();
    public void capacidadDePago();
    public void idoneoParaPrestamo();

}

class PersonaNatural implements Cliente{

    double deudas;
    double ingresos;

    double riesgo;
    double capacidadDePago; 
    String apto = "No Apto"; 

    public PersonaNatural(double deudas, double ingresos){

        this.deudas = deudas;
        this.ingresos = ingresos;
    }

    public double getRiesgo(){
        return riesgo;
    }

    public void setRiesgo(double riesgo){
        this.riesgo = riesgo;
    }

    public double getcapacidadDePago(){
        return capacidadDePago;
    }

    public void setcapacidadDePago(double capacidadDePago){
        this.capacidadDePago = capacidadDePago;
    }

    public String getapto(){
        return apto;
    }

    public void setapto(String apto) {
        this.apto = apto;
    }

    @Override
    public void calcularRiesgo(){
        riesgo = deudas / ingresos;
        setRiesgo(riesgo);
    }

    @Override
    public void capacidadDePago(){
        capacidadDePago = ingresos - deudas;
        setcapacidadDePago(capacidadDePago);
    }

    @Override
    public void idoneoParaPrestamo(){
        riesgo = getRiesgo();
        capacidadDePago = getcapacidadDePago();
        if ((riesgo < 0.5) && (capacidadDePago > 1000))
            setapto("Apto");
    }

    public void outPut(){
        calcularRiesgo();
        capacidadDePago();
        idoneoParaPrestamo();
        System.out.println("Persona Natural: Riesgo: "+riesgo+", Capacidad de Pago: "+capacidadDePago+", Resultado: "+apto);
    }
}

class EmpresaPequena implements Cliente{

    double deudas;
    double ingresos;
    int numeroDeEmpleados;

    double riesgo;
    double capacidadDePago; 
    String apto = "No Apto"; 

    public EmpresaPequena (double deudas, double ingresos, int numeroDeEmpleados){       
        this.deudas = deudas; 
        this.ingresos = ingresos;
        this.numeroDeEmpleados = numeroDeEmpleados;
    }

    public double getRiesgo(){
        return riesgo;
    }

    public void setRiesgo(double riesgo){
        this.riesgo = riesgo;
    }

    public double getcapacidadDePago(){
        return capacidadDePago;
    }

    public void setcapacidadDePago(double capacidadDePago){
        this.capacidadDePago = capacidadDePago;
    }

    public String getapto(){
        return apto;
    }

    public void setapto(String apto) {
        this.apto = apto;
    }

    @Override
    public void calcularRiesgo(){
        riesgo = (deudas / ingresos) * (1.0 / numeroDeEmpleados);
        setRiesgo(riesgo);
    }

    @Override
    public void capacidadDePago(){
        capacidadDePago = ingresos - deudas - (numeroDeEmpleados * 500);
        setcapacidadDePago(capacidadDePago);
    }

    @Override
    public void idoneoParaPrestamo(){
        riesgo = getRiesgo();
        capacidadDePago = getcapacidadDePago();
        if ((riesgo < 0.4) && (capacidadDePago > 5000))
            setapto("Apto");
    }

    public void outPut(){
        calcularRiesgo();
        capacidadDePago();
        idoneoParaPrestamo();
        System.out.println("Empresa Pequena: Riesgo: "+riesgo+", Capacidad de Pago: "+capacidadDePago+", Resultado: "+apto);
    }
}

class GranCorporacion implements Cliente{

    double deudas;
    double ingresos;
    int numeroDeEmpleados;
    double patrimonio; 

    double riesgo;
    double capacidadDePago; 
    String apto = "No Apto"; 

    public GranCorporacion(double deudas, double ingresos, double patrimonio, int numeroDeEmpleados){

        this.deudas = deudas; 
        this.ingresos = ingresos;
        this.numeroDeEmpleados = numeroDeEmpleados; 
        this.patrimonio = patrimonio;

    }

    public double getRiesgo(){
        return riesgo;
    }

    public void setRiesgo(double riesgo){
        this.riesgo = riesgo;
    }

    public double getcapacidadDePago(){
        return capacidadDePago;
    }

    public void setcapacidadDePago(double capacidadDePago){
        this.capacidadDePago = capacidadDePago;
    }

    public String getapto(){
        return apto;
    }

    public void setapto(String apto) {
        this.apto = apto;
    }

    @Override
    public void calcularRiesgo(){
        riesgo = (deudas / (ingresos + patrimonio)) * (1.0 / Math.log(numeroDeEmpleados + 1));
        setRiesgo(riesgo);
    }

    @Override
    public void capacidadDePago(){
        capacidadDePago = (ingresos + patrimonio) - deudas - (numeroDeEmpleados * 1000);
        setcapacidadDePago(capacidadDePago);
    }

    @Override
    public void idoneoParaPrestamo(){
        riesgo = getRiesgo();
        capacidadDePago = getcapacidadDePago();
        if ((riesgo < 0.3) && (capacidadDePago > 20000))
            setapto("Apto");
    }

    public void outPut(){
        calcularRiesgo();
        capacidadDePago();
        idoneoParaPrestamo();
        System.out.println("Gran Corporacion: Riesgo: "+riesgo+", Capacidad de Pago: "+capacidadDePago+", Resultado: "+apto);
    }
}
