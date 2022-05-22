import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postReducer as post } from './reducers/post-reducer';
import { postsReducer as posts } from './reducers/posts-reducer';
import { userReducer as user } from './reducers/user-reducer';
import { usersReducer as users } from './reducers/users-reducer';

const rootReducer = combineReducers({
    posts,
    post,
    users,
    user,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
