'use client';

import HeroMobile from '@/components/heroMobile';
import HeroDesktop from '@/components/heroDesktop';
import { useMediaQuery, useIsClient } from 'usehooks-ts';

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isClient = useIsClient();

  if (!isClient) {
    // First paint (server + initial client render): identical markup on
    // both sides via CSS toggling, so there is no hydration mismatch and
    // no visible flash. Both components exist in the DOM briefly here.
    return (
      <>
        <div className="lg:hidden">
          <HeroMobile />
        </div>
        <div className="hidden lg:block">
          <HeroDesktop />
        </div>
      </>
    );
  }

  // After mount: usehooks-ts has measured the real viewport, so only the
  // correct component is rendered and the other is fully unmounted.
  return isDesktop ? <HeroDesktop /> : <HeroMobile />;
}