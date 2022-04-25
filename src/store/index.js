// import { configureStore } from '@reduxjs/toolkit'
// import counterSaldo from './saldo'

// export default configureStore({
//   reducer: {
//     counter: counterSaldo,
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './saldo'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})