import { writable } from 'svelte/store';

<<<<<<< HEAD
export const isAuthenticated = writable(false);

export function checkAuthentication() {
  const token = localStorage.getItem('token');
  isAuthenticated.set(!!token);
}

export function logout() {
  localStorage.removeItem('token');
  isAuthenticated.set(false);
}

=======
export const user = writable(null);
>>>>>>> 45c19417d73f42e54ede56e38625532ee049889c
