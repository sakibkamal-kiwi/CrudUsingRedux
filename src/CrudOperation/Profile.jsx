import { useSelector, useDispatch } from "react-redux";
//import  DeleteIcon  from '@mui/icons-material/Delete';
import { addObject, deleteObject } from "./ArrayAction";
import { Table } from "react-bootstrap";
import { useState } from "react";

function ObjectList() {
  const initialState = {
    id : "",
    name: "",
    age : "",
  };
  const [state, setState] = useState(initialState);
  const objects = useSelector((state) => state.reducer.objects);
  console.log(objects, "from home");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  
  const { id , name , age } = state;
  const handleAddObject = (e) => {
    e.preventDefault();
    console.log("hello");
    const newObject = {
      id: objects.length + 1,
      name: `${name} , ${objects.length + 1}`,
      age: `${age}`,
    };

    dispatch(addObject(newObject));
    console.log("after dispatch");
   setState("");
    console.log(name, "dhjsgfs");
    console.log(age, "dhjsgfs");
  };

  const handleDeleteObject = (id) => {
    dispatch(deleteObject(id));
  };

 
  return (
    <div>
      <form onSubmit={handleAddObject}>
        <input type="text" name = 'id'  placeHolder="Enter Name" onChange={handleChange} />
        <input type="text" name = 'name' placeHolder="Enter Name" onChange={handleChange} />
       {/*  <input type="text" name = 'age' placeHolder="Enter Name" onChange={handleChange} /> */}
      </form>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {objects.map((object) => (
        <tr>
          <td>{object.id}</td>
          <td>{object.name}</td>
          <td>{object.age}</td>
          <td><button>Update</button>
           <button onClick={() => handleDeleteObject(object.id)} > Delete</button></td>
        </tr>
       ))}
      </tbody>
    </Table>
    </div>
  );
}

export default ObjectList;
