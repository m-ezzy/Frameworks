ReactDOM.render(<App />, document.getElementById("root"))

function App() {
	let menus = ["select", "insert", "update", "delete"]
	let [selected, setSelected] = React.useState(0)

	return (
		<div className="App">
			<NavBar menus={menus} selected={0} setSelected={setSelected} />
			<Content content={selected} />
		</div>
	)
}
function NavBar(props) {
	function showContent(e) {
		props.setSelected((prevState) => {
			console.log(e.target.id)
			return e.target.id
		})
	}
	const elements = props.menus.map(menu => {
		return (
			<a href="#update" className="menu">
				{menu}
			</a>
		)
	})
	return (
		<div className="nav-bar">
			{elements}
		</div>
	)
}
function Content(props) {
	const [updateRequired, setUpdateRequired] = React.useState(false)
	const [clickedUpdate, setClickedUpdate] = React.useState([])

	return (
		<div className="padding content">
			<Select updateRequired={updateRequired} setUpdateRequired={setUpdateRequired} setClickedUpdate={setClickedUpdate} />
			<Insert setUpdateRequired={setUpdateRequired} />
			<Update clickedUpdate={clickedUpdate} />
			{/* <Delete /> */}
		</div>
	)
}
function Select(props) {
	const [booksData, setBooksData] = React.useState([])
	/*let a = [false]

	if(props.updateRequired) {
		a = [true]
	}*/

	React.useEffect(function() {
		console.log('effect ran!')
		async function getBooksData() {
			const response = await fetch('http://localhost:8000/select', {mode: 'cors'})   //mode: 'cors' is not required to write
			const data = await response.json()
			console.log(data)
			setBooksData(data)
			// props.setUpdateRequired(prev => {
			// 	return !prev
			// })
		}
		getBooksData()
	}, [props.updateRequired])

	/*
	if(props.setUpdateRequired) {
		props.setUpdateRequired(prev => {
			return false
		})
	}*/
	async function handleClickUpdate(event) {
		// event.preventDefault()
		console.log(booksData)
		let i=0
		for(i=0 ; i<booksData.length ; i++) {
			console.log(event.target.attributes['data-id'].value)
			if(booksData[i].id == event.target.attributes['data-id'].value) {
				// row = booksData[i]
				return
			}
		}
		props.setClickedUpdate(prev => {
			return booksData[i]
		})
	}
	async function handleClickDelete(event) {
		// setClickedDelete()
	}
	const elements = booksData.map(bookData => {
		return (
			<tr className="border" data-id={bookData.id}>
				<td>
					{bookData.id}
				</td>
				<td>
					{bookData.title}
				</td>
				<td>
					{bookData.copies}
				</td>
				<td>
					<input type="button" value="update" onClick={handleClickUpdate} data-id={bookData.id} />
				</td>
				<td>
					<input type="button" value="delete" onClick={handleClickDelete} data-id={bookData.id} />
				</td>
			</tr>
		)
	})
	return (
		<div className="padding border select">
			<div className="border banner">select</div>
			<table border="20" className="border">
				<tr className="border">
					<th>id</th>
					<th>title</th>
					<th>copies</th>
					<th>update</th>
					<th>delete</th>
				</tr>
				{elements}
			</table>
		</div>
	)
}
function Insert(props) {
	let o = {
		'title': '', 'copies': 0
	}
	const [formData, setFormData] = React.useState(o)

	function handleChange(event) {
		setFormData(prev => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	async function handleClick(event) {
		event.preventDefault()
		const response = await fetch(`/insert/${formData.title}/${formData.copies}`)
		const data = await response.json()
		console.log(data.id)
		setFormData(prev => {
			return o
		})
		props.setUpdateRequired(prev => {
			return !prev
		})
	}
	return (
		<div className="padding border insert">
			<div className="border banner">insert</div>
			<form className="padding border" name="form1">
				<div>book title :</div>
				<input className="border" type="text" name="title" value={formData.title} onChange={handleChange} />
				<div>number of copies of book :</div>
				<input className="border" type="text" name="copies" value={formData.copies} onChange={handleChange} />
				<br />
				<input className="border" type="submit" name="submit" value="insert" onClick={handleClick} />
			</form>
		</div>
	)
}
function Update(props) {
	let o = {
		'title': '', 'copies': 0
	}
	const [formData, setFormData] = React.useState(o)

	function handleChange(event) {
		setFormData(prev => {
			return {
				...prev,
				[event.target.name]: event.target.value
			}
		})
	}
	async function handleClick(event) {
		event.preventDefault()
		const response = await fetch(`/update/${formData.title}/${formData.copies}`)
		const data = await response.json()
		console.log(data)
		setFormData(prev => {
			return o
		})/*
		props.setUpdateRequired(prev => {
			return !prev
		})*/
	}
	return (
		<div className="padding border update">
			<div className="border banner">update</div>
			<form className="padding border" name="form1">
				<div>book id :</div>
				<input className="border" type="text" name="title" value={props.clickedUpdate.id} readonly />
				<div>book title :</div>
				<input className="border" type="text" name="title" value={formData.title} onChange={handleChange} />
				<div>number of copies of book :</div>
				<input className="border" type="text" name="copies" value={formData.copies} onChange={handleChange} />
				<br />
				<input className="border" type="submit" name="submit" value="update" onClick={handleClick} />
			</form>
		</div>
	)
}
