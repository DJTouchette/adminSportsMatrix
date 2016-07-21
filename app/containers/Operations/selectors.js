import { createSelector } from 'reselect';

/**
 * Direct selector to the operations state domain
 */
const selectOperationsDomain = () => state => state.get('operations');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Operations
 */

const selectOperations = () => createSelector(
  selectOperationsDomain(),
  (substate) => substate.toJS()
);

export default selectOperations;
export {
  selectOperationsDomain,
};
