
import './App.css';
import Cart from './pages/Cart';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Cart/>
      </PersistGate>
    </Provider>
  );
}

export default App;
