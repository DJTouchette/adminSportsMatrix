import expect from 'expect';
import handicappersReducer from '../reducer';
import { fromJS } from 'immutable';

describe('handicappersReducer', () => {
  it('returns the initial state', () => {
    expect(handicappersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
