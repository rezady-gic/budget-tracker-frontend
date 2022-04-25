import React from 'react'
import '../../assets/css/table/info-saldo.css'
import { useSelector} from 'react-redux'

function InfoSaldo() {
	const expense = useSelector((state) => state.counter.expense)
	const income = useSelector((state) => state.counter.income)
	const saldo = useSelector((state) => state.counter.total)
	return(
		<table className="info-saldo">
			<tr>
				<th>Pemasukan</th>
				<th>pengeluaran</th>
				<th>Saldo</th>
			</tr>
			<tr>
				<td className="value-income">{ income }</td>
				<td className="value-expense">{ expense }</td>
				<td>{ saldo }</td>
			</tr>
		</table>
	)
}

export default InfoSaldo