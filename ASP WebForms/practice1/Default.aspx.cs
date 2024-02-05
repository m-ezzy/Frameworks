using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using MySql.Data.MySqlClient;
/*using MySqlConnector;*/

//namespace MYsqlConnect
//{
	public partial class _Default : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{

		}

		protected void Button1_Click(object sender, EventArgs e)
		{
			string a = TextBox1.Text;

			MySqlConnection con = new MySqlConnection("server=localhost; UId=root; password=; database=db3");
			MySqlCommand cmd = new MySqlCommand("INSERT INTO accounts(UserName) VALUES('" + a + "')", con);
			con.Open();
			cmd.ExecuteNonQuery();
			Response.Write("<script>alert('la la la');</script>");

			



		}
		protected void a
	{

	}
}
//}
