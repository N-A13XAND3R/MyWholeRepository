using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class questionGenerator : MonoBehaviour
{

    public static string actualAnswer;
    public bool displayingQuestion = false;
    public int questionNumber;

    void Update()
    {
        if (displayingQuestion == false)
        {
            displayingQuestion = true;   
            questionNumber = Random.Range(1,13);

            if (questionNumber == 1)
            {

                questionDislpay.newQuestion ="Cual de los siguentes animales es mamifero?";
                questionDislpay.newA ="A. La ballena";
                questionDislpay.newB ="B. La medusa";
                questionDislpay.newC ="C. El pez";
                questionDislpay.newD ="D. La iguana";
                actualAnswer = "A";
            }
            if (questionNumber == 2)
            {

                questionDislpay.newQuestion ="Cual de los siguientes animales es invertebrado?";
                questionDislpay.newA ="A. El chimpance";
                questionDislpay.newB ="B. El gato";
                questionDislpay.newC ="C. El tuburon";
                questionDislpay.newD ="D. La estralla de mar";
                actualAnswer = "D";
            }
            if (questionNumber == 3)
            {
 
                questionDislpay.newQuestion ="Cual de los siguentes animales es omnivoro?";
                questionDislpay.newA ="A. El cerdo";
                questionDislpay.newB ="B. La leon";
                questionDislpay.newC ="C. La girafa";
                questionDislpay.newD ="D. El caballo";
                actualAnswer = "A";
            }
            if (questionNumber == 4)
            {

                questionDislpay.newQuestion ="Que es el exoesqueleto en biologia?";
                questionDislpay.newA ="A. Un esqueleto que es mas resistente";
                questionDislpay.newB ="B. Un esqueleto externo y continuo";
                questionDislpay.newC ="C. No tener esqueleto";
                questionDislpay.newD ="D. Ninguna de las anteriores";
                actualAnswer = "B";
            }
            if (questionNumber == 5)
            {

                questionDislpay.newQuestion ="Cual de los siguientes es bipedo?";
                questionDislpay.newA ="A. El pulpo";
                questionDislpay.newB ="B. El perro";
                questionDislpay.newC ="C. El humano";
                questionDislpay.newD ="D. Ninguno de las anteriores";
                actualAnswer = "C";
            }
            if (questionNumber == 6)
            {

                questionDislpay.newQuestion ="Un virus esta vivo?";
                questionDislpay.newA ="A. Si";
                questionDislpay.newB ="B. No";
                questionDislpay.newC ="C. Depende de la especie";
                questionDislpay.newD ="D. Solo si esta en su habitat";
                actualAnswer = "B";
            }
            if (questionNumber == 7)
            {
  
                questionDislpay.newQuestion ="Cuantos huesos tenemos?";
                questionDislpay.newA ="A. 506";
                questionDislpay.newB ="B. 280";
                questionDislpay.newC ="C. 354";
                questionDislpay.newD ="D. 206";
                actualAnswer = "D";
            }
            if (questionNumber == 8)
            {
 
                questionDislpay.newQuestion ="Cual es el organos mas grande?";
                questionDislpay.newA ="A. La piel";
                questionDislpay.newB ="B. El higado";
                questionDislpay.newC ="C. El cerebro";
                questionDislpay.newD ="D. El intestino delgado";
                actualAnswer = "A";
            }
            if (questionNumber == 9)
            {
  
                questionDislpay.newQuestion ="Cual NO vuela?";
                questionDislpay.newA ="A. Aguila";
                questionDislpay.newB ="B. El alcon";
                questionDislpay.newC ="C. El pinguino";
                questionDislpay.newD ="D. El buo";
                actualAnswer = "C";
            }
            if (questionNumber == 10)
            {

                questionDislpay.newQuestion ="Cuantos reinos de la naturaleza hay";
                questionDislpay.newA ="A. 5";
                questionDislpay.newB ="B. 2";
                questionDislpay.newC ="C. 10";
                questionDislpay.newD ="D. 3";
                actualAnswer = "A";
            }
            if (questionNumber == 11)
            {

                questionDislpay.newQuestion ="Un gato es...";
                questionDislpay.newA ="A. Un pez.";
                questionDislpay.newB ="B. Un felino.";
                questionDislpay.newC ="C. Un can.";
                questionDislpay.newD ="D. Otro";
                actualAnswer = "B";
            }
            if (questionNumber == 12)
            {
  
                questionDislpay.newQuestion ="Un hongo es...";
                questionDislpay.newA ="A. Unicelular.";
                questionDislpay.newB ="B. Pluricelular.";
                questionDislpay.newC ="C. Ambos (A y B).";
                questionDislpay.newD ="D. Otro";
                actualAnswer = "C";
            }

            questionDislpay.pleaseUpDate = false;

        }
    }
}
