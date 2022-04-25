// import { createSlice } from '@reduxjs/toolkit'

// const totalSaldo = {
//     expense: 0,
//     income: 0,
//     total: 0
// }

// export const counterSaldo = createSlice({
//     name: 'counter',
//     totalSaldo,
//     reducers: {
//         setExpense: (state, action) => {
//             state.expense = action.payload
//         },
//         setIncome: (state, action) => {
//             state.income = action.payload
//         },
//         setTotalSaldo: (state, action) => {
//             state.total += action.payload
//         },
//     },
// })

// // export const { setExpense, setIncome, setTotal } = counterSaldo.actions
// export const cashflow = (state) => state.counter
// export default counterSaldo.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  income: 0,
  expense: 0,
  total: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setExpense: (state, action) => {
        state.expense = action.payload
    },
    setIncome: (state, action) => {
        state.income = action.payload
    },
    setTotalSaldo: (state) => {
        state.total = state.income - state.expense
    },
  },
})
export const { setExpense, setIncome, setTotalSaldo } = counterSlice.actions

export default counterSlice.reducer