export interface Strategy {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: 'bullish' | 'bearish' | 'neutral' | 'hedging';
  riskLevel: 'low' | 'medium' | 'high';
  complexity: 'beginner' | 'intermediate' | 'advanced';
  iconPath: string;
  // Detailed content
  overview?: string;
  marketOutlook?: string;
  howToSetup?: string;
  payoffDiagram?: {
    description: string;
    maxProfit: string;
    maxLoss: string;
    breakeven: string;
    example?: string;
  };
  entering?: string;
  exiting?: string;
  timeDecay?: string;
  impliedVolatility?: string;
  adjusting?: {
    description: string;
    method: string;
    example?: string;
  };
  rolling?: {
    description: string;
    example?: string;
  };
  hedging?: {
    description: string;
    method: string;
    example?: string;
  };
  synthetic?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  stats?: {
    winRate: string;
    avgProfit: string;
    avgLoss: string;
    profitFactor: string;
  };
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
    iconPath: '/icons/long-call.svg',
    overview: 'Long call options give the buyer the right, but no obligation, to purchase shares of the underlying asset at the strike price on or before expiration. Because options are levered investments, each contract is equivalent to holding 100 shares of stock. An advantage of using a long call option is that less capital is required to own one contract compared to the cost of owning 100 shares of stock, and downside risk is limited to the option contract\'s cost.',
    marketOutlook: 'A long call is purchased when the buyer believes the price of the underlying asset will increase by at least the cost of the premium on or before the expiration date. Further out-of-the-money strike prices will be less expensive but have a lower probability of success. The further out-of-the-money the strike price, the more bullish the sentiment for the outlook of the underlying asset.',
    howToSetup: 'A long call position is initiated when a buyer purchases a call option contract. Calls are listed in an option chain and provide relevant information for every strike price and expiration available, including the bid-ask price. The cost to enter the trade is called the premium. Market participants consider multiple factors to assess the value of an option\'s premium, including the strike price relative to the stock price, time until expiration, and volatility.',
    payoffDiagram: {
      description: 'The payoff diagram for a long call is straightforward. The maximum risk is limited to the cost of the option. The profit potential is unlimited. To break even on the trade at expiration, the stock price must exceed the strike price by the cost of the long call option.',
      maxProfit: 'Unlimited',
      maxLoss: 'Premium paid for the option',
      breakeven: 'Strike price + premium paid',
      example: 'For example, if a long call option with a $100 strike price is purchased for $5.00, the maximum loss is defined at $500 and the profit potential is unlimited if the stock continues to rise. However, the underlying stock must be above $105 at expiration to realize a profit.'
    },
    entering: 'To enter a long call position, a buy-to-open (BTO) order is sent to the broker. The order is either filled at the asking price (market order) or at a specific price an investor is willing to pay (limit order). The call option purchase results in cash debited from the trading account.',
    exiting: 'There are multiple ways to exit a long call position. Anytime before expiration, a sell-to-close (STC) order can be entered, and the contract will be sold at the market or a limit price. The premium collected will be credited to the account. If the contract is sold for more premium than originally paid, a profit is realized. If the contract is sold for less premium than originally paid, a loss is realized. If the long call option is in-the-money (ITM) at expiration, the holder of the contract can choose to exercise the option and will receive 100 shares of stock at the strike price. If the long call option is out-of-the-money (OTM) at expiration, the contract will expire worthless and the full loss is realized.',
    timeDecay: 'Time remaining until expiration and implied volatility make up an option\'s extrinsic value and impact the premium price. All else being equal, options contracts with more time until expiration will have higher prices because there is more time for the underlying asset to experience price movement. As time until expiration decreases, the option price goes down. Therefore, time decay, or theta, works against options buyers.',
    impliedVolatility: 'Implied volatility reflects the possibility of future price movements. Higher implied volatility results in higher priced options because there is an expectation the price may move more than expected in the future. As implied volatility decreases, the option price goes down. Options buyers benefit when implied volatility increases before expiration.',
    adjusting: {
      description: 'Long call positions can be managed during a trade to minimize loss. A single-leg long call option can converted into a bull call debit spread.',
      method: 'If the stock price declines, a call option can be sold at a higher strike price to reduce the trade\'s risk. This decreases the overall cost of the original position and lowers the break-even price. However, the short call option limits the maximum profit potential to the spread width minus the debit paid.',
      example: 'For example, if a $100 call option was purchased for $5.00, a $105 call option could be sold. If the short call option collects $1.00 of credit, the maximum loss is reduced to -$400. The max profit, however, is now capped at $100 if the stock reverses and closes above $105 at expiration.'
    },
    rolling: {
      description: 'Long call positions can be adjusted to extend the time duration of the trade if the stock has not increased before expiration. The ability to roll the position into the future allows the trade more time to become profitable, but will come at a cost because more time equates to higher options prices.',
      example: 'For example, a $100 call option with a November expiration date could be sold and a $100 call option could be purchased for December. If the original position cost $5.00, and was sold for $2.00, the net loss on the original position is -$300 per contract. If the December option costs an additional $5.00, the overall debit of the position is now $8.00.'
    },
    hedging: {
      description: 'To hedge a long call, an investor may purchase a put with the same strike price and expiration date, thereby creating a long straddle.',
      method: 'If the underlying stock price falls below the strike price, the put will experience a gain in value and help offset the loss of the long call. However, this adds cost to the original trade and widens the break-even price.',
      example: 'For example, if the original long call had a $5.00 debit, and a long put is purchased for an additional $5.00, the risk increases to $1,000 and the break-even points are extended.'
    },
    synthetic: 'A synthetic long call combines long stock with a long put option at the entry price of the original long stock position. This creates a synthetic long call because the payoff diagram is similar to a single long call option. The maximum downside risk is limited to the long put option\'s strike price, and the profit potential is unlimited if the stock continues to rise.',
    faqs: [
      {
        question: 'What is a call option?',
        answer: 'A long call is a risk-defined, bullish options strategy. Buying a call option is an alternative to buying shares of stock or an ETF. Long call options give the buyer the right, but no obligation, to purchase shares of the underlying asset at the strike price on or before expiration. A long call option contract is equivalent to owning 100 shares of stock, but requires less capital to purchase. The maximum risk is limited to the contract\'s premium.'
      },
      {
        question: 'How do call options work?',
        answer: 'Call options are a levered alternative to buying stock or ETF shares. One call option contract controls 100 shares of stock. Holding a call option contract gives you the right to buy shares at the contract\'s strike price. Writing a call option obligates you to sell shares at the contract\'s strike price.'
      },
      {
        question: 'How to exercise a call option?',
        answer: 'Exercising a call option gives you the right to own 100 shares per contract at the option\'s strike price. For example, if you exercise a call option with a $50 strike price, you will purchase 100 shares at $50, regardless of the underlying\'s price. You must have enough funds in your account to take ownership of the stock. Contact your broker for exercise instructions.'
      },
      {
        question: 'How to calculate long call option profit?',
        answer: 'Long calls have unlimited profit potential. A long call option must be above the break even price at expiration to realize a profit. To calculate a long call option\'s break even price, add the contract\'s premium to the option\'s strike price. The option\'s cost is the max loss for the position.'
      }
    ],
    stats: {
      winRate: '65%',
      avgProfit: '$158',
      avgLoss: '$89',
      profitFactor: '1.52'
    }
  },
  {
    id: 'short-put-bullish',
    name: 'Short Put',
    slug: 'short-put',
    description: 'A single-leg, bullish options strategy with undefined risk and limited profit potential. Short puts are profitable if the underlying asset\'s price is above the strike price at expiration.',
    category: 'bullish',
    riskLevel: 'high',
    complexity: 'intermediate',
    iconPath: '/icons/short-put.svg',
    overview: 'Selling a naked put option is a levered alternative to buying shares of stock. Selling single options is considered "naked" because there is no risk protection if the stock moves against the position. Because options are levered instruments, each short put contract is equivalent to holding 100 shares of stock. Short put option positions are typically cash-secured, meaning the put option writer must have enough capital available in his or her account to cover the cost of 100 shares if stock is assigned.',
    marketOutlook: 'A short put is sold when the seller believes the price of the underlying asset will be above the strike price on or before the expiration date and/or implied volatility will decrease. The closer the strike price is to the underlying\'s price, the more credit will be received. Selling a put option can be used to enter a long position if the investor wishes to buy the underlying stock. Because selling options collects a premium, initiating a long position with a short put reduces the cost basis if the put is ultimately assigned to the option seller.',
    howToSetup: 'A short put position is initiated when a seller writes a put option contract. Put options are listed in an options chain and provide relevant information for every strike price and expiration available, including the bid and ask price. The credit received at trade entry is called the premium. Market participants consider multiple factors to assess the option premium\'s value, including the strike price relative to the stock price, time until expiration, and volatility.',
    payoffDiagram: {
      description: 'The payoff diagram for a short put represents the risk involved with selling naked options. Profit potential is limited to the amount of credit received when the put is sold. The risk is undefined until the stock reaches $0.',
      maxProfit: 'Premium received (limited)',
      maxLoss: 'Strike price - premium received (substantial)',
      breakeven: 'Strike price - premium received',
      example: 'For example, if a short put option with a strike price of $100 is sold for $5.00, the maximum profit potential is $500. The maximum loss is undefined below the break-even point. The strike price minus the premium collected equals the break-even price of $95. If the underlying stock price is below the break-even point at expiration, the position will result in a loss.'
    },
    entering: 'To enter a short put position, a sell-to-open (STO) order is sent to the broker. The order is either filled at the asking price (market order) or at the minimum price an investor is willing to receive (limit order). Once a put option is sold, cash is credited to the trading account. Because selling put options has considerable downside risk, the broker will typically require the account have enough money if the option is assigned. For example, if one put option is sold at the $100 strike price, the broker may require at least $10,000 of available funds in the account.',
    exiting: 'There are multiple ways to exit a short put position. Anytime before expiration, a buy-to-close (BTC) order can be entered, and the contract will be purchased at the market or limit price. The premium paid will be debited from the account. If the contract is purchased for more premium than initially collected, a loss is realized. If the contract is purchased for less premium than initially collected, a profit is realized. The buyer of the long put contract can choose to exercise the option at any time, and the seller is obligated to buy 100 shares at the strike price. If the short put option is in-the-money (ITM) at expiration, the option will automatically be assigned to the option seller. If the stock price is above the strike price at expiration, the option is out-of-the-money (OTM). The contract will expire worthless, and the seller will keep the entire premium initially collected.',
    timeDecay: 'Time remaining until expiration and implied volatility make up an option\'s extrinsic value and impact the premium price. All else being equal, options contracts with more time until expiration have higher prices because there is more time for the underlying asset to experience price movement. As time until expiration decreases, the option price goes down. Therefore, time decay, or theta, works in favor of put option sellers because an option\'s value will decrease as expiration approaches.',
    impliedVolatility: 'Implied volatility reflects the possibility of future price movements. Higher implied volatility results in higher option prices because there is an expectation the price may move more than expected in the future. As implied volatility decreases, a put option contract will lose value and the seller may purchase the contract for less money than it was sold. Options sellers benefit when implied volatility decreases before expiration.',
    adjusting: {
      description: 'Short put positions can be managed during a trade. A single-leg short put option can be adjusted to minimize risk.',
      method: 'If the position is challenged, a put option can be purchased at a lower strike price to convert the short put into a bull put credit spread. The long option defines the position\'s risk, but lowers the profit potential to the width of the spread minus the credit received.',
      example: 'For example, if a $100 put option is sold, a $90 put option can be purchased. If the long put costs $2.00, the max profit potential is reduced to $3.00. However, the maximum risk is defined at $700 if the underlying asset is below $90 at expiration.'
    },
    rolling: {
      description: 'If an investor wants to extend the trade, the short put option can be rolled out to a future expiration date. Rolling out the option requires buying-to-close (BTC) the short put and selling-to-open (STO) a new put option with the same strike price for a future date. Rolling the option should result in additional credit, which will widen the break-even price and increase the profit potential relative to the original position.',
      example: 'For example, if a short put with a $100 strike price has a May expiration date, the position could closed and reopened with a June expiration date. If the adjustment receives $2.00 of premium, the break-even point is extended to $93.'
    },
    hedging: {
      description: 'To hedge a short put, an investor may sell a call with the same strike price and expiration date, thereby creating a short straddle.',
      method: 'This will add additional credit and extend the break-even price above and below the centered strike price of the short straddle equal to the amount of premium collected. While this reduces cost basis, the risk is still undefined and potentially substantial.',
      example: 'For example, if the position is challenged, a call with a $100 strike price could be sold. If an additional $5.00 of credit is received, the max profit increases to $1,000 and the break-even price moves down to $90.'
    },
    synthetic: 'A synthetic short put combines long stock with a short call option at the strike price of the original long stock position. This creates a synthetic short put because the payoff diagram is similar to a single short put option. As with a naked short put, the expectation is price will rise before expiration. Selling the call will collect a premium, but the risk beyond the premium received is still unlimited if the stock continues to fall. The maximum profit potential is limited to the premium collected for the short call. If the stock closes above the strike price at expiration, the long stock will be covered when the short call is exercised, and the shares will offset.',
    faqs: [
      {
        question: 'What is a short put option?',
        answer: 'A short put is a bullish options strategy with undefined risk and limited profit potential. You receive a credit when opening a naked short put, which lowers your cost basis.'
      },
      {
        question: 'Is a short put bullish?',
        answer: 'Yes, short put options are bullish. You will profit if the underlying stock\'s price is above the short put strike at expiration.'
      },
      {
        question: 'Can I exit a short put before expiration?',
        answer: 'Yes, you can exit a short put at any time by buying back the option. If you buy the options for less than you sold it, you\'ll realize a profit of the difference. Short puts are typically profitable when the underlying stock\'s price increases and/or volatility decreases.'
      },
      {
        question: 'How to hedge a short put option?',
        answer: 'There are multiple ways to hedge a short put option. You can sell a short call to create a short straddle or short strangle. You could also buy an out-of-the-money long put option to create a risk-defined short put spread.'
      },
      {
        question: 'What is an example of a short put?',
        answer: 'You sell a short put when you\'re bullish and believe the stock will stay above a certain price. For example, if you think AAPL will be above $140 in two months, you could sell a put with a $140 strike price 60 days to expiration.'
      }
    ],
    stats: {
      winRate: '72%',
      avgProfit: '$95',
      avgLoss: '$285',
      profitFactor: '1.34'
    }
  },
  {
    id: 'covered-call-bullish',
    name: 'Covered Call',
    slug: 'covered-call',
    description: 'A covered call is an options strategy with undefined risk and limited profit potential that combines a long stock position with a short call option. Covered calls are primarily used by investors looking to generate income on long portfolio holdings while reducing the position\'s cost basis.',
    category: 'bullish',
    riskLevel: 'medium',
    complexity: 'beginner',
    iconPath: '/icons/covered-call.svg',
    overview: 'Covered calls are a natural bridge between stock investing and options. Because options are leveraged, each contract represents 100 shares of stock, so a covered call requires ownership of at least 100 shares of the underlying asset. The long shares of stock can be owned before selling the covered call, or the positions can be entered simultaneously by purchasing the shares and selling the covered call against the stock position.',
    marketOutlook: 'A covered call strategy is used if an investor is moderately bullish and plans to hold shares of stock in an asset for an extended length of time. The covered call will help generate income during the holding period and lowers the original position\'s cost basis.',
    howToSetup: 'A covered call consists of selling a call against shares of long stock. Typically, covered calls are sold out-of-the-money above the current price of the underlying asset. Calls that are sold closer to the stock price will result in more credit received but have a higher probability of being in-the-money at expiration.\n\nCovered calls do not eliminate downside risk if the asset drops in price, but every covered call sold adds credit to the account, thereby reducing the overall cost of holding the long stock position.',
    payoffDiagram: {
      description: 'Selling a covered call limits the profit potential and does not eliminate the downside risk. However, it does help to reduce the risk by the price of the premium received.',
      maxProfit: 'Limited to strike price + premium received',
      maxLoss: 'Substantial (stock price can go to zero minus premium received)',
      breakeven: 'Stock purchase price - premium received',
      example: 'For example, if stock is purchased at $100 and a call option is sold at the $105 strike price for $5.00, the original position\'s cost is now reduced by $5.00. Therefore, the cost basis and break-even point of the long stock position is now $95. If the stock closes above $105 at expiration, a profit of $1,000 will be realized per contract because the stock gained $5.00 per share ($500), plus the credit received from selling the covered call option ($500).'
    },
    entering: 'A covered call requires ownership of at least 100 shares of stock. If the stock is already owned, a call option may be sold at a higher strike price than the current stock price. A covered call can also be sold at the time the long stock is purchased.',
    exiting: 'There are two scenarios for exiting a covered call at expiration, depending on where the stock price is relative to the strike price of the call option sold. If the stock price is below the strike price at expiration, the call option will expire worthless, and the option premium collected is the amount profited from the trade. At this point, a new covered call position may be initiated for a future expiration date.\n\nIf the stock price is above the strike price of the short call option at expiration, the long stock is "called away" at the strike price. If the short call option is in-the-money at expiration, but the investor does not want to sell the position, the trade can be rolled out to a later expiration date by buying back the short call and selling a new contract.',
    timeDecay: 'Time remaining until expiration and implied volatility make up an option\'s extrinsic value and impact the price of the premium. Short call options contracts with more time until expiration will have higher prices because there is more time for the underlying asset to experience price movement. As the time until expiration decreases, the price of the call option goes down.\n\nCovered calls with longer-dated expirations will collect more premium when the trade is entered than those with shorter time duration. Time decay, or theta, works in favor of the covered call writer.',
    impliedVolatility: 'Implied volatility reflects the possibility of future price movements. Higher implied volatility results in a higher price of short call options because there is an expectation the price will move more in the future. Selling covered calls with higher implied volatility will receive more credit at trade entry, but the underlying asset is expected to have more price fluctuations.',
    adjusting: {
      description: 'There are multiple ways to adjust the position of a covered call if the underlying asset\'s price moves up or down before expiration. A covered call is either in-the-money or out-of-the-money at expiration, and adjustments can be made to address each scenario.',
      method: 'If the stock is above the short call strike price at expiration, a decision will need to be made. If no action is taken, the short call will be exercised and the broker will automatically sell 100 shares of stock per options contract at the option\'s strike price. If the covered call writer does not wish to exercise, the call option can be rolled out to the next expiration month.\n\nIf the underlying price has moved sideways or down before expiration and the stock price stayed below the short call, the original covered call will expire worthless. At this point, a new position may be opened for a future expiration date at the same strike price or a lower strike price.',
      example: 'Most assignments do not occur until the last week of expiration. One exception that needs to be accounted for is dividend payments. If the underlying asset is about to pay a monthly or quarterly dividend, the short call is at greater risk of assignment if it is in-the-money.'
    },
    rolling: {
      description: 'Covered calls can be rolled up or down before expiration. The short call option can be rolled down to a lower strike price within the same expiration month if the underlying asset has traded sideways or dropped in price.',
      example: 'If the stock has moved above the strike price and the investor wishes to continue to hold the underlying stock and does not want the position called away, the covered call can be purchased and a new position sold at a later date with the same strike price or a different strike price.'
    },
    hedging: {
      description: 'Covered calls can be hedged by rolling down the short call option as price decreases. To roll down the option, repurchase the short call (for less money than it was sold) and resell a call option closer to the stock price.',
      method: 'Another strategy to consider is to purchase a long put option somewhere below the short call option. Long put options give the holder the right to sell shares of stock at the strike price.',
      example: 'For example, if long stock is purchased at $100 and a covered call is sold at $105, a long put option could be purchased at $90 and guarantee the opportunity to sell stock at $90. Buying the put option will cost money and therefore offset some or all of the credit received for selling the covered call.'
    },
    synthetic: 'A synthetic covered call, also known as a poor man\'s covered call, is a cost-effective way to gain long exposure to an asset while still selling covered calls against the long call option position to lower the overall cost basis.\n\nA synthetic covered call has two parts. The first part consists of buying a deep in-the-money call with a far-dated expiration (also known as LEAPS). This replicates owning shares of stock but at a much lower capital outlay than actually owning the stock.\n\nThe second part of the synthetic covered call is to sell short-term call options against the position. Selling short-term calls throughout the longer expiration period will continually receive credit and help offset the cost of the long call position.',
    faqs: [
      {
        question: 'What is a covered call?',
        answer: 'A covered call is a popular options strategy used to generate income. To enter a covered call, you sell a call against shares of long stock. If an investor is moderately bullish and plans to hold shares of stock in an asset for an extended length of time, selling a covered call will bring in premium during the holding period to lower the original equity position\'s cost basis.'
      },
      {
        question: 'How do covered calls work?',
        answer: 'A covered call consists of selling a call against shares of long stock. Typically, covered calls are sold out-of-the-money above the current price of the underlying asset. If you own at least 100 shares of stock, you can sell a covered call using the equity position as a collateral. If the covered call expires out-of-the-money, you\'ll keep the full premium. In-the-money calls will automatically be assigned at expiration, and you\'re required to sell the shares at the strike price.'
      },
      {
        question: 'What is an example of a covered call?',
        answer: 'A covered call requires ownership of at least 100 shares of stock. For example, if you own 100 shares of AAPL stock at $150 a share, you could choose to sell a covered call with a $150 strike price.'
      },
      {
        question: 'What is the downside of covered calls?',
        answer: 'While covered calls reduce the stock position\'s cost basis, they do not eliminate downside risk. If your call option expires in-the-money, you are obligated to accept assignment and sell your stock shares at the strike price. You can always roll out an ITM covered call to a later expiration date if you do not wish to sell the shares.'
      },
      {
        question: 'What is the best strategy for selling covered calls?',
        answer: 'There are many factors to consider when selling a covered call. Calls sold closer to the stock price will receive more credit but have a higher probability of being in-the-money at expiration. Likewise, calls with longer days to expiration have higher premiums.'
      }
    ],
    stats: {
      winRate: '72%',
      avgProfit: '$85',
      avgLoss: '$123',
      profitFactor: '2.1'
    }
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
    slug: 'covered-call-duplicate',
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