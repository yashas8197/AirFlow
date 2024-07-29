/* export const addTasks = (tasks) => {
  return {
    type: "ADD_TASKS",
    payload: tasks,
  };
}; */

export const addTasks =
  (serverUrl, priority, taskName, taskId) => async (dispatch) => {
    try {
      const response = await fetch(
        serverUrl +
          `tasks/add?taskId=${taskId}&text=${taskName}&priority=${priority}`
      );

      if (!response.ok) {
        throw new Error("Failed To Add Recipe");
      }

      const data = await response.json();

      if (data) {
        dispatch({ type: "ADD_TASKS", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
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
