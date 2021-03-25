import { writable } from 'svelte/store'

export const startDeposit = writable(10);
export const monthlyDeposit = writable(10);
export const interest = writable(10);
