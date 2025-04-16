# Personalized Children's Story Generator

An AI-powered web application that generates personalized audio stories for children aged 4-10. Parents can input their child's details and preferences to create unique, engaging stories that feature their child as the main character.

## Features

- Personalized story generation using OpenAI's GPT-3.5
- Text-to-speech conversion for audio stories
- Email delivery of stories and audio files
- Age-appropriate content
- Simple and intuitive user interface

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- OpenAI API key
- SendGrid API key and verified sender email

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personalized-story-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM_EMAIL=your_verified_sender_email@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for story generation and text-to-speech
- `SENDGRID_API_KEY`: Your SendGrid API key for email delivery
- `SENDGRID_FROM_EMAIL`: Your verified sender email address for SendGrid

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- SendGrid
- React Hook Form
- Zod

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
