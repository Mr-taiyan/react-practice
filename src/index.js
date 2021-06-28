import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ListWithMore({ renderItem, data = [], max }) {
  return <span className="" exp-10-list-with-more></span>;
}

const data = [
  {
    id: "1",
    name: "Kennedy",
    job: "Chief Mobility Orchestrator",
    city: "North Alec",
  },
  {
    id: "2",
    name: "Lucius",
    job: "Internal Research Manager",
    city: "Littleland",
  },
  {
    id: "3",
    name: "Carlos",
    job: "Lead Configuration Analyst",
    city: "South Lillian",
  },
  {
    id: "4",
    name: "Urban",
    job: "Chief Operations Agent",
    city: "Shieldshaven",
  },
  {
    id: "5",
    name: "Katrine",
    job: "Legacy Solutions Orchestrator",
    city: "South Kyleigh",
  },
  {
    id: "6",
    name: "Kennedi",
    job: "Global Assurance Developer",
    city: "East Jaunitaville",
  },
  {
    id: "7",
    name: "Mariah",
    job: "Forward Functionality Administrator",
    city: "West Kody",
  },
  {
    id: "8",
    name: "Danika",
    job: "Forward Applications Developer",
    city: "Lake Max",
  },
  {
    id: "9",
    name: "Freeda",
    job: "Legacy Tactics Officer",
    city: "North Brandonview",
  },
  {
    id: "10",
    name: "Lila",
    job: "Future Research Coordinator",
    city: "South Helenabury",
  },
];

function App() {
  return (
    <div className="exp-10-list-with-more">
      <h1>user names</h1>
      <div className="user-names">
        Liked by:{" "}
        <ListWithMore
          renderItem={(user) => {
            return <span className="user-name">{user.name}</span>;
          }}
          data={data}
          max={3}
        ></ListWithMore>
      </div>
      <br />
      <br />
      <h1>user list</h1>
      <div className="user-list">
        <div className="user-list-row user-list-row-head">
          <span className="user-name-cell">name</span>
          <span>city</span>
          <span>job title</span>
        </div>
        <ListWithMore
          renderItem={(user) => {
            return (
              <div className="user-list-row">
                <span className="user-name-cell">{user.name}</span>
                <span>{user.city}</span>
                <span>{user.job}</span>
              </div>
            );
          }}
          data={data}
          max={5}
        ></ListWithMore>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
