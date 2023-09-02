import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { payload } = action;
      state.cards[payload.id] = {
        id: payload.id,
        front: payload.front,
        back: payload.back,
      };
    },
  },
});

export const selectCardById = (id) => (state) => state.cards.cards[id];
export const selectAllCards = (state) => state.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
