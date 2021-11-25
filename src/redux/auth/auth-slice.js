import { createSlice } from '@reduxjs/toolkit';
import authOperations from '../auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, actions) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
