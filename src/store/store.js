import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import CartSum from "./CartTotal"

const reducers = combineReducers({
  CartSummary: CartSum
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['CartSummary']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store)

export { store, persistor }