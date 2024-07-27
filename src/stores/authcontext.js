// src/stores/authContext.js
import {  getContext, setContext } from 'svelte';
import {  writable } from 'svelte/store';

const AuthContext = 'auth';

export const createAuthContext = () => {
  const isAuthenticated = writable(false);
  setContext(AuthContext, { isAuthenticated });
};

export const getAuthContext = () => getContext(AuthContext);
