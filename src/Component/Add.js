import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addObject } from "../CrudOperation/ArrayAction";

function Add() {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState({
    name: "",
    age: "",
  });
  const allUser = useSelector((state) => state.reducer.users);
  const lastUser = allUser.slice(-1);
  const lastId = lastUser[0].id;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.assign(newData, { id: String(Number(lastId)+ 1)});
    dispatch(addObject(newData));
    navigate("/");
  };

  return (
    <div>
      <form>
        <h3> Add data </h3>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default Add;
