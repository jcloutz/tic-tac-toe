// this action will be intercepted by middleware to trigger the ai making a play
export const AI_PLAY = 'fcc-tic-tac-toe/modules/AI_PLAY'
export const SET_NEXT_MOVE = 'fcc-tic-tac-toe/modules/SET_NEXT_MOVE'

const initialState = {
  row: null,
  cell: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEXT_MOVE:
      return action.payload
    default:
      return state
  }
}

export const aiPlay = () => ({
  type: AI_PLAY
})

export const setNextMove = ([row, cell]) => ({
  type: SET_NEXT_MOVE,
  payload: { row, cell }
})
