using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class P22 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Cookies["name"] != null) {
            Label1.Text = 
                " name is " + Request.Cookies["name"].Value + 
                " address is " + Request.Cookies["address"].Value + 
                " date of birth is " + Request.Cookies["dob"].Value;
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        /*
        HttpCookie hc = new HttpCookie("user_name", TextBox1.Text);
        Response.Cookies.Add(hc);
        */

        Response.Cookies["name"].Value = TextBox1.Text;
        Response.Cookies["name"].Expires = DateTime.Now.AddDays(10);

        Response.Cookies["address"].Value = TextBox2.Text;
        Response.Cookies["address"].Expires = DateTime.Now.AddDays(10);

        Response.Cookies["dob"].Value = TextBox3.Text;
        Response.Cookies["dob"].Expires = DateTime.Now.AddDays(10);

        Response.Cookies["nationality"].Value = TextBox4.Text;
        Response.Cookies["nationality"].Expires = DateTime.Now.AddDays(10);

        Response.Cookies["country"].Value = DropDownList1.SelectedItem.ToString();
        Response.Cookies["country"].Expires = DateTime.Now.AddDays(10);

        Response.Cookies["skillsets"].Value = TextBox5.Text;
        Response.Cookies["skillsets"].Expires = DateTime.Now.AddDays(10);
        
        Response.Redirect("P22.aspx");
    }
}
