import { combineReducers } from 'redux';
import testReducer from '../../features/sandbox/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
