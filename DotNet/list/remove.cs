using System;
using System.IO;
using System.Collections.Generic;

//参考https://www.cnblogs.com/hedianzhan/p/9130296.html

public class Program {
    static public void Main(){
        List<int> a = new List<int>();

        for (int i = 1; i <= 10; i++) {
            a.Add(i/3);
        }

        // 这种方法会导致出现异常
        // foreach(var n in a) {
        //     if (n % 5 == 0) {
        //         a.Remove(n);
        //     }
        // }

        foreach (var n in a) {
            Console.Write(n + " ");
        }
        Console.WriteLine();

        // 顺序删除，会有可能漏掉元素
        for (int i = 0; i < a.Count; i++) {
            if (a[i] == 2) {
                a.Remove(a[i]);
            }
        }

        foreach (var n in a) {
            Console.Write(n + " ");
        }
        Console.WriteLine();


        //倒序删除
        for (int i = a.Count - 1; i >= 0; i--) {
            if (a[i] == 2) {
                a.Remove(a[i]);
            }
        }
        Console.WriteLine();

        foreach (var n in a)
        {
            Console.Write(n + " ");
        }
        Console.WriteLine();
    }
}