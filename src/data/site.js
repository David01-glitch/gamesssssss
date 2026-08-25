// Single source of truth for business info + navigation.
// Contact details are used verbatim across the whole site.
export const SITE = {
  name: 'Game Time Guide',
  tagline: 'Indoor vs Outdoor Games',
  email: 'gametimeguide@gmail.com',
  phone: '(813) 564-2401',
  phoneHref: '+18135642401',
  address: '628 Bayshore Lane, Tampa, FL 33609, USA',
  addressParts: {
    line1: '628 Bayshore Lane',
    city: 'Tampa',
    region: 'FL',
    postalCode: '33609',
    country: 'US',
  },
  // Set VITE_SITE_URL to your real production domain before deploying.
  url:
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
    'https://main.d3qo2lelzu6w5v.amplifyapp.com',
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Indoor Games', to: '/indoor-games' },
  { label: 'Outdoor Games', to: '/outdoor-games' },
  { label: 'Game Guides', to: '/game-guides' },
  { label: 'Community', to: '/community' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]
