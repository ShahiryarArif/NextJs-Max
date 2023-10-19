import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetups/>}/>
        <Route path="/new-meetup" element={<NewMeetup />}/>
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
