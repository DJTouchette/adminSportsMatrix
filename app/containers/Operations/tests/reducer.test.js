import expect from 'expect';
import operationsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('operationsReducer', () => {
  it('returns the initial state', () => {
    expect(operationsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
