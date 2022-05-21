import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestUsers } from 'api/services/users-service';

import { adaptUsersToFront } from 'utils/adapters';

export const requestUsersThunkAction = createAsyncThunk('users/request', async () =>
    requestUsers().then((data) => adaptUsersToFront(data)),
);
