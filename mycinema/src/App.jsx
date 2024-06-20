import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Pages/Main'
import ManageUsers from './Pages/ManageUsers'
import Movies from './Pages/Movies'
import AllMovies from './Pages/AllMovies'
import AddMovie from './Pages/AddMovie'
import EditMovie from './Pages/EditMovie'
import Subscriptions from './Pages/Subscriptions'
import AllMembers from './Pages/AllMembers'
import EditMember from './Pages/EditMember'
import AddMember from './Pages/AddMember'
import AllUsers from './Pages/AllUsers'
import EditUser from './Pages/EditUser'
import AddUser from './Pages/AddUser'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/main' element={<Main />}>
          <Route path='manageusers' element={<ManageUsers />}>
            <Route path='allusers' element={<AllUsers />} />
            <Route path='edituser' element={<EditUser />} />
            <Route path='adduser' element={<AddUser />} />
          </Route>
          <Route path='subscriptions' element={<Subscriptions />}>
            <Route path='allmembers' element={<AllMembers />} />
            <Route path='editmember' element={<EditMember />} />
            <Route path='addmember' element={<AddMember />} />
          </Route>
          <Route path='movies' element={<Movies />}>
            <Route path='allmovies' element={<AllMovies />} />
            <Route path='addmovie' element={<AddMovie />} />
            <Route path='editmovie' element={<EditMovie />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
