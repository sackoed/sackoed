import React from 'react';
import PropTypes from 'prop-types';
import Owner from './owner';
import Record from './record';
import ScheduleItem from './scheduleItem';

const UserTeam = ({
  division,
  divisionStanding,
  logoType,
  logoUrl,
  overallStanding,
  owners,
  percentile,
  rank,
  record,
  scheduleItems,
  teamAbbrev,
  teamId,
  teamLocation,
  teamNickname,
  teamTransactions,
  waiverRank
}) => {
  return (
    <div></div>
  );
};

UserTeam.propTypes = {
  division: PropTypes.shape({
    divisionId: PropTypes.number,
    divisionName: PropTypes.string,
    size: PropTypes.number
  }),
  divisionStanding: PropTypes.number,
  logoType: PropTypes.string,
  logoUrl: PropTypes.string,
  overallStanding: PropTypes.number,
  owners: PropTypes.arrayOf(PropTypes.instanceOf(Owner)),
  percentile: PropTypes.number,
  rank: PropTypes.number,
  record: PropTypes.instanceOf(Record),
  scheduleItems: PropTypes.arrayOf(PropTypes.instanceOf(ScheduleItem)),
  teamAbbrev: PropTypes.string,
  teamId: PropTypes.number,
  teamLocation: PropTypes.string,
  teamNickname: PropTypes.string,
  teamTransactions: PropTypes.shape({
    acquisitionBudgetSpent: PropTypes.number,
    amountPaid: PropTypes.number,
    drops: PropTypes.number,
    miscTeamCharges: PropTypes.number,
    moveToActive: PropTypes.number,
    moveToIR: PropTypes.number,
    offseasonAcquisitionTotal: PropTypes.number,
    overallAcquisitionTotal: PropTypes.number,
    trades: PropTypes.number
  }),
  waiverRank: PropTypes.number
};

UserTeam.defaultProps = {
  division: {},
  divisionStanding: 0,
  logoType: '',
  logoUrl: '',
  overallStanding: 0,
  owners: [],
  percentile: 0,
  rank: 0,
  record: null,
  scheduleItems: [],
  teamAbbrev: '',
  teamId: 0,
  teamLocation: '',
  teamNickname: '',
  teamTransactions: {},
  waiverRank: 0
}

export default UserTeam;