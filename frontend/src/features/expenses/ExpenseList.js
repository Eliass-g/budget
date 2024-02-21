import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpensesOfBudget,
  selectExpensesOfBudget,
  selectExpensesOfBudgetStatus,
} from "./expensesSlice";
import ExpenseListItem from "./ExpenseListItem";
import AddExpense from "./AddExpense";

const ExpenseList = ({ budget_id }) => {
  const dispatch = useDispatch();

  const [add, setAdd] = useState(false);

  const handleClick = function () {
    setAdd(!add);
  };

  const expenses = useSelector(selectExpensesOfBudget);
  const expenseStatus = useSelector(selectExpensesOfBudgetStatus);

  useEffect(() => {
    if (expenseStatus === "idle") {
      dispatch(getExpensesOfBudget(budget_id));
    }
  }, [expenseStatus, dispatch]);

  const expenseList = expenses.map((data) => {
    return (
      expenseStatus === "succeeded" && (
        <ExpenseListItem
          key={data.id}
          id={data.id}
          expense_name={data.expense}
          amount={data.amount}
          budget_id={budget_id}
        />
      )
    );
  });
  return (
    <>
      {!add && (
        <>
          <div>{expenseList}</div>
          <button onClick={handleClick}>Add</button>
        </>
      )}
      {add && (
        <>
          <AddExpense budget_id={budget_id} />
          <button onClick={handleClick}>Cancel</button>
        </>
      )}
    </>
  );
};

export default ExpenseList;
