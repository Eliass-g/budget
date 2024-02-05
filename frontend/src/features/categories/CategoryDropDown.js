import { React, useEffect } from "react";
import Select from "react-dropdown-select";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  selectCategories,
  selectCategoriesStatus,
} from "./categoriesSlice";

const CategoryDropDown = ({ setValues }) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const categoriesStatus = useSelector(selectCategoriesStatus);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(getCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    categoriesStatus === "succeeded" && (
      <Select
        isSearchable={false}
        options={categories}
        labelField="category"
        valueField="id"
        onChange={(category) => setValues(category[0].id)}
      />
    )
  );
};

export default CategoryDropDown;
