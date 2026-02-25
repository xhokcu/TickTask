import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITask {
  id: string;
  title: string;
  description?: string;
  priority: string | null;
  createdAt: any;
  location?: any;
}

interface TaskState {
  tasks: ITask[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<ITask[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.unshift(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((i) => i.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
