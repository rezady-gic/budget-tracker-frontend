import '../../assets/css/login/form-login.css'
import React, { useState } from 'react'
import {  
  useNavigate,  
} from "react-router-dom";
import axios from '../../http'
function FormLogin() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [emptyInput, setEmptyInput] = useState(
		{username: false, password: false})
	const [invalidLogin, setInvalidLogin] = useState(false)
	let navigate = useNavigate()
	function validateInput(username, password) {
		let error = false
		let empty = {username: false, password: false}
		if(!username) {
			error = true
			empty.username = true
		}
		if(!password) {
			error = true
			empty.password = true
		}
		setEmptyInput(empty)
		return error
	}
	async function handleLogin() {
		if(!validateInput(username, password)) {
			try {
				const { data } = await axios.post('user/login', {username, password})
				if(data.message === 'login gagal') {
					setInvalidLogin(true)
				}
				else if(data) {
					localStorage['user'] = data.username
					localStorage['idUser'] = data.id
					localStorage['token'] = data.token
					navigate('/daily')
				}
			} catch(error) {
				navigate('/')
			}
		}	
	}
	return (
		<div className="form-login">
			<div className="box-login">			
				<div className='form-username'>
					<label className="label-username">Username:</label>
					<input
						type="text"							
						id="input-username"
						onChange = {event => setUsername(event.target.value)}
					/>
					{
						emptyInput.username && 
						<small className='error-input'>
							*username belum diisi
						</small>
					}
					{
						invalidLogin && 
						<small className='error-input'>
							*username dan password tidak sesuai
						</small>
					}
				</div>

				<div className="form-password">
					<label className="label-password">Password: </label>
					<input
						type="password"
						id="input-password"
						onChange = {event => setPassword(event.target.value)}
						onKeyDown = {event => event.key === 'Enter' && handleLogin()}
					/>
					{
						emptyInput.password && 
						<small className='error-input'>
							*password belum diisi
						</small>
					}
				</div>
				<button type="button" className='button-signin' onClick={() => handleLogin()}>
					<strong>Sign In</strong>
				</button>
			</div>
		</div>
	)
}

export default FormLogin