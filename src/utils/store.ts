import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers, { IStoreState, initState } from 'reducers/index'

export default createStore<IStoreState, any, any, any>(
  reducers,
  initState,
  composeWithDevTools()
)
