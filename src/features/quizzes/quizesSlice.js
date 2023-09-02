import { createSlice } from "@reduxjs/toolkit";

export const quizesSlice = createSlice({
  name: "quizes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { payload } = action;
      state.quizzes[payload.id] = {
        id: payload.id,
        name: payload.name,
        topicId: payload.topicId,
        cardIds: payload.cardIds,
      };
    },
  },
});

export const selectAllQuizes = (state) => state.quizes;
export const { addQuiz } = quizesSlice.actions;
export default quizesSlice.reducer;
