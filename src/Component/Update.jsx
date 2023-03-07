import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateObject } from "../CrudOperation/ArrayAction";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // sending selected id data into update page

  const data = useSelector((state) => state.reducer.users);
  let selected = data.filter((user) => user.id === id);
  // console.log(selected, "existing user");

  const oldname = selected[0].name;
  const oldage = selected[0].age;
  console.log(oldname, oldage);
  const [updateData, setUpdateData] = useState({
    name: oldname,
    age: oldage,
  });
  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const { name, age } = updateData;
  const handleSubmit = () => {
    dispatch(updateObject({ name, age, id }));
    navigate("/");
  };
  return (
    <div>
      <form>
        <h3> Update data </h3>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <button onClick={(e) => handleSubmit(e)}>Update</button>
      </form>
    </div>
  );
};
export default Update;
