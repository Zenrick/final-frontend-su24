import { configureStore } from '@reduxjs/toolkit'

import { employeesReducer } from './employeesSlice'
const store = configureStore({
  reducer: {
    // Define a top-level state field
    employees: employeesReducer,
  }
})

export default store;