using System;
using System.Collections.Generic;
 
public class HelloWorld
{
    static public void Main ()
    {
        int i;
        List<int> L = new List<int>();

        for (i = 0; i < 10; i++) {
            L.Add(i*2+1);
        }

        foreach (var item in L) {
            Console.WriteLine(item);
        }

        for (i = 0; i < L.Count; i++) {
            Console.Write(L[i] + " ");
        }
        Console.WriteLine();

        Console.WriteLine ("Hello Mono World");
    }
}