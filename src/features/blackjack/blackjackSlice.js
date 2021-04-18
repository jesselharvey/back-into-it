import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const blackjackSlice = createSlice({
    name: 'blackjack',
    initialState: {
        deck: {}
    },
    reducers: {
        asyncFetchDeck: (state, action) => {
            state.deck = action.payload
        }
    },

});

export const { asyncFetchDeck } = blackjackSlice.actions

export const fetchDeck = () => (dispatch) => {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    ).then((resp) => {
        const deck = resp.data
        console.log(deck)
        dispatch(asyncFetchDeck(deck))
    })
}

export const selectDeck = (state) => state.blackjack.deck

export default blackjackSlice.reducer