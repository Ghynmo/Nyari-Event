import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import CartCount from "./CartSlice"

const reducers = combineReducers({
  CartCounter: CartCount
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['CartCounter']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store)

export { store, persistor }