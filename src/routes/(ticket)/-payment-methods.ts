import { Banknote, Blend, CreditCard, QrCode, Landmark } from 'lucide-react';

export const PAYMENT_METHODS = [
  {
    value: 'cash',
    tag: 'Cash',
    icon: Banknote,
  },
  {
    value: 'transfer',
    tag: 'Transfer',
    icon: Landmark,
  },
  {
    value: 'card',
    tag: 'Credit Card',
    icon: CreditCard,
  },
  {
    value: 'qr',
    tag: 'QR',
    icon: QrCode,
  },
  {
    value: 'mixed',
    tag: 'Mixed Methods',
    icon: Blend,
  },
];
