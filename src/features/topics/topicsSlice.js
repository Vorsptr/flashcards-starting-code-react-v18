import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { payload } = action;
      state.topics[payload.id] = {
        id: payload.id,
        name: payload.name,
        icon: payload.icon,
        quizIds: [],
      };
    },
    addQuiz: (state, action) => {
      const { payload } = action;
      state.topics[payload.id].quizIds.push(payload.cardIds);
    },
  },
});
export const selectAllTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
