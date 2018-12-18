import React, { Component } from 'react';
import logo from './logo.svg';
import weeklyData from './data/BBS/2018/index';
import UserTeam from './userTeam';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './App.css';
import style from 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const {weeklyScoreboards, weeklyBoxscores, weeklyTeams} = weeklyData;

class App extends Component {
  state = {
    parsedTeams: []
  };

  componentDidMount() {
    this.populateDisplayTeams(weeklyTeams);
  };

  populateDisplayTeams = weeklyTeams => {
    // Grab most recent snapshot of teams (without modifying the array)
    const {teams, metadata} = weeklyTeams.slice(-1)[0];
    // Parse team info into readable form for state
    const parsedTeams = [];
    teams.map(({teamLocation, teamNickname, teamId, owners, record: {overallLosses, overallWins, pointsAgainst, pointsFor}}) => {
      const {firstName, lastName} = owners[0];
      parsedTeams.push({
        'teamId': teamId,
        'teamName': `${teamLocation} ${teamNickname}`,
        'ownerName': `${firstName} ${lastName}`,
        'overallWins': overallWins,
        'overallLosses': overallLosses,
        'pointsFor': pointsFor,
        'pointsAgainst': pointsAgainst
      })
    });
    this.setState({parsedTeams});
  }
  render() {
    console.log(weeklyBoxscores);
    console.log(weeklyScoreboards);
    console.log(weeklyTeams);
    const {parsedTeams} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to <a href='/ownerProfile'>reload</a>.
        </p>
        <BootstrapTable data={parsedTeams} options={[]} striped bordered hover>
          <TableHeaderColumn dataField='teamId' isKey>#</TableHeaderColumn>
          <TableHeaderColumn dataField='teamName'>Team Name</TableHeaderColumn>
          <TableHeaderColumn dataField='ownerName'>Owner</TableHeaderColumn>
          <TableHeaderColumn dataField='overallWins' dataSort>Wins</TableHeaderColumn>
          <TableHeaderColumn dataField='overallLosses' dataSort>Losses</TableHeaderColumn>
          <TableHeaderColumn dataField='pointsFor' dataSort>Points For</TableHeaderColumn>
          <TableHeaderColumn dataField='pointsAgainst' dataSort>Points Against</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default App;
