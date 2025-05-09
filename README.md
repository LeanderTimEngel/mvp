# Personalized Children's Story Generator

An AI-powered web application that generates personalized audio stories for children aged 4-10. Parents can input their child's details and preferences to create unique, engaging stories that feature their child as the main character.

## Features

- Personalized story generation using OpenAI's GPT-4
- Text-to-speech conversion for audio stories
- Email delivery of stories and audio files
- Age-appropriate content
- Simple and intuitive user interface
- Multiple pricing tiers including Ultra Premium options
- Secure payment processing with Stripe
- Contact form for customer support
- Beautiful, responsive design with modern UI components

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- OpenAI API key
- Stripe API keys
- Resend API key for email delivery

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mvp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   STRIPE_SECRET_KEY=your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for story generation
- `STRIPE_SECRET_KEY`: Your Stripe secret key for payment processing
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key for client-side integration
- `RESEND_API_KEY`: Your Resend API key for email delivery

## Technologies Used

- Next.js 15.3.0
- React 19.1.0
- TypeScript
- Tailwind CSS 4
- OpenAI API
- Stripe for payments
- Resend for email delivery
- React Hook Form with Zod validation
- Jest for testing
- ESLint and Prettier for code quality

## Project Structure

```
src/
├── app/              # Next.js app directory (routes and pages)
├── components/       # Reusable UI components
│   ├── __tests__/   # Component tests
│   └── ...          # Various UI components
└── lib/             # Utility functions and constants
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
