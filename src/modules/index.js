// import { combineReducers } from 'redux';
// import counter from './counter';
// import todos from './todos';

// const rootReducer = combineReducers({
//   counter,
//   todos,
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
