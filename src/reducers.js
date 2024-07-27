const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "FETCH_TASKS":
      return {
        ...state,
        tasks: [...action.payload],
      };
    case "FETCH_SORTED_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "FETCH_BY_PRIORITY":
      return {
        ...state,
        tasks: action.payload,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
