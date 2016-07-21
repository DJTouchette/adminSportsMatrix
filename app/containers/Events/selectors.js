import { createSelector } from 'reselect';

/**
 * Direct selector to the events state domain
 */
const selectEventsDomain = () => state => state.get('events');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Events
 */

const selectEvents = () => createSelector(
  selectEventsDomain(),
  (substate) => substate.toJS()
);

export default selectEvents;
export {
  selectEventsDomain,
};
