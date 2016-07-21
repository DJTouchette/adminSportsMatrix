import expect from 'expect';
import periodsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('periodsReducer', () => {
  it('returns the initial state', () => {
    expect(periodsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
