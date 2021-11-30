
import './App.css';
import EventDetail from './pages/EventDetail';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <EventDetail/>
      </PersistGate>
    </Provider>
  );
}

export default App;
