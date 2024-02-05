<%@ Page Language="C#" AutoEventWireup="true" CodeFile="P23.aspx.cs" Inherits="P23" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> P23 </title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        user name : <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br />
        <br />
        pass word : <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox><br />
        <br />
        <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="submit" />
        <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="reset" />
    </div>
    </form>
</body>
</html>
