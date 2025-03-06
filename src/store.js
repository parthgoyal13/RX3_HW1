import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./components/TasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
