import { React, useState, useEffect } from "react";
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
import {
  getCategories,
  selectCategories,
  selectCategoriesStatus,
} from "../categories/categoriesSlice";
import BudgetListItem from "./BudgetListItem";

const BudgetList = () => {
  const dispatch = useDispatch();

  const budgets = useSelector(selectBudgets);
  const budgetsStatus = useSelector(selectBudgetStatus);

  const categories = useSelector(selectCategories);
  const categoriesStatus = useSelector(selectCategoriesStatus);

  useEffect(() => {
    if (budgetsStatus === "idle") {
      dispatch(getBudgets());
    }
  }, [budgetsStatus, dispatch]);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(getCategories());
    }
  }, [categoriesStatus, dispatch]);

  const budgetList = budgets.map((data) => {
    return (
      budgetsStatus === "succeeded" &&
      categoriesStatus === "succeeded" && (
        <BudgetListItem
          key={data.id}
          id={data.id}
          name={data.name}
          category_id={data.category_id}
          category_name={
            categories.find((x) => x.id === data.category_id).category
          }
          allocated_amount={data.allocated_amount}
          total_amount={data.total_amount}
          duration={data.duration}
        />
      )
    );
  });
  return <div>{budgetList}</div>;
};

export default BudgetList;
