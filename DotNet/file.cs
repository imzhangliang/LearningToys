using System;
using System.IO;

public class ReadFile {
    static public void Main(){
        //读文件1
        string text = File.ReadAllText("list.cs");
        Console.WriteLine(text);

        //读文件2
        string[] lines = File.ReadAllLines("list.cs");
        foreach(var line in lines) {
            Console.WriteLine("###\t" + line);
        }
        
        //写文件1
        string text2 = "hello\nWorld\n";
        File.WriteAllText("out.txt", text2);

        //写文件2
        string[] lines2 = { "First Line", "Second Line" };
        File.WriteAllLines("out2.txt", lines2);
    }
}