import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './modules/reducer'
import thunk from 'redux-thunk'
// import checkGameOver from './middleware/check-game-over'
// import togglePlayer from './middleware/toggle-player'
// import handleAIPlay from './middleware/handle-ai-play'
// import initializeGame from './middleware/initialize-game'

const store = createStore(reducer, {},
  compose(
    applyMiddleware(
      thunk
      // initializeGame,
      // checkGameOver,
      // togglePlayer,
      // handleAIPlay
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
export default store