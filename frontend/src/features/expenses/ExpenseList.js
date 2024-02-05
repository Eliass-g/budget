import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpensesOfBudget,
  selectExpensesOfBudget,
  selectExpensesOfBudgetStatus,
} from "./expensesSlice";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = ({ budget_id }) => {
  const dispatch = useDispatch();

  const expenses = useSelector(selectExpensesOfBudget);
  const expenseStatus = useSelector(selectExpensesOfBudgetStatus);

  useEffect(() => {
    if (expenseStatus === "idle") {
      dispatch(getExpensesOfBudget(budget_id));
    }
  }, [expenseStatus, dispatch]);

  if (expenseStatus === "succeeded") {
    console.log(expenses);
  }
  const expenseList = expenses.map((data) => {
    return (
      expenseStatus === "succeeded" && (
        <ExpenseListItem
          key={data.id}
          id={data.id}
          expense_name={data.expense_name}
          amount={data.amount}
          budget_id={budget_id}
        />
      )
    );
  });
  return <div>{expenseList}</div>;
};

export default ExpenseList;
