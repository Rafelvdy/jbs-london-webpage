'use client';

import MobileNavBar from '@/components/MobileNavBar';
import DesktopNavBar from '@/components/DesktopNavBar';
import { useMediaQuery, useIsClient } from 'usehooks-ts';

export default function NavBar() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isClient = useIsClient();

  if (!isClient) {
    // First paint (server + initial client render): identical markup on
    // both sides via CSS toggling, so there is no hydration mismatch and
    // no visible flash. Both components exist in the DOM briefly here.
    return (
      <>
        <div className="lg:hidden">
          <MobileNavBar />
        </div>
        <div className="hidden lg:block">
          <DesktopNavBar />
        </div>
      </>
    );
  }

  // After mount: usehooks-ts has measured the real viewport, so only the
  // correct component is rendered and the other is fully unmounted.
  return isDesktop ? <DesktopNavBar /> : <MobileNavBar />;
}