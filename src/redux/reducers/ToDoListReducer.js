const initialState = {
  taskList: [
    { id: "1", name: "Đi chơi", title: false },
    { id: "2", name: "Đi đến trường", title: false },
    { id: "3", name: "Làm bài tập về nhà", title: false },
    { id: "4", name: "Làm bài react", title: false },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log(action.newtask);
      let taskListUpdate = [...state.taskList];
      taskListUpdate.push(action.newtask);
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case "DELETE_TASK": {
      let taskListUpdate = [...state.taskList];
      taskListUpdate = taskListUpdate.filter(
        (task) => task.id !== action.taskID
      );
      console.log(action);
      return { ...state, taskList: taskListUpdate };
    }
    default:
      return { ...state };
  }
};
