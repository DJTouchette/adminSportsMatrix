import { createSelector } from 'reselect';

/**
 * Direct selector to the purchases state domain
 */
const selectPurchasesDomain = () => state => state.get('purchases');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Purchases
 */

const selectPurchases = () => createSelector(
  selectPurchasesDomain(),
  (substate) => substate.toJS()
);

export default selectPurchases;
export {
  selectPurchasesDomain,
};
