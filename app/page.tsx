import { Hero } from '@/components/home/Hero';

/**
 * Root page ("/") for the portfolio.
 * Previously the homepage component lived under a custom folder, which broke the
 * Next.js App Router convention. Adding this file restores the expected
 * `app/page.tsx` entry point, fixing the 404 on the deployed site.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      {/* You can add additional homepage sections here if needed */}
    </>
  );
}
