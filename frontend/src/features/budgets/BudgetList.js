import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBudgets,
  getBudgetOfCategory,
  addBudget,
  updateBudget,
  deleteBudget,
  selectBudgetStatus,
  selectBudgets,
} from "./budgetsSlice";
import BudgetListItem from "./BudgetListItem";

const BudgetList = () => {
  const dispatch = useDispatch();

  const budgets = useSelector(selectBudgets);
  const budgetsStatus = useSelector(selectBudgetStatus);

  useEffect(() => {
    if (budgetsStatus === "idle") {
      dispatch(getBudgets());
    }
  }, [budgetsStatus, dispatch]);
  const budgetList = budgets.map((data) => {
    return (
      <BudgetListItem
        key={data.id}
        id={data.id}
        category_id={data.category_id}
        allocated_amount={data.allocated_amount}
        total_amount={data.total_amount}
        duration={data.duration}
      />
    );
  });
  return <div>{budgetList}</div>;
};

export default BudgetList;
