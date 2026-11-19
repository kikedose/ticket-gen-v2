import { Banknote, Blend, CreditCard, QrCode, Landmark } from 'lucide-react';

export const PAYMENT_METHODS = [
  {
    value: 'cash',
    label: 'Cash',
    icon: Banknote,
  },
  {
    value: 'transfer',
    label: 'Transfer',
    icon: Landmark,
  },
  {
    value: 'card',
    label: 'Credit Card',
    icon: CreditCard,
  },
  {
    value: 'qr',
    label: 'QR',
    icon: QrCode,
  },
  {
    value: 'mixed',
    label: 'Mixed Methods',
    icon: Blend,
  },
];
