import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header.jsx"
import SignUp from "./signup.jsx"
import Footer  from "./Footer.jsx"
import JobTracker from "./JOBTRACKER.jsx"
import Layout from "./Layout.jsx"
import Login from "./login.jsx"
import Four from "./404.jsx"
import UserDetails from "./user.jsx"
import First from "./First/First.jsx"
import './index.css'
function App() {
  return(
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<First/>}/>
              <Route path="/home" element={<First/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/user" element = {<UserDetails />}/>
              <Route path="/jobtracker" element={<JobTracker/>}/>
              <Route path="*" element={<Four/>} />
            </Route>
          </Routes>
     </Router>
   </>
  );
}

export default App
