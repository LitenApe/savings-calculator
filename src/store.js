import { writable } from 'svelte/store'

export const startDeposit = writable(100000);
export const monthlyDeposit = writable(1000);
export const interest = writable(10);
