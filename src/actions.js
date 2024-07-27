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

export const editTaskByPriority =
  (priority, taskId, serverUrl) => async (dispatch) => {
    try {
      const response = await fetch(
        serverUrl + `tasks/edit-priority?taskId=${taskId}&priority=${priority}`
      );

      const data = await response.json();

      if (data) {
        dispatch({ type: "FETCH_TASK_BY_PRIORITY", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const editTaskByText = (text, taskId, serverUrl) => async (dispatch) => {
  try {
    const response = await fetch(
      serverUrl + `tasks/edit-text?taskId=${taskId}&text=${text}`
    );

    const data = await response.json();

    if (data) {
      dispatch({ type: "FETCH_TASK_BY_TEXT", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = (serverUrl) => async (dispatch) => {
  try {
    const response = await fetch(serverUrl + "tasks");

    const data = await response.json();

    if (data) {
      dispatch({ type: "FETCH_TASKS", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const sortByPriority = (serverUrl) => async (dispatch) => {
  try {
    const response = await fetch(serverUrl + "tasks/sort-by-priority");

    const data = await response.json();

    if (data) {
      dispatch({ type: "FETCH_SORTED_TASKS", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
