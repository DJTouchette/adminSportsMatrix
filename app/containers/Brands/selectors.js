import { createSelector } from 'reselect';

/**
 * Direct selector to the brands state domain
 */
const selectBrandsDomain = () => state => state.get('brands');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Brands
 */

const selectBrands = () => createSelector(
  selectBrandsDomain(),
  (substate) => substate.toJS()
);

export default selectBrands;
export {
  selectBrandsDomain,
};
