import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 9;

  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="Business"
                  pageSize={this.pageSize}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            







                
              
            
            <Route
              exact
              path="/General"
              element={
                <News
                  key="General"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            ></Route>

            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
