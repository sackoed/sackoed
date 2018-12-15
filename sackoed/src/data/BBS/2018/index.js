// http://games.espn.com/ffl/api/v2/scoreboard?leagueId=540728&seasonId=2018&matchupPeriodId=[matchupPeriodId]

import {weeklyScoreboards} from './scoreboard/scoreboard';
import {weeklyBoxscores} from './boxscore/boxscore';
import {weeklyTeams} from './teams/teams';

export default {weeklyBoxscores, weeklyScoreboards, weeklyTeams};