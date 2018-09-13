using System;
using System.Windows.Forms;

public class HelloWorld : Form
{
    static public void Main ()
    {
        MessageBox.Show("Hello World");
        Application.Run (new HelloWorld ());
    }

    public HelloWorld ()
    {
        Text = "That's very nice";
    }
}