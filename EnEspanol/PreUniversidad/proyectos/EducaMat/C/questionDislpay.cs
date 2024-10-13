using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class questionDislpay : MonoBehaviour
{
    public GameObject screenQuestion;
    public GameObject A;
    public GameObject B;
    public GameObject C;
    public GameObject D;
    public static string newQuestion;
    public static string newA;
    public static string newB;
    public static string newC;
    public static string newD;
    public static bool pleaseUpDate = false;

    void Update()
    {
        if (pleaseUpDate == false)
        {
            pleaseUpDate = true;
            StartCoroutine(pushTextOnScreen());
        }
    }

    IEnumerator pushTextOnScreen()
    {
        yield return new WaitForSeconds(0.25f);
        screenQuestion.GetComponent<TMPro.TextMeshProUGUI>().text = newQuestion;
        A.GetComponent<TMPro.TextMeshProUGUI>().text = newA;
        B.GetComponent<TMPro.TextMeshProUGUI>().text = newB;
        C.GetComponent<TMPro.TextMeshProUGUI>().text = newC;
        D.GetComponent<TMPro.TextMeshProUGUI>().text = newD;
    }
}
