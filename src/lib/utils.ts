export { cn } from 'cn';

/**
 * Formats a numeric value into an Argentine Peso (ARS) currency string.
 * Uses Spanish (Argentina) localization with no fraction digits.
 *
 * @param n - The numeric amount to format.
 * @returns The formatted currency string (e.g., "$ 1.500").
 */
export const formatMoney = (n: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(n);

/**
 * Returns a localized 24-hour time string (HH:mm) for Argentina (`es-AR`).
 *
 * @param time - Optional timestamp or date string/number (defaults to `Date.now()`).
 * @returns The formatted time string in 24-hour format.
 */
export const getTime = (time = Date.now()) =>
  new Date(time).toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

/**
 * Formats a timestamp into an uppercase string containing the day, short month,
 * and time (e.g., "12 NOV 20:06").
 *
 * @param timestamp - Optional timestamp value (defaults to `Date.now()`).
 * @returns The formatted date-time string.
 */
export const formatTime = (timestamp = Date.now()) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(new Date(timestamp))
    .toUpperCase()
    .replace(',', '');
};

/**
 * Validates whether an input phone number resolves to a valid 10-digit Argentine number.
 *
 * @param input - The phone number string to validate.
 * @returns True if the sanitized number has a length of 10 digits, false otherwise.
 */
export const isValidPhone = (input: string): boolean => {
  return sanitizePhone(input).length === 10;
};

/**
 * Sanitizes an Argentine phone number string by removing non-digits,
 * stripping country codes (+54 / 9) and area leading zeros.
 *
 * @param input - The raw phone number string to sanitize.
 * @returns The normalized 10-digit local number string.
 */
export const sanitizePhone = (input: string): string => {
  let digits = input.replace(/\D/g, '');

  if (digits.startsWith('54')) {
    digits = digits.slice(2);
    if (digits.startsWith('9')) digits = digits.slice(1); // mobile marker
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return digits;
};

/**
 * Formats a sanitized Argentine phone number into a readable layout.
 * Automatically handles Buenos Aires style formatting (11 prefix) vs. other regions.
 *
 * @param input - The raw phone number string to format.
 * @returns The formatted phone number string (e.g., "11 1234-5678" or "351 123-4567"),
 * or the raw digits if the length is invalid.
 */
export const formatPhone = (input: string): string => {
  const digits = sanitizePhone(input);

  if (digits.length !== 10) return digits;

  return digits.startsWith('11')
    ? digits.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2-$3')
    : digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');
};

/**
 * Generates a random numeric string of length N (between 1 and 6).
 *
 * @param n - The length of the ticket ID (must be between 1 and 6).
 * @returns A zero-padded random numeric string of length N.
 * @throws Error if N is out of the valid 1-6 range.
 */
export const generateTicketId = (n: number): string => {
  if (!Number.isInteger(n) || n < 1 || n > 6) {
    throw new Error('Ticket ID length must be an integer between 1 and 6.');
  }

  // Calculate the upper bound (e.g., for N=4, max is 10000)
  const max = Math.pow(10, n);

  // Generate a random integer from 0 up to max - 1
  const randomNum = Math.floor(Math.random() * max);

  // Convert to string and pad with leading zeros to guarantee exact length N
  return randomNum.toString().padStart(n, '0');
};
