import "./App.css";
// import Reminder from "./Components/Reminder/Reminder";
import Places from "./Components/Places/Places";
import Peoples from "./Components/Peoples/Peoples";
import Questions from "./Components/Questions/Questions";

import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import Menu from "./Components/Menu/Menu";
// import Something from "./Components/Something/Something";
import Slider from "./Components/Slider/Slider";
import TextGen from "./Components/TextGen/TextGen";
import ColorGen from "./Components/ColorGen/ColorGen";
import AnotherTodo from "./Components/AnotherTodo/AnotherTodo";
import LameNavbar from "./Components/LameNavbar/LameNavbar";
import LameSidebar from "./Components/LameSidebar/LameSidebar";
import LameHome from "./Components/LameHome/LameHome";
import Cart from "./Components/MyCart/Cart";

const App = () => {
  document.title = "My Experiments";
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <div className="container">
                    <h1 className="appHeading">EXPERIMENTS WITH REACT</h1>
                    <div className="linkdiv">
                      <Link className="mylink" to="/places-app">
                        Places
                      </Link>
                      <Link className="mylink" to="/peoples-app">
                        Peoples
                      </Link>
                      <Link className="mylink" to="/questions-app">
                        Questions
                      </Link>
                      <Link className="mylink" to="/menu-app">
                        Menu
                      </Link>
                      <Link className="mylink" to="/slider-app">
                        Slider
                      </Link>
                      <Link className="mylink" to="/textgen-app">
                        Make My Text
                      </Link>
                      <Link className="mylink" to="/colorgen-app">
                        Make My Color
                      </Link>
                      <Link className="mylink" to="/todo-app">
                        Another ToDo
                      </Link>
                      <Link className="mylink" to="/navbar-app">
                        Lame Navbar
                      </Link>

                      <Link className="mylink" to="/sidebar-app">
                        Lame Sidebar
                      </Link>
                      <Link className="mylink" to="/home-app">
                        Lame Home
                      </Link>
                      <Link className="mylink" to="/cart-app">
                        My Cart
                      </Link>
                    </div>
                  </div>
                </>
              );
            }}
          ></Route>

          <Route path="/places-app">
            <Places />
          </Route>
          <Route path="/peoples-app">
            <Peoples />
          </Route>
          <Route path="/questions-app">
            <Questions />
          </Route>

          <Route path="/menu-app">
            <Menu />
          </Route>
          <Route path="/slider-app">
            <Slider />
          </Route>
          <Route path="/textgen-app">
            <TextGen />
          </Route>
          <Route path="/colorgen-app">
            <ColorGen />
          </Route>
          <Route path="/todo-app">
            <AnotherTodo />
          </Route>
          <Route path="/navbar-app">
            <LameNavbar />
          </Route>
          <Route path="/sidebar-app">
            <LameSidebar />
          </Route>

          <Route path="/home-app">
            <LameHome />
          </Route>

          <Route path="/cart-app">
            <Cart />
          </Route>
          <Route path="*">
            <div className="drinks-error">
              <h1>OOPS its a DEAD-END!</h1>
              <Link className="error-link" to="/">
                Go Back
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
