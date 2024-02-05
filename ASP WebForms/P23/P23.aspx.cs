using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data;
using System.Data.SqlClient;

public partial class P23 : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataTable dt;

    protected void Page_Load(object sender, EventArgs e)
    {
        con = new SqlConnection(@"Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|\Database.mdf;Integrated Security=True;User Instance=True");
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        con.Open();
        cmd = new SqlCommand("insert into users(user_name,pass_word) VALUES('" + TextBox1.Text + "','" + TextBox2.Text + "');", con);
        cmd.ExecuteNonQuery();

        System.Diagnostics.Debug.WriteLine(con);
        System.Diagnostics.Debug.WriteLine(cmd);

        HttpCookie hc = new HttpCookie("user_name", TextBox1.Text);
        Response.Cookies.Add(hc);

        Response.Redirect("~/home.aspx");
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
    }

        /*
        cmd = new SqlCommand("select count(*) from login where user_name='" + TextBox1.Text + "' and psw='" + TextBox2.Text + "' ", con);
        cmd.ExecuteScalar();
        dap = new SqlDataAdapter();
        dap.SelectCommand = cmd;
        dt = new DataTable();
        dap.Fill(dt);
        if (dt.Rows[0][0].ToString() == "1")
        {
            Label1.Text = "login";
        }
        else
        {
            Label1.Text = " no login";
        }
        con.Close();
        */
}
