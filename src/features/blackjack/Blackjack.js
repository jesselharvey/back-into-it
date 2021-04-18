import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchDeck, selectDeck} from './blackjackSlice'

export function Blackjack() {

  // const dispatch = useDispatch()

  // let deck = []
  let [deck, setDeck] = useState({})

  let initialDraw = () => {}

  useEffect(() => {
    // dispatch(asyncFetchDeck())
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then(resp => setDeck(resp.data))
  }, [])

  console.log(deck)

  let deck_id = deck.deck_id
  console.log(deck_id)

  let drawOne = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1
    `).then(resp => console.log(resp.data))
    console.log(deck)}


  return(
    <div>
      <h3>Game</h3>
      <button onClick={() => drawOne()}>Draw one</button>
    </div>
  )


}