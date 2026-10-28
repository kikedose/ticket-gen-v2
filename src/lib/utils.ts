export { cn } from 'cn';

export const formatMoney = (n: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(n);

export const getTime = (time = Date.now()) =>
  new Date(time).toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

/** Digits only, minus the prefixes cashiers tend to type: +54, 549, or the 0 trunk prefix. */
export const sanitizePhone = (input: string): string => {
  let digits = input.replace(/\D/g, '');

  // Argentine area codes never start with 0, 5 or 9, so stripping these is safe.
  if (digits.startsWith('54')) {
    digits = digits.slice(2);
    if (digits.startsWith('9')) digits = digits.slice(1); // mobile marker
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return digits;
};

/** Valid = exactly 10 digits after sanitizing. Use this for error handling elsewhere. */
export function isValidPhone(input: string): boolean {
  return sanitizePhone(input).length === 10;
}

/**
 * Formats as:
 *  - Buenos Aires (starts with 11): "11 2345-6789"
 *  - Provincial (e.g. Córdoba):      "351 202-3227"
 * If the digit count is wrong, returns the sanitized digits unformatted.
 */
export function formatPhone(input: string): string {
  const digits = sanitizePhone(input);

  if (digits.length !== 10) return digits;

  return digits.startsWith('11')
    ? digits.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2-$3')
    : digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');
}
