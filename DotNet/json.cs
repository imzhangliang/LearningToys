using System;
using System.Collections.Generic;
using static Newtonsoft.Json.JsonConvert;

public class JsonTest {
    public static void Main() {
        var n = DeserializeObject<int>("12323");
        Console.WriteLine(n);
    }
}