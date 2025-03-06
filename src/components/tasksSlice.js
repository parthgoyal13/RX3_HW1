import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksPerday: [
      {
        taskDate: "15/07/2024",
        tasks: [
          {
            taskTitle: "Get Groceries from the market.",
            taskStatus: "Pending",
          },
          { taskTitle: "Go to gym.", taskStatus: "Completed" },
          { taskTitle: "Water the plants.", taskStatus: "Completed" },
        ],
      },
      {
        taskDate: "16/07/2024",
        tasks: [
          { taskTitle: "Go to the park.", taskStatus: "Completed" },
          { taskTitle: "Get my room cleaned.", taskStatus: "Pending" },
        ],
      },
    ],
  },
  reducers: {},
});

export default tasksSlice.reducer;
