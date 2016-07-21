import { createSelector } from 'reselect';

/**
 * Direct selector to the leagues state domain
 */
const selectLeaguesDomain = () => state => state.get('leagues');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Leagues
 */

const selectLeagues = () => createSelector(
  selectLeaguesDomain(),
  (substate) => substate.toJS()
);

export default selectLeagues;
export {
  selectLeaguesDomain,
};
