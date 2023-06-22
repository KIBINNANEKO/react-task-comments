import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { commentsReducer } from './commentsReducer'

const rootReducer = combineReducers({
	comments: commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))