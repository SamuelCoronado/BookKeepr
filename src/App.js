import react, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import HomeComponent from './components/HomeComponent';
import SearchComponent from './components/SearchComponent';
import LoginComponent from './components/LoginComponent';
import MailComponent from './components/MailComponent';

function App() {

  const [search, setSearch] = useState(null);

  const [profile, setProfile] = useState(null);

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <Router>
    <div className="container my-0 mx-auto mt-16">

      <nav className="flex top-0 left-0 md:hidden fixed w-full p-2 px-4 justify-between items-center shadow-md bg-white z-10">
              <Link to="/">
                <h1>Book<span className="font-semibold">Keepr</span></h1>
              </Link>
        <form action="#" className="h-5/6 flex justify-between bg-transparent text-xs flex gap-2">
            <input type="text" className="shadow-md" onChange={(e) => setSearch(e.target.value)} />
            <Link to="/search" className="flex items-center">
              <button type="submit" className="flex justify-between items-center p-1 bg-white rounded-2xl text-gray-400 shadow-md"><i class="fas fa-search"></i></button>
            </Link>
          </form>
        <i class="fas fa-bars" onClick={() => setShowMobileNav(!showMobileNav)}></i>
      </nav>

      <ul className={`flex flex-col ${showMobileNav? 'top-12': '-top-full'}  md:hidden fixed w-5/6 p-2 px-4 mx-0 rounded justify-between shadow-md bg-white z-10 transition-all duration-300`}>
          {profile && <li className="mb-5">Hello, {profile}</li>}
          <a href="#features">
            <li>Features</li>
          </a>

          <a href="#favorites">
            <li>About</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
          {
            !profile && 
            <Link to="/login">
              <li>Register</li>
            </Link>
          }
      </ul>

      <nav className="hidden w-5/6 md:flex justify-between items-center text-sm mb-20 fixed top-5 z-10 shadow-md p-2 rounded bg-white">
              <Link to="/">
                <h1>Book<span className="font-semibold">Keepr</span></h1>
              </Link>
        <ul className="flex justify-between  gap-10">
          <a href="#features">
            <li>Features</li>
          </a>

          <a href="#favorites">
            <li>About</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <div className="flex items-center justify-between p-1 rounded-md bg-gray-100 shadow-lg">
          <form action="#" className="h-5/6 flex justify-between bg-transparent text-xs flex gap-2">
            <input type="text" className="shadow-md" onChange={(e) => setSearch(e.target.value)} />
            <Link to="/search" className="flex items-center">
              <button type="submit" className="flex justify-between items-center p-1 bg-white rounded-2xl text-gray-400 shadow-md"><i class="fas fa-search"></i></button>
            </Link>
          </form>
        </div>

        {
          profile === null ?
            <ul className="flex items-center gap-2">
              <Link to="/login">
                <li>Register</li>
              </Link>
            </ul>
          :
            <div className="hidden md:flex items-center gap-2">
              <p className="text-xs font-semibold">{profile}</p>
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-6 h-6 rounded-xl"/>
            </div>
        }

      </nav>

      <div className="px-6">

        <Switch>

           <Route path="/login">
              <LoginComponent setProfileHandler={setProfile}/>
            </Route>

          <Route path="/search">
              <SearchComponent searchTerm={search}/>
            </Route>

          <Route path="/mail">
              <MailComponent />
          </Route>

          <Route path="/">
            <HomeComponent/>
          </Route>

         
        </Switch>


      </div>

    </div>

    <footer className="p-6 md:p-8 md:px-32 bg-gray-100 text-xs">
      <div className="flex md:flex justify-between">
        <div>
          <h1>Book<span className="font-semibold">Keepr</span></h1>
          <p style={{fontSize: '10px'}}>Keep track and find books you would like to read </p>
          <div className="flex gap-5 mt-4 text-gray-600">
            <i class="fab fa-facebook-f bg-gray-200 p-1"></i>
            <i class="fab fa-twitter  bg-gray-200 p-1"></i>
            <i class="fab fa-instagram  bg-gray-200 p-1"></i>
          </div>
        </div>

        <ul className="flex flex-col gap-3 text-gray-500">
          <li className="font-bold">Home</li>
          <a href="#features">
            <li>Features</li>
          </a>

          <a href="#favorites">
            <li>About</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>

        <ul className="flex flex-col gap-3 text-gray-500">
          <li className="font-bold">Search</li>
          <a href="#contact">
            <li>Search</li>
          </a>
        </ul>

        <ul className="flex flex-col gap-3 text-gray-500">
          <li className="font-bold">Auth</li>
          <Link to="/login">
                <li>Register</li>
          </Link>
        </ul>
        </div>
       <div className="flex justify-between mt-10" style={{fontSize: '10px'}}>
         <p>Copyright © 2021 </p>
         <p>Made by <span className="font-semibold">Samuel Coronado</span></p>
       </div>
    </footer>

    </Router>
  );
}

export default App;
