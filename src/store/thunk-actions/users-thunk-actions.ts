import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestUser, requestUsers } from 'api/services/users-service';

import { adaptUsersToFront, adaptUserToFront } from 'utils/adapters';

export const requestUsersThunkAction = createAsyncThunk('users/request', async () =>
    requestUsers().then((data) => adaptUsersToFront(data)),
);

export const requestUserThunkAction = createAsyncThunk('user/request', async (userId: string) =>
    requestUser(userId).then((data) => adaptUserToFront(data)),
);
