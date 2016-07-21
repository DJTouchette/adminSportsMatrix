import { createSelector } from 'reselect';

/**
 * Direct selector to the picks state domain
 */
const selectPicksDomain = () => state => state.get('picks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Picks
 */

const selectPicks = () => createSelector(
  selectPicksDomain(),
  (substate) => substate.toJS()
);

export default selectPicks;
export {
  selectPicksDomain,
};
