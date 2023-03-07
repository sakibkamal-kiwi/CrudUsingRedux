import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteObject } from "../CrudOperation/ArrayAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.reducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const GotoAdd = () => {
    navigate("/add");
  };
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <h1>Array data</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0
              ? users.map((item, index) => {
                  const { id, name, age } = item;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{age}</td>
                      <td>
                        <Link to={`edit/${id}`}>
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                        <Button
                          varient=""
                          onClick={() => dispatch(deleteObject(item.id))}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "Enter some data"}
          </tbody>
        </Table>
        <br></br>
        <Button onClick={GotoAdd}> Add User</Button>
      </div>
    </>
  );
}

export default Home;
