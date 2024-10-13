using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class answeButtons : MonoBehaviour
{

    public GameObject answerAblackBlue;
    public GameObject answerAblackGreen;
    public GameObject answerAblackRed;

    public GameObject answerBblackBlue;
    public GameObject answerBblackGreen;
    public GameObject answerBblackRed;

    public GameObject answerCblackBlue;
    public GameObject answerCblackGreen;
    public GameObject answerCblackRed;

    public GameObject answerDblackBlue;
    public GameObject answerDblackGreen;
    public GameObject answerDblackRed;

    public GameObject answerA;
    public GameObject answerB;
    public GameObject answerC;
    public GameObject answerD;

    public GameObject currentScore;
    public int scoreValue; 

    void Update()
    {
        currentScore.GetComponent<TMPro.TextMeshProUGUI>().text = "Puntuacion: "+ scoreValue;
    }

    public void AnswerA()
    {
        if (questionGenerator.actualAnswer == "A")
        {
            answerAblackGreen.SetActive(true);
            answerAblackBlue.SetActive(false);
            scoreValue +=1;
        }
        else{
            answerAblackRed.SetActive(true);
            answerAblackBlue.SetActive(false);
            scoreValue =0;
        }
        answerA.GetComponent<Button>().enabled = false;
        answerB.GetComponent<Button>().enabled = false;
        answerC.GetComponent<Button>().enabled = false;
        answerD.GetComponent<Button>().enabled = false;
        StartCoroutine(NextQuestion());
    }
    public void AnswerB()
    {
        if (questionGenerator.actualAnswer == "B")
        {
            answerBblackGreen.SetActive(true);
            answerBblackBlue.SetActive(false);
            scoreValue +=1;
        }
        else{
            answerBblackRed.SetActive(true);
            answerBblackBlue.SetActive(false);
            scoreValue =0;
        }
        answerA.GetComponent<Button>().enabled = false;
        answerB.GetComponent<Button>().enabled = false;
        answerC.GetComponent<Button>().enabled = false;
        answerD.GetComponent<Button>().enabled = false;
        StartCoroutine(NextQuestion());
    }
    public void AnswerC()
    {
        if (questionGenerator.actualAnswer == "C")
        {
            answerCblackGreen.SetActive(true);
            answerCblackBlue.SetActive(false);
            scoreValue +=1;
        }
        else{
            answerCblackRed.SetActive(true);
            answerCblackBlue.SetActive(false);
            scoreValue =0;
        }
        answerA.GetComponent<Button>().enabled = false;
        answerB.GetComponent<Button>().enabled = false;
        answerC.GetComponent<Button>().enabled = false;
        answerD.GetComponent<Button>().enabled = false;
        StartCoroutine(NextQuestion());
    }
    public void AnswerD()
    {
        if (questionGenerator.actualAnswer == "D")
        {
            answerDblackGreen.SetActive(true);
            answerDblackBlue.SetActive(false);
            scoreValue +=1;
        }
        else
        {
            answerDblackRed.SetActive(true);
            answerDblackBlue.SetActive(false);
            scoreValue =0;
        }
        answerA.GetComponent<Button>().enabled = false;
        answerB.GetComponent<Button>().enabled = false;
        answerC.GetComponent<Button>().enabled = false;
        answerD.GetComponent<Button>().enabled = false;
        StartCoroutine(NextQuestion());
    }

    IEnumerator NextQuestion() 
    {
        yield return new WaitForSeconds(2);

        answerAblackBlue.SetActive(true);
        answerBblackBlue.SetActive(true);
        answerCblackBlue.SetActive(true);
        answerDblackBlue.SetActive(true);

        answerAblackGreen.SetActive(false);
        answerBblackGreen.SetActive(false);
        answerCblackGreen.SetActive(false);
        answerDblackGreen.SetActive(false);

        answerAblackRed.SetActive(false);
        answerBblackRed.SetActive(false);
        answerCblackRed.SetActive(false);
        answerDblackRed.SetActive(false);

        answerA.GetComponent<Button>().enabled = true;
        answerB.GetComponent<Button>().enabled = true;
        answerC.GetComponent<Button>().enabled = true;
        answerD.GetComponent<Button>().enabled = true;

        questionGenerator.displayingQuestion = false;


    }
}
