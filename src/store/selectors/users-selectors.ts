import { createSelector } from '@reduxjs/toolkit';
import { IUsersState } from 'store/reducers/users-reducer';
import { RootStateType } from 'store/store';

const getUsersState = (state: RootStateType): IUsersState => state.users;

export const selectUsers = createSelector([getUsersState], (state) => state.users);
export const selectUsersFetchStatus = createSelector([getUsersState], (state) => state.fetchStatus);
