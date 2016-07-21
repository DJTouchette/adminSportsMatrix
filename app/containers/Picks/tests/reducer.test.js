import expect from 'expect';
import picksReducer from '../reducer';
import { fromJS } from 'immutable';

describe('picksReducer', () => {
  it('returns the initial state', () => {
    expect(picksReducer(undefined, {})).toEqual(fromJS({}));
  });
});
