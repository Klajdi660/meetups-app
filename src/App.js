// import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetup';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  // return (
  //   <div>
  //     <h1>Prova</h1>
  //     <Todo text="test"/>
  //   </div>
  // );

  return (
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AllMeetupPage />
            </Route>
            <Route path="/new-meetup">
              <NewMeetupPage />
            </Route>
            <Route path="/favorites">
              <FavoritePage />
            </Route>
          </Switch>
        </Layout>
  );
}

export default App;
