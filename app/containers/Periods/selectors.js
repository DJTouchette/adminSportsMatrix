import { createSelector } from 'reselect';

/**
 * Direct selector to the periods state domain
 */
const selectPeriodsDomain = () => state => state.get('periods');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Periods
 */

const selectPeriods = () => createSelector(
  selectPeriodsDomain(),
  (substate) => substate.toJS()
);

export default selectPeriods;
export {
  selectPeriodsDomain,
};
