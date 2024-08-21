// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    userName: localStorage.getItem('userName') || '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('authToken', action.payload);
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem('userName', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.userName = '';
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
    },
  },
});

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    isOpen: false,
    pdfUrl: '',
  },
  reducers: {
    openPdf: (state, action) => {
      state.isOpen = true;
      state.pdfUrl = action.payload;
    },
    closePdf: (state) => {
      state.isOpen = false;
      state.pdfUrl = '';
    },
  },
});

export const { setToken, setUserName, logout } = authSlice.actions;
export const { openPdf, closePdf } = pdfSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    pdf: pdfSlice.reducer,
  },
});

export default store;
