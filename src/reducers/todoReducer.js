import { ADD_TODO } from "../actions/todoActions";

const INITIAL_STATE = {
  list: [
    { id: 1, name: "Jack", isCompleted: false },
    { id: 5, name: "Joker", isCompleted: true },
    { id: 10, name: "John", isCompleted: false }
  ]
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.payload.name,
            isCompleted: false
          }
        ]
      };

    default:
      return state;
  }
};

export default todoReducer;
