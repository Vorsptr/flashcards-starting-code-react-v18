import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/topicsSlice";
import quizesSlice from "../features/quizzes/quizesSlice";
import cardsSlice from "../features/cards/cardsSlice";
// import reducers

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizes: quizesSlice,
    cards: cardsSlice,
  },
});
