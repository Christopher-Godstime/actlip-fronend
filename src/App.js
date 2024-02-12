import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import Alert from "./components/alert/Alert";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import AboutUs from "./pages/about-us";
import NewsAndArticles from "./pages/news-and-articles";
import ContactUs from "./pages/contact-us";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import News from "./pages/news";
import StatusModal from "./components/StatusModal";

import { refreshToken } from "./redux/actions/authAction";

import { getPosts } from "./redux/actions/postAction";

import io from "socket.io-client";

import { GLOBALTYPES } from "./redux/actions/globalTypes";
import SocketClient from "./SocketClient";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { auth, status, modal, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
    }
  }, [dispatch, auth.token]);
  return (
    <Router>
      {auth.token ? "" : <Navbar show={show} setShow={setShow} />}
      <div className={show ? `font-poppins hidden xl:inline` : ` font-poppins`}>
        <Route exact path="/login" component={auth.token ? Dashboard : Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/news-and-articles" component={NewsAndArticles} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/news-and-articles/:id" component={News} />
        {auth.token ? "" : <Footer show2={show2} setShow2={setShow2} />}
      </div>

      <Alert />

      <div className={`App ${(status || modal) && "mode"}`}>
        <div className="main font-poppins">
          {status && <StatusModal />}
          {auth.token && <SocketClient />}

          <div style={{}}>
            <PrivateRouter exact path="/login/:page" component={PageRender} />
            <PrivateRouter
              exact
              path="/login/:page/:id"
              component={PageRender}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
