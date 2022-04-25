import '../../assets/css/modal/modal-add.css'
import axios from '../../http'
import { useState } from 'react'
import { LIST_EXPENSE, LIST_INCOME } from '../../constants/modal.js'

const ModalAdd = ({closeModal}) => {
	const [type, setType] = useState('pemasukan')
	const [category, setCategory] = useState('gaji')
	const [dateHappen, setDateHappen] = useState('')
	const [nominal, setNominal] = useState('')

	const insertRecord = async() => {
		try {
			const data = await axios.post('transaction', 
				{
					idUser:localStorage['idUser'], 
					type, 
					category, 
					time:dateHappen, 
					nominal
				},
				{
					headers: {
						'Authorization': `Bearer ${localStorage['token']}`
					},
				},
			)
			if(data) window.location.reload()
		} catch(error) {
			console.log(error)
		}
	}
	return (
		<div className="modal-add">
			<div className='card-modal'>
				<div className='title-modal'>
					<span><strong>Tambah transaksi</strong></span>
					<span class="close-modal" onClick={closeModal}>&times;</span>
				</div>
				<div className='input-modal'>
					<label >Tipe</label>
					<select onClick={(event) => setType(event.target.value)}>					
						<option value="pemasukan" selected>Pemasukan</option>
						<option value="pengeluaran">Pengeluaran</option>
					</select>
				</div>
				<div className='input-modal'>
					<label >Kategori</label>
					<select onClick={(event) => setCategory(event.target.value)}>					
						{
							type ==='pengeluaran' ? LIST_EXPENSE.map(expense =>
							<option value={expense}>{expense}</option>
						) : 
							LIST_INCOME.map(income =>
							<option value={income}>{income}</option>)
						}
					</select>
				</div>
				<div className='input-modal'>
					<label >Tanggal</label>
					<input type="date" 
						onChange={(event) => setDateHappen(event.target.value)}/>
				</div>
				<div className='input-modal'>
					<label>Nominal</label>
					<input type="text" 
						onChange={(event) => setNominal(event.target.value)}/>
				</div>
				<button 
					type="button" 
					className='button-add'
					onClick={() =>insertRecord()}
				>
					<strong>Tambah</strong>
				</button>
			</div>
		</div>
	)
}

export default ModalAdd