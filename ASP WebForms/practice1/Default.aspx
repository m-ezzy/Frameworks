<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="height: 289px">
    
    	<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
		<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
    
		<script>
			let response = fetch('https://www.googleapis.com/search?q=lala', {method: 'GET', mode: 'no-cors'});
			console.log(response);
			//let result = response.json();
			//console.log(result);
		</script>
    	<asp:XmlDataSource ID="XmlDataSource1" runat="server"></asp:XmlDataSource>
		<asp:SqlDataSource ID="SqlDataSource1" runat="server"></asp:SqlDataSource>
    </div>
    </form>
</body>
</html>
