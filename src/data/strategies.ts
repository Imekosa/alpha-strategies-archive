export interface Strategy {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'bullish' | 'bearish' | 'neutral' | 'hedging';
  riskLevel: 'low' | 'medium' | 'high';
  complexity: 'beginner' | 'intermediate' | 'advanced';
  iconPath: string;
}

export const strategies: Strategy[] = [
  // Bullish Strategies
  {
    id: 'long-call-bullish',
    name: 'Long Call',
    slug: 'long-call',
    description: 'A single-leg, risk-defined, bullish options strategy. Buying a call option is a levered alternative to buying shares of stock.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'beginner',
    iconPath: '/icons/long-call.svg'
  },
  {
    id: 'short-put-bullish',
    name: 'Short Put',
    slug: 'short-put',
    description: 'A single-leg, undefined risk, bullish options strategy. Selling a put option generates premium income with substantial downside risk.',
    category: 'bullish',
    riskLevel: 'high',
    complexity: 'intermediate',
    iconPath: '/icons/short-put.svg'
  },
  {
    id: 'covered-call-bullish',
    name: 'Covered Call',
    slug: 'covered-call',
    description: 'An options strategy with undefined risk and limited profit potential that combines a long stock position with a short call option.',
    category: 'bullish',
    riskLevel: 'low',
    complexity: 'beginner',
    iconPath: '/icons/covered-call.svg'
  },
  {
    id: 'protective-put',
    name: 'Protective Put',
    slug: 'protective-put',
    description: 'A risk management strategy that combines a long stock position with a long put option to limit downside risk.',
    category: 'bullish',
    riskLevel: 'low',
    complexity: 'beginner',
    iconPath: '/icons/protective-put.svg'
  },
  {
    id: 'leaps',
    name: 'LEAPS',
    slug: 'leaps',
    description: 'Long-term equity anticipation securities are options with expiration dates longer than one year.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'intermediate',
    iconPath: '/icons/leaps.svg'
  },
  {
    id: 'bull-call-spread-bullish',
    name: 'Bull Call Spread',
    slug: 'bull-call-debit-spread',
    description: 'A multi-leg, risk-defined, bullish strategy with limited profit potential that involves buying and selling call options.',
    category: 'bullish',
    riskLevel: 'low',
    complexity: 'intermediate',
    iconPath: '/icons/bull-call-spread.svg'
  },
  {
    id: 'bull-put-spread-bullish',
    name: 'Bull Put Spread',
    slug: 'bull-put-credit-spread',
    description: 'A multi-leg, risk-defined, bullish strategy that involves selling a put option and buying a lower strike put.',
    category: 'bullish',
    riskLevel: 'low',
    complexity: 'intermediate',
    iconPath: '/icons/bull-put-spread.svg'
  },
  {
    id: 'put-calendar',
    name: 'Put Calendar',
    slug: 'put-calendar-spread',
    description: 'A neutral-to-bullish strategy that involves selling a short-term put and buying a longer-term put at the same strike.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/put-calendar.svg'
  },
  {
    id: 'strap',
    name: 'Strap',
    slug: 'strap',
    description: 'A bullish volatility strategy that involves buying two calls and one put at the same strike price.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/strap.svg'
  },
  {
    id: 'put-diagonal',
    name: 'Put Diagonal',
    slug: 'put-diagonal-spread',
    description: 'A strategy that involves selling a short-term put and buying a longer-term put at different strike prices.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/put-diagonal.svg'
  },
  {
    id: 'put-ratio',
    name: 'Put Ratio',
    slug: 'put-ratio-spread',
    description: 'A bullish strategy that involves buying puts and selling more puts at a lower strike price.',
    category: 'bullish',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/put-ratio.svg'
  },
  {
    id: 'call-backspread',
    name: 'Call Backspread',
    slug: 'call-backspread',
    description: 'A bullish volatility strategy that involves selling calls and buying more calls at a higher strike.',
    category: 'bullish',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/call-backspread.svg'
  },
  {
    id: 'stock-repair',
    name: 'Stock Repair',
    slug: 'stock-repair',
    description: 'A strategy used to repair a losing stock position by selling calls and buying calls at a higher strike.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'intermediate',
    iconPath: '/icons/stock-repair.svg'
  },

  // Bearish Strategies (from third tab)
  {
    id: 'long-put-bearish',
    name: 'Long Put',
    slug: 'long-put',
    description: 'A single-leg, risk-defined, bearish options strategy. Buying a put option is a levered alternative to shorting shares of stock.',
    category: 'bearish',
    riskLevel: 'medium',
    complexity: 'beginner',
    iconPath: '/icons/long-put.svg'
  },
  {
    id: 'short-call-bearish',
    name: 'Short Call',
    slug: 'short-call',
    description: 'A single-leg, unlimited risk, bearish options strategy. Selling a call option generates premium income but has unlimited upside risk.',
    category: 'bearish',
    riskLevel: 'high',
    complexity: 'intermediate',
    iconPath: '/icons/short-call.svg'
  },
  {
    id: 'covered-put',
    name: 'Covered Put',
    slug: 'covered-put',
    description: 'A bearish strategy that combines a short stock position with a short put option.',
    category: 'bearish',
    riskLevel: 'high',
    complexity: 'intermediate',
    iconPath: '/icons/covered-put.svg'
  },
  {
    id: 'bear-call-spread-bearish',
    name: 'Bear Call Spread',
    slug: 'bear-call-credit-spread',
    description: 'A multi-leg, risk-defined, bearish strategy that involves selling a call option and buying a higher strike call.',
    category: 'bearish',
    riskLevel: 'low',
    complexity: 'intermediate',
    iconPath: '/icons/bear-call-spread.svg'
  },
  {
    id: 'bear-put-spread-bearish',
    name: 'Bear Put Spread',
    slug: 'bear-put-debit-spread',
    description: 'A multi-leg, risk-defined, bearish strategy that involves buying a put option and selling a lower strike put.',
    category: 'bearish',
    riskLevel: 'low',
    complexity: 'intermediate',
    iconPath: '/icons/bear-put-spread.svg'
  },
  {
    id: 'call-calendar',
    name: 'Call Calendar',
    slug: 'call-calendar-spread',
    description: 'A neutral-to-bearish strategy that involves selling a short-term call and buying a longer-term call.',
    category: 'bearish',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/call-calendar.svg'
  },
  {
    id: 'call-diagonal',
    name: 'Call Diagonal',
    slug: 'call-diagonal-spread',
    description: 'A strategy that involves selling a short-term call and buying a longer-term call at different strikes.',
    category: 'bearish',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/call-diagonal.svg'
  },
  {
    id: 'call-ratio',
    name: 'Call Ratio',
    slug: 'call-ratio-spread',
    description: 'A bearish strategy that involves buying calls and selling more calls at a higher strike price.',
    category: 'bearish',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/call-ratio.svg'
  },
  {
    id: 'put-backspread',
    name: 'Put Backspread',
    slug: 'put-backspread',
    description: 'A bearish volatility strategy that involves selling puts and buying more puts at a lower strike.',
    category: 'bearish',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/put-backspread.svg'
  },

  // Neutral Strategies (from fourth tab)
  {
    id: 'long-straddle',
    name: 'Long Straddle',
    slug: 'long-straddle',
    description: 'A volatility strategy that involves buying both a call and put at the same strike price.',
    category: 'neutral',
    riskLevel: 'medium',
    complexity: 'intermediate',
    iconPath: '/icons/long-straddle.svg'
  },
  {
    id: 'short-straddle-neutral',
    name: 'Short Straddle',
    slug: 'short-straddle',
    description: 'A multi-leg, undefined risk, neutral strategy that involves selling both a call and put at the same strike price.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/short-straddle.svg'
  },
  {
    id: 'long-strangle',
    name: 'Long Strangle',
    slug: 'long-strangle',
    description: 'A volatility strategy that involves buying a call and put at different strike prices.',
    category: 'neutral',
    riskLevel: 'medium',
    complexity: 'intermediate',
    iconPath: '/icons/long-strangle.svg'
  },
  {
    id: 'short-strangle-neutral',
    name: 'Short Strangle',
    slug: 'short-strangle',
    description: 'A multi-leg, undefined risk, neutral strategy that involves selling a call and put at different strike prices.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/short-strangle.svg'
  },
  {
    id: 'iron-condor-neutral',
    name: 'Iron Condor',
    slug: 'iron-condor',
    description: 'A multi-leg, risk-defined, neutral strategy with limited profit potential that combines a bear call and bull put spread.',
    category: 'neutral',
    riskLevel: 'low',
    complexity: 'advanced',
    iconPath: '/icons/iron-condor.svg'
  },
  {
    id: 'reverse-condor',
    name: 'Reverse Condor',
    slug: 'reverse-iron-condor',
    description: 'A volatility strategy that profits from large price movements in either direction.',
    category: 'neutral',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/reverse-condor.svg'
  },
  {
    id: 'iron-butterfly-neutral',
    name: 'Iron Butterfly',
    slug: 'iron-butterfly',
    description: 'A multi-leg, risk-defined, neutral strategy that combines a short straddle with protective wings.',
    category: 'neutral',
    riskLevel: 'low',
    complexity: 'advanced',
    iconPath: '/icons/iron-butterfly.svg'
  },
  {
    id: 'reverse-butterfly',
    name: 'Reverse Butterfly',
    slug: 'reverse-iron-butterfly',
    description: 'A volatility strategy that profits from large price movements away from the center strike.',
    category: 'neutral',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/reverse-butterfly.svg'
  },
  {
    id: 'call-butterfly',
    name: 'Call Butterfly',
    slug: 'call-butterfly',
    description: 'A neutral strategy that involves buying calls at two strikes and selling two calls at a middle strike.',
    category: 'neutral',
    riskLevel: 'low',
    complexity: 'advanced',
    iconPath: '/icons/call-butterfly.svg'
  },
  {
    id: 'put-butterfly',
    name: 'Put Butterfly',
    slug: 'put-butterfly',
    description: 'A neutral strategy that involves buying puts at two strikes and selling two puts at a middle strike.',
    category: 'neutral',
    riskLevel: 'low',
    complexity: 'advanced',
    iconPath: '/icons/put-butterfly.svg'
  },
  {
    id: 'strap-neutral',
    name: 'Strap',
    slug: 'strap',
    description: 'A bullish volatility strategy that involves buying two calls and one put at the same strike price.',
    category: 'neutral',
    riskLevel: 'medium',
    complexity: 'advanced',
    iconPath: '/icons/strap.svg'
  },
  {
    id: 'call-ratio-neutral',
    name: 'Call Ratio',
    slug: 'call-ratio-spread',
    description: 'A bearish strategy that involves buying calls and selling more calls at a higher strike price.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/call-ratio.svg'
  },
  {
    id: 'put-ratio-neutral',
    name: 'Put Ratio',
    slug: 'put-ratio-spread',
    description: 'A bullish strategy that involves buying puts and selling more puts at a lower strike price.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/put-ratio.svg'
  },
  {
    id: 'call-backspread-neutral',
    name: 'Call Backspread',
    slug: 'call-backspread',
    description: 'A bullish volatility strategy that involves selling calls and buying more calls at a higher strike.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/call-backspread.svg'
  },
  {
    id: 'put-backspread-neutral',
    name: 'Put Backspread',
    slug: 'put-backspread',
    description: 'A bearish volatility strategy that involves selling puts and buying more puts at a lower strike.',
    category: 'neutral',
    riskLevel: 'high',
    complexity: 'advanced',
    iconPath: '/icons/put-backspread.svg'
  },

  // Hedging Strategies (from fifth tab)
  {
    id: 'long-call-hedging',
    name: 'Long Call',
    slug: 'long-call',
    description: 'A single-leg, risk-defined, bullish options strategy. Buying a call option is a levered alternative to buying shares of stock.',
    category: 'hedging',
    riskLevel: 'medium',
    complexity: 'beginner',
    iconPath: '/icons/long-call.svg'
  },
  {
    id: 'long-put-hedging',
    name: 'Long Put',
    slug: 'long-put',
    description: 'A single-leg, risk-defined, bearish options strategy. Buying a put option is a levered alternative to shorting shares of stock.',
    category: 'hedging',
    riskLevel: 'medium',
    complexity: 'beginner',
    iconPath: '/icons/long-put.svg'
  },
  {
    id: 'covered-call-hedging',
    name: 'Covered Call',
    slug: 'covered-call',
    description: 'An options strategy with undefined risk and limited profit potential that combines a long stock position with a short call option.',
    category: 'hedging',
    riskLevel: 'low',
    complexity: 'beginner',
    iconPath: '/icons/covered-call.svg'
  },
  {
    id: 'covered-put-hedging',
    name: 'Covered Put',
    slug: 'covered-put',
    description: 'A bearish strategy that combines a short stock position with a short put option.',
    category: 'hedging',
    riskLevel: 'high',
    complexity: 'intermediate',
    iconPath: '/icons/covered-put.svg'
  },
  {
    id: 'protective-put-hedging',
    name: 'Protective Put',
    slug: 'protective-put',
    description: 'A risk management strategy that combines a long stock position with a long put option to limit downside risk.',
    category: 'hedging',
    riskLevel: 'low',
    complexity: 'beginner',
    iconPath: '/icons/protective-put.svg'
  },
  {
    id: 'collar-hedging',
    name: 'Collar',
    slug: 'collar-strategy',
    description: 'A risk management strategy that uses a protective put and covered call to limit both upside and downside risk.',
    category: 'hedging',
    riskLevel: 'low',
    complexity: 'intermediate',
    iconPath: '/icons/collar.svg'
  },
  {
    id: 'reversal',
    name: 'Reversal',
    slug: 'reversal',
    description: 'An arbitrage strategy that involves combining a synthetic short stock with a long stock position.',
    category: 'hedging',
    riskLevel: 'low',
    complexity: 'advanced',
    iconPath: '/icons/reversal.svg'
  },
  {
    id: 'stock-repair-hedging',
    name: 'Stock Repair',
    slug: 'stock-repair',
    description: 'A strategy used to repair a losing stock position by selling calls and buying calls at a higher strike.',
    category: 'hedging',
    riskLevel: 'medium',
    complexity: 'intermediate',
    iconPath: '/icons/stock-repair.svg'
  }
];

export const getStrategiesByCategory = (category: string) => {
  return strategies.filter(s => s.category === category);
};

export const getStrategyBySlug = (slug: string) => {
  return strategies.find(s => s.slug === slug);
};