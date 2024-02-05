import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  selectCategories,
  selectCategoriesStatus,
} from "./categoriesSlice";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const categoriesStatus = useSelector(selectCategoriesStatus);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(getCategories());
    }
  }, [categoriesStatus, dispatch]);

  const categoryList = categories.map((data) => {
    return (
      categoriesStatus === "succeeded" && (
        <CategoryListItem
          key={data.id}
          id={data.id}
          category_name={data.category}
        />
      )
    );
  });
  return <div>{categoryList}</div>;
};

export default CategoryList;
