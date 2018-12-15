import React from 'react';
import PropTypes from 'prop-types';

const ScheduleItem = ({
  matchupPeriodId,
  matchUps: {
    awayTeam,
    awayTeamAdjustment,
    awayTeamId,
    awayTeamScores,
    homeTeam,
    homeTeamAdjustment,
    homeTeamBonus,
    HomeTeamId,
    homeTeamScores,
    isBye,
    matchupTypeId,
    outcome
  }
}) => {
  return (
    <div></div>
  );
};

ScheduleItem.propTypes = {
  matchupPeriodId: PropTypes.number,
  matchUps: PropTypes.shape({
    awayTeam: PropTypes.shape({
      division: PropTypes.shape({
        divisionId: PropTypes.number,
        divisionName: PropTypes.string,
        size: PropTypes.number
      }),
      logoType: PropTypes.string,
      logoUrl: PropTypes.string,
      teamAbbrev: PropTypes.string,
      teamId: PropTypes.number,
      teamLocation: PropTypes.string,
      teamNickname: PropTypes.string,
      waiverRank: PropTypes.number
    }),
    awayTeamAdjustment: PropTypes.number,
    awayTeamId: PropTypes.number,
    awayTeamScores: PropTypes.arrayOf(PropTypes.number),
    homeTeam: PropTypes.shape({
      division: PropTypes.shape({
        divisionId: PropTypes.number,
        divisionName: PropTypes.string,
        size: PropTypes.number
      }),
      logoType: PropTypes.string,
      logoUrl: PropTypes.string,
      teamAbbrev: PropTypes.string,
      teamId: PropTypes.number,
      teamLocation: PropTypes.string,
      teamNickname: PropTypes.string,
      waiverRank: PropTypes.number
    }),
    homeTeamAdjustment: PropTypes.number,
    homeTeamBonus: PropTypes.number,
    HomeTeamId: PropTypes.number,
    homeTeamScores: PropTypes.arrayOf(PropTypes.number),
    isBye: PropTypes.bool,
    matchupTypeId: PropTypes.number,
    outcome: PropTypes.number
  })
};

ScheduleItem.defaultProps = {
  matchupPeriodId: 0,
  matchUps: {
    awayTeam: {
      division: {
        divisionId: 0,
        divisionName: 0,
        size: 0
      },
      logoType: '',
      logoUrl: '',
      teamAbbrev: '',
      teamId: '',
      teamLocation: '',
      teamNickname: '',
      waiverRank: 0
    },
    awayTeamAdjustment: 0,
    awayTeamId: 0,
    awayTeamScores: [],
    homeTeam: {
      division: {
        divisionId: 0,
        divisionName: 0,
        size: 0
      },
      logoType: '',
      logoUrl: '',
      teamAbbrev: '',
      teamId: '',
      teamLocation: '',
      teamNickname: '',
      waiverRank: 0
    },
    homeTeamAdjustment: 0,
    homeTeamBonus: 0,
    HomeTeamId: 0,
    homeTeamScores: [],
    isBye: false,
    matchupTypeId: 0,
    outcome: 0
  }
};

export default ScheduleItem;