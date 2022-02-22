import './style/app.scss';
import { Routes, Route } from 'react-router-dom';
import { GetLeagues } from './containers/GetLeagues';
import { GetTeams } from './containers/GetTeams';
import { GetLeaguesCalendar } from './containers/GetLeaguesCalendar';
import { GetTeamsCalendar } from './containers/GetTeamsCalendar';

import { LayoutPage } from './components/LayoutPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<GetLeagues />} />
          <Route path="teams" element={<GetTeams />} />
          <Route path="/calendar/:id" element={<GetLeaguesCalendar />} />
          <Route path="teams/:id/:teamname" element={<GetTeamsCalendar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
