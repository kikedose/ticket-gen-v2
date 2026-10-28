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

export function isValidPhone(input: string): boolean {
  return sanitizePhone(input).length === 10;
}

export function formatPhone(input: string): string {
  const digits = sanitizePhone(input);

  if (digits.length !== 10) return digits;

  return digits.startsWith('11')
    ? digits.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2-$3')
    : digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');
}

export const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
