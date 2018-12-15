import React from 'react';
import PropTypes from 'prop-types';

const Record = ({
  awayLosses,
  awayPercentage,
  awayTies,
  awayWins,
  divisionLosses,
  divisionPercentage,
  divisionStanding,
  divisionTies,
  divisionWins,
  homeLosses,
  homePercentage,
  homeTies,
  homeWins,
  overallLosses,
  overallPercentage,
  overallStanding,
  overallTies,
  overallWins,
  pointsAgainst,
  pointsFor,
  streakLength,
  streakType
}) => {
  return (
    <div></div>
  );
}

Record.propTypes = {
  awayLosses: PropTypes.number,
  awayPercentage: PropTypes.number,
  awayTies: PropTypes.number,
  awayWins: PropTypes.number,
  divisionLosses: PropTypes.number,
  divisionPercentage: PropTypes.number,
  divisionStanding: PropTypes.number,
  divisionTies: PropTypes.number,
  divisionWins: PropTypes.number,
  homeLosses: PropTypes.number,
  homePercentage: PropTypes.number,
  homeTies: PropTypes.number,
  homeWins: PropTypes.number,
  overallLosses: PropTypes.number,
  overallPercentage: PropTypes.number,
  overallStanding: PropTypes.number,
  overallTies: PropTypes.number,
  overallWins: PropTypes.number,
  pointsAgainst: PropTypes.number,
  pointsFor: PropTypes.number,
  streakLength: PropTypes.number,
  streakType: PropTypes.number
};

Record.defaultProps = {
  awayLosses: 0,
  awayPercentage: 0,
  awayTies: 0,
  awayWins: 0,
  divisionLosses: 0,
  divisionPercentage: 0,
  divisionStanding: 0,
  divisionTies: 0,
  divisionWins: 0,
  homeLosses: 0,
  homePercentage: 0,
  homeTies: 0,
  homeWins: 0,
  overallLosses: 0,
  overallPercentage: 0,
  overallStanding: 0,
  overallTies: 0,
  overallWins: 0,
  pointsAgainst: 0,
  pointsFor: 0,
  streakLength: 0,
  streakType: 0
};

export default Record;