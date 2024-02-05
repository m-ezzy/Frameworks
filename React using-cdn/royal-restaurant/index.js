ReactDOM.render(<App />, document.getElementById("root"));

function App() {
	let o = ["Home", "Menu", "Location", "About"];
	let [selected, setSelected] = React.useState(0);

	return (
		<div className="App">
			<NavBar selected={0} setSelected={setSelected} />
			<Content content={selected} />
		</div>
	)
}
/*
class NavBar2 extends React.Componenet {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	showContent() {
	}
}
*/
function NavBar(props) {
	function showContent(e) {
		props.setSelected((prevState) => {
			console.log(e.target.id)
			return e.target.id;
		});
	}

	return (
		<div className="nav-bar">
			<div id="0" onClick={showContent}> Home </div>
			<div id="1" onClick={showContent}> Menu </div>
			<div id="2" onClick={showContent}> Location </div>
			<div id="3" onClick={showContent}> About </div>
		</div>
	)
}
function Content(props) {
	let html;
	if (props.content == 0) {
		html = (
			<div>
				<div>
					{props.content} <br />
					welcome to royal restaurant online. <br />
					enjoy the meal!
				</div>
				<img src="images/5.jpg" />
			</div>
		)
	} else if(props.content == 1) {
		html = (
			<div>menu</div>
		)
	}
	return (
		<div className="content">
			{html}
		</div>
	)
}
