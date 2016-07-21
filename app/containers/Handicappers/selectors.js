import { createSelector } from 'reselect';

/**
 * Direct selector to the handicappers state domain
 */
const selectHandicappersDomain = () => state => state.get('handicappers');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Handicappers
 */

const selectHandicappers = () => createSelector(
  selectHandicappersDomain(),
  (substate) => substate.toJS()
);

export default selectHandicappers;
export {
  selectHandicappersDomain,
};
