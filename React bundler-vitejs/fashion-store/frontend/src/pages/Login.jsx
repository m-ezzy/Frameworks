import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, redirect, Form } from 'react-router-dom'
import { useUser } from '../contexts/User'
import makeRequest from '../utils/makeRequest.js'

export default function Login() {
	const [errorMessage, setErrorMessage] = useState('')
	const [formData, setFormData] = useState({ userName: '', password: '' })
	const { setUser } = useUser()
	
	function handleChange(e) {
		setFormData(prev => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	async function handleClick(e) {
		e.preventDefault()

		if(formData.userName == '' || formData.password == '') {
			setErrorMessage('user name and password should not be empty!')
			return
		}
		let data = await makeRequest('/auth/login', {userName: formData.userName, password: formData.password})
    if(data.userId) {
			setUser(prev => data)
		} else {
			setErrorMessage('user name is not registered or password is incorrect!')
		}
	}

	return (
    <form className="login">
			<div className='form-field'>
				<label htmlFor='userName'>username</label>
				<input type='text' name='userName' value={formData.userName} onInput={handleChange} />
			</div>
			<div className='form-field'>
				<label htmlFor='password'>password</label>
				<input type='text' name='password' value={formData.password} onInput={handleChange} />
			</div>
			
			<button type='submit' onClick={handleClick}>login</button>

			{errorMessage && <div className='error_message'>{errorMessage}</div>}
		</form>
	)
}
