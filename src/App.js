import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <>
            {/* key attribute is used to identify the element uniquely so that path can be exactly match */}
            {/*Everytime the home route should be placed at top so that at first it render*/}
            {/* Exact keyword is used to match the exact path. React does the partial matching */}
            
              <Route exact path="/" element={<News key={"general"} country="in" category="general" pageSize={6} />}></Route> 
              <Route exact path="/business" element={<News key={"business"} country="in" category="business" pageSize={6} /> }></Route>
              <Route exact path="/entertainment" element={<News key={"entertainment"} country="in" category="entertainment" pageSize={6} />}></Route>
              <Route exact path="/general" element={<News key={"general"} country="in" category="general" pageSize={6} />}></Route>
              <Route exact path="/health" element={<News key={"health"} country="in" category="health" pageSize={6} />}></Route>
              <Route exact path="/science" element={<News key={"science"} country="in" category="science" pageSize={6} />}></Route>
              <Route exact path="/sports" element={<News key={"sports"} country="in" category="sports" pageSize={6} />}></Route>
              <Route exact path="/technology" element={<News key={'technology'} country="in" category="technology" pageSize={6} />}></Route>
            </>
          </Routes>
        </Router>
            {/* pageSize is pass as props which is used in changing url */}
      </div>
    )
  }
}
