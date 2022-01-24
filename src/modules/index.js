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
import posts from './posts';

const rootReducer = combineReducers({
  counter,
  posts,
});

export default rootReducer;
