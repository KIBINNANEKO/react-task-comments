import {createStore, combineReducers, applyMiddleware } from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	comments: null
})

export const store = createStore(rootReducer, applyMiddleware(thunk))