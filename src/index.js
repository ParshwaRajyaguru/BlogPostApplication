import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BlogPostIndex from './components/blogPostIndex';
import NewBlogPost from './components/newBlogPost';
import reducers from './reducers';
import ShowBlogPost from "./components/showBlogPost";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={NewBlogPost} />
              <Route path="/posts/:id" component={ShowBlogPost} />
              <Route path="/" component={BlogPostIndex} />
            </Switch>
          </div>
        </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
