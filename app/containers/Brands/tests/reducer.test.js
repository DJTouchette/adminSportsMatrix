import expect from 'expect';
import brandsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('brandsReducer', () => {
  it('returns the initial state', () => {
    expect(brandsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
