using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotationBackground : MonoBehaviour
{
    // Start is called before the first frame update

    public float rotateSpeed = 1;

    void Update()
    {
        this.transform.Rotate(0, 0,rotateSpeed, Space.World);
    }
}
