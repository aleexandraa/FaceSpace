import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Navigation from "./Navigation"
import Profile from "./Profile";
import SignIn from "./SignIn";

const App = () => {
  const [allUsers, setallUsers] = useState([]);
  const [userFreinds, setUserFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [linkDisabled, setLinkDisabled] = useState(false);
  const [loggedinUser, setLoggedinUser] = useState('');

  useEffect(() => {
    fetch("/api/users").then((response) =>
    response.json().then((json) => {
      setallUsers(json.data);
    })
    );
  }, []); 
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation 
      linkDisabled={linkDisabled}
      setLinkDisabled={setLinkDisabled}
      loggedinUser={loggedinUser}
      setLoggedinUser={setLoggedinUser}
      userFriends={userFreinds}
      setUserFriends={setUserFriends}
      setCurrentUser={setCurrentUser}
      />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage
              allUsers={allUsers}
              userFriends={userFreinds}
              setUserFriends={setUserFriends}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/profile/:id">
            <Profile allUsers={allUsers} />
          </Route>
          <Route exact path="/signin">
            <SignIn
            allUsers={allUsers}
            linkDisabled={linkDisabled}
            setLinkDisabled={setLinkDisabled}
            loggedinUser={loggedinUser}
            setLoggedinUser={setLoggedinUser}
            userFriends={userFreinds}
            setUserFriends={setUserFriends}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
