import { createSelector } from '@reduxjs/toolkit';
import { IUserState } from 'store/reducers/user-reducer';
import { RootStateType } from 'store/store';

const getUserState = (state: RootStateType): IUserState => state.user;
export const selectUser = createSelector([getUserState], (state) => state.user);
export const selectUserFetchStatus = createSelector([getUserState], (state) => state.fetchStatus);
