import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import budgetsReducer from '../features/budgets/budgetsSlice'
import categoriesReducer from '../features/categories/categoriesSlice'
import expensesReducer from '../features/expenses/expensesSlice'
import financesReducer from '../features/finances/financesSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    budgets: budgetsReducer,
    categories: categoriesReducer,
    expenses: expensesReducer,
    finances: financesReducer
  },
})