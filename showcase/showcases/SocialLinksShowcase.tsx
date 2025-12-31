import React from 'react';
import { SocialLinks } from '../../src/components/SocialLinks';
import { ShowcaseSection } from '../layout/ShowcaseSection';

const socialLinksData = [
  { platform: 'linkedin', url: 'https://linkedin.com/' },
  { platform: 'github', url: 'https://www.github.com/' },
  { platform: 'instagram', url: 'https://www.instagram.com/' },
  { platform: 'youtube', url: 'https://youtube.com/' },
  { platform: 'facebook', url: 'https://facebook.com/' },
  { platform: 'x', url: 'https://x.com/' },
  { platform: 'pinterest', url: 'https://pinterest.com/' },
  { platform: 'spotify', url: 'https://spotify.com/' },
  { platform: 'telegram', url: 'https://telegram.org/' },
];

export const SocialLinksShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Social Links"
      description="Social media link components with vertical and horizontal orientations"
      id="social-links"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary">Vertical Orientation</h3>
          <div className="flex justify-center">
            <SocialLinks
              orientation="vertical"
              links={socialLinksData}
            />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary">Horizontal Orientation</h3>
          <div className="flex justify-center">
            <SocialLinks
              orientation="horizontal"
              links={socialLinksData}
            />
          </div>
        </div>
      </div>
    </ShowcaseSection>
  );
};

