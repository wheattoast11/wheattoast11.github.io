import React from 'react';
import { m, useAnimation } from 'framer-motion';

const platforms = [
  { name: 'terminals', class: 'platform-terminals', font: 'Space Grotesk' },
  { name: 'radical', class: 'platform-radical', font: 'Space Grotesk' },
  { name: 'pathfinder', class: 'platform-pathfinder', font: 'Audiowide' },
  { name: 'wuji', class: 'platform-wuji', font: 'Cormorant Garamond' },
  { name: 'boom', class: 'platform-boom', font: 'Space Grotesk' },
  { name: 'journey', class: 'platform-journey', font: 'Space Grotesk' }
];

const PlatformMarquee = () => {
  const controls = useAnimation();

  const handleMouseEnter = async () => {
    await controls.start({ opacity: 0.9, scale: 1.05 });
  };

  const handleMouseLeave = async () => {
    await controls.start({ opacity: 0.7, scale: 1 });
  };

  return (
    <div className="platform-marquee-container">
      <m.div 
        className="platform-marquee"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="platform-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="platform-set">
              {platforms.map((platform, index) => (
                <m.span
                  key={`${platform.name}-${index}`}
                  className={`platform-name ${platform.class}`}
                  style={{ fontFamily: platform.font }}
                  animate={controls}
                  initial={{ opacity: 0.7, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={handleMouseEnter}
                  onHoverEnd={handleMouseLeave}
                >
                  {platform.name}
                  <m.div
                    className="platform-underline"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: 'currentColor',
                      originX: 0
                    }}
                  />
                </m.span>
              ))}
            </div>
          ))}
        </div>
      </m.div>
    </div>
  );
};

export default PlatformMarquee; 