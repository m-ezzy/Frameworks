<%@ Page Language="C#" AutoEventWireup="true" CodeFile="P22.aspx.cs" Inherits="P22" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> P22 </title>

    <link rel="Stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <form id="form1" runat="server">
    <div class="container">
        Enter Your Name : <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
        Enter Your Address : <asp:TextBox ID="TextBox2" runat="server" TextMode="MultiLine"></asp:TextBox><br />
        Date of Birth : <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br />
        Nationality : <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox><br />

        Please select any Country : 
        <asp:DropDownList ID="DropDownList1" runat="server">
            <asp:ListItem Value="1" Text="India"></asp:ListItem>
            <asp:ListItem Value="2" Text="UK"></asp:ListItem>
            <asp:ListItem Value="3" Text="US"></asp:ListItem>
        </asp:DropDownList>
        <br />

        Mention Your Skillsets here : <asp:TextBox ID="TextBox5" runat="server" TextMode="MultiLine"></asp:TextBox><br />
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Button" /><br />

        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
    </div>
    </form>
</body>
</html>
