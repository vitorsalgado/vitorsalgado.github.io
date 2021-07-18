import { combineReducers } from '@reduxjs/toolkit'
import { opensource } from '@app/features/OpenSource/reducers'

const rootReducer = combineReducers({ opensource })

export default rootReducer
