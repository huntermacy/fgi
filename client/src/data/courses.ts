export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface Module {
  id: string;
  title: string;
  lesson: string;
  quiz: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: "intro-to-investing",
    title: "Intro to Investing",
    description: "Learn the basics of investing, budgeting, and building wealth.",
    modules: [
      {
        id: "compound-interest",
        title: "Understanding Compound Interest",
        lesson: "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. It's often called 'interest on interest' and can significantly increase your investment returns over time. For example, if you invest $1,000 at a 5% annual interest rate, after one year you'll have $1,050. In the second year, you'll earn interest on $1,050, not just the original $1,000.",
        quiz: [
          {
            question: "What is compound interest?",
            options: [
              "A one-time return on investment",
              "Earning interest on interest",
              "Losing money over time",
              "A type of bank account"
            ],
            answer: 1
          },
          {
            question: "Why is compound interest powerful?",
            options: [
              "It's guaranteed by the government",
              "It grows your money exponentially over time",
              "It's risk-free",
              "It's only available to wealthy investors"
            ],
            answer: 1
          },
          {
            question: "What's the 'Rule of 72' used for?",
            options: [
              "Calculating tax deductions",
              "Estimating how long it takes to double your money",
              "Determining credit scores",
              "Setting interest rates"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "diversification",
        title: "The Power of Diversification",
        lesson: "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio. The rationale behind this technique is that a portfolio constructed of different kinds of investments will, on average, yield higher returns and pose a lower risk than any individual investment found within the portfolio.",
        quiz: [
          {
            question: "What is diversification?",
            options: [
              "Putting all your money in one stock",
              "Spreading investments across different assets",
              "Only investing in government bonds",
              "Buying the same stock multiple times"
            ],
            answer: 1
          },
          {
            question: "What is the main benefit of diversification?",
            options: [
              "Guaranteed returns",
              "Reduced risk",
              "Higher interest rates",
              "Faster growth"
            ],
            answer: 1
          },
          {
            question: "Which of these is NOT a way to diversify?",
            options: [
              "Investing in different industries",
              "Investing in different countries",
              "Investing in different asset classes",
              "Investing in only one company"
            ],
            answer: 3
          }
        ]
      }
    ]
  }
]; 