export const PREMIUM_PLANS = [
  {
    id: 'monthly',
    name: '1 Month',
    label: 'Flexible',
    price: '5.00',
    oldPrice: '10.00',
    totalPrice: 5,
    description: 'The freedom to upgrade your business one month at a time.',
    billingNote: '$5 billed every month. Cancel anytime.',
  },
  {
    id: 'two-year',
    name: '24 Months',
    label: 'Best value',
    price: '3.00',
    oldPrice: '5.00',
    totalPrice: 72,
    description: 'Maximum savings for businesses ready to grow for the long term.',
    billingNote: '$72 billed every 24 months.',
    savings: 'SAVE $48',
    popular: true,
  },
  {
    id: 'annual',
    name: '12 Months',
    label: 'Annual',
    price: '4.00',
    oldPrice: '8.00',
    totalPrice: 48,
    description: 'A simple annual plan with meaningful savings built in.',
    billingNote: '$48 billed every 12 months.',
    savings: 'SAVE $48',
  },
];

export const PREMIUM_FEATURES = [
  'Unlimited invoices, expenses and quotes',
  'Unlimited stock documents',
  'Unlimited clients and products',
  'Secure cloud data storage',
  'All premium features',
];

export function getPlanById(planId) {
  return PREMIUM_PLANS.find((plan) => plan.id === planId) ?? PREMIUM_PLANS[0];
}
