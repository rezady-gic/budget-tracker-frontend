import '../../assets/css/table/info-saldo.css'
import { useState, useEffect } from 'react'
import axios from '../../http'
import { useDispatch} from 'react-redux'
import { setExpense, setIncome, setTotalSaldo } from '../../store/saldo'

function InfoTransaction({totalSaldo}) {
	const [dataTable, setDataTable] = useState({})
	const [totalPerDay, setTotalPerDay] = useState({})
	const [countChangeData, setCountChangeData] = useState(0)
	const dispatch = useDispatch()
	useEffect (() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(`transaction?idUser=${localStorage['idUser']}`,
					{headers: {
						'Authorization': `Bearer ${localStorage['token']}`
					}}
				)
				let totalCashflow = {
					expense: 0,
					income: 0,
					saldo: 0
				}
				let dataTable = {}, totalPerRecord = {}, elementData = {}
				for(elementData of data) {
					elementData.time = elementData.time.substring(0,10)
					if(!dataTable[elementData.time]) {
						dataTable[elementData.time] = []
						totalPerRecord[elementData.time] = {
							expense: 0,
							income: 0
						}
					}
					dataTable[elementData.time].push(elementData)
					if(elementData.type === "pemasukan") {
						totalCashflow.income += elementData.nominal
						totalPerRecord[elementData.time]['income'] += 
							elementData.nominal
					} else if(elementData.type === "pengeluaran") {
						totalCashflow.expense += elementData.nominal
						totalPerRecord[elementData.time]['expense'] += 
							elementData.nominal
					}
				}
				dispatch(setIncome(totalCashflow.income))
				dispatch(setExpense(totalCashflow.expense))
				dispatch(setTotalSaldo())
				setTotalPerDay(totalPerRecord)
				setDataTable(dataTable)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [countChangeData])
	
	// delete data transaction per row
	async function deleteData(id) {
		await axios.delete('transaction', {
			headers: {
				'Authorization': `Bearer ${localStorage['token']}`
			},
			data: { id: id }
		})
		setCountChangeData(countChangeData+1)
	}

   return(
		<>
		{ Object.keys(dataTable).map((value,index) => (
			<table className="info-transaction" key={index.toString()}>
				<tr>
					<td><strong>{value}</strong></td>
					<td className="value-income">{totalPerDay[value]['income']}</td>
					<td className="value-expense">{totalPerDay[value]['expense']}</td>
					<td></td>
				</tr>
				{dataTable[value].map((valueNested, indexNested) => (
					<tr key={indexNested}>
						<td>{valueNested.category}</td>
						{valueNested.type === 'pemasukan' ? 
							<td className="value-income">{valueNested.nominal}
							</td> : <td></td>
						}
						{valueNested.type === 'pengeluaran' ?
							<td className="value-expense">{valueNested.nominal}
							</td> : <td></td>
						}
						<td>
							<button 
								className="delete-button" 
								onClick={() => deleteData(valueNested.id)}>Hapus
							</button>
							<button className="update-button">Ubah</button>
						</td>
					</tr>
				))}
			</table>
		))}
		</>				
	)
}

export default InfoTransaction