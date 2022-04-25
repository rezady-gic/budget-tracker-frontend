import Navbar from "../components/Navbar"
import InfoSaldo from "../components/table/infoSaldo"
import InfoTransaction from "../components/table/InfoTransaction"
import ModalAdd from "../components/modal/ModalAdd"
import { useState } from 'react'

function Daily() {
	const [isModal, setIsModal] = useState(false)
	return (
		<div className="after-login">
			<Navbar />
			<div className="body-table">
				<InfoSaldo />
				<button 
					className="add-note" 
					onClick={() => setIsModal(true)}
				>
					Tambah
				</button>
				<InfoTransaction />				
			</div>
			{ 
				isModal && 
				<ModalAdd closeModal={() => setIsModal(false)} /> 
			}
		</div>
	)
}

export default Daily