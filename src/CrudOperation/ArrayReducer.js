import { ADD_OBJECT, DELETE_OBJECT, UPDATE_OBJECT } from "./constants";

const initialState = {
  users: [
    {id: "1", name: "sakib",  age:23},
    {id: "2", name: "Astha",  age:21},
    {id: "3", name: "Chaman", age:22},
    {id: "4", name: "Kajol",  age:23},
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OBJECT:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_OBJECT:
      return {
        ...state,
        users: state.users.filter((object) => object.id !== action.payload),
      };
    case UPDATE_OBJECT:
      return {
        ...state,
        users: state.users.map((object) =>
          object.id === action.payload.id ? action.payload : object
        ),
      };
    default:
      return state;
  }
};
export default reducer;
