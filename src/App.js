import './App.css';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Profile from './components/Profile'
import FollowingEvent from './components/FollowingEvent'
import CreatedEvent from './components/CreatedEvent'
import FormCreate from './components/FormCreate'
import EventDetail from './pages/EventDetail';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/store"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LaunchEvent from './pages/LaunchEvent';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/detail" element={<CreateEvent/>}>
              <Route path=":profile" element={<Profile/>}/>
              <Route path=":create-event" element={<FormCreate/>}/>
              <Route path=":created" element={<CreatedEvent/>}/>
              <Route path=":following-event" element={<FollowingEvent/>}/>
            </Route>
            <Route path="event" element={<LaunchEvent/>}>
              <Route path=":event_id" element={<EventDetail/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
