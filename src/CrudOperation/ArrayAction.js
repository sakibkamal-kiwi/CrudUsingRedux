import { ADD_OBJECT ,DELETE_OBJECT, UPDATE_OBJECT} from './constants'

export const addObject = (newObject) => {
    return {
      type: ADD_OBJECT,
      payload: newObject,
    };
  };

 export const deleteObject = (id) => {
    return {
      type: DELETE_OBJECT,
      payload: id,
    };
  };

  export const updateObject = (data) => {
    return {
      type: UPDATE_OBJECT,
      payload: data,
    };
  };
