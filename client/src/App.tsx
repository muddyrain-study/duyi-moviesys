import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { MovieList } from './pages/movie/MovieList';
import { AddMovie } from './pages/movie/AddMovie';
import { EditMovie } from './pages/movie/EditMovie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            Component={Layout}
            children={[
              <Route key='home' path='/' Component={Home}></Route>,
              <Route key='movie' path='/movie' Component={MovieList}></Route>,
              <Route
                key='movie-add'
                path='/movie/add'
                Component={AddMovie}
              ></Route>,
              <Route
                key='movie-edit'
                path='/movie/edit/:id'
                Component={EditMovie}
              ></Route>,
            ]}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
