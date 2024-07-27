export const addTasks = (tasks) => {
  return {
    type: "ADD_TASKS",
    payload: tasks,
  };
};

export const filterByPriority = (data) => {
  return {
    type: "FETCH_BY_PRIORITY",
    payload: data,
  };
};

export const deleteTask = (data) => {
  return {
    type: "DELETE_TASK",
    payload: data,
  };
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://3ab568f0-8e65-4391-a363-ed60547be138-00-2mecytqoyyfst.sisko.replit.dev:3002/tasks"
    );

    const data = await response.json();

    if (data) {
      dispatch({ type: "FETCH_TASKS", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const sortByPriority = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://3ab568f0-8e65-4391-a363-ed60547be138-00-2mecytqoyyfst.sisko.replit.dev:3002/tasks/sort-by-priority"
    );

    const data = await response.json();

    if (data) {
      dispatch({ type: "FETCH_SORTED_TASKS", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
