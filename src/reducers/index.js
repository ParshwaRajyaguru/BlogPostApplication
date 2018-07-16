import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogPostReducer from './blogPostReducer';

const rootReducer = combineReducers({
  blogPost: BlogPostReducer,
  form: formReducer
});

export default rootReducer;
