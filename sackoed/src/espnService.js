import axios from 'axios';

const ESPN_FF_BASE_URL = 'http://games.espn.com/ffl/api/v2';
const slots = {
  'QB': 0,
  'RB': 2,
  'WR': 4,
  'TE': 6,
  'D/ST': 16,
  'K': 17,
  'BE': 20,
  'FLEX': 23
};

export const getStatsForPlayer = () => 
  axios.get(`${ESPN_FF_BASE_URL}/scoreboard`, {
    params: {
      leagueID: 540728,
      seasonID: 2018,
      matchupPeriodWeek: 10,
      slotCategoryId: slots['D/ST'],
      withCredentials: true
    }
  }).then(res => {
    console.log(res);
  }).catch(res => {
    console.log('Oopsy! We done a fucky wucky');
  });