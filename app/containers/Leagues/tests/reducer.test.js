import expect from 'expect';
import leaguesReducer from '../reducer';
import { fromJS } from 'immutable';

describe('leaguesReducer', () => {
  it('returns the initial state', () => {
    expect(leaguesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
