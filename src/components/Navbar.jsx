import '../assets/css/navbar/navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
	const navigate = useNavigate()
	function handleLogout() {
		localStorage.clear()
		navigate('/')
	}
    return (
		<ul className="navbar">
			<li className="menu"><a>Budget-tracker</a></li>
			<li className="menu"><a className="clicked">Harian</a></li>
			<li className="menu"><a>Mingguan</a></li>
			<li className="menu"><a>Bulanan</a></li>
			<li className="menu"><a>Tahunan</a></li>
			<li className="menu" onClick={() => handleLogout()}>				
				<a>Sign Out</a>
				{/* <a>{localStorage['user']}</a>	 */}
				{/* <div>
					<a className='sign-out'>Sign Out</a>	
				</div>			 */}
			</li>
		</ul>
	)
}
export default Navbar