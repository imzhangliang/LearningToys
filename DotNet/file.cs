using System;
using System.IO;

//参考https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/how-to-write-to-a-text-file

public class ReadFile {
    static public void Main(){
        //读文件1
        string text = File.ReadAllText("out.txt");
        Console.WriteLine(text);

        //读文件2
        string[] lines = File.ReadAllLines("out2.txt");
        foreach(var line in lines) {
            Console.WriteLine("###\t" + line);
        }
        
        //写文件1
        string text2 = "你好\n世界\n";
        File.WriteAllText("out.txt", text2);

        //写文件2
        string[] lines2 = { "第一行", "第二行" };
        File.WriteAllLines("out2.txt", lines2);
    }
}