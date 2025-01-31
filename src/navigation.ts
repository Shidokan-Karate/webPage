import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Championship',
      href: '#',
    },
    {
      text: 'For Visitors',
      links: [
        {
          text: 'Accomodation for Participants',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Arena',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Transport',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Sightseeings, leasure',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'FAQ',
          href: getPermalink('/landing/pre-launch'),
        },
      ],
    },
    {
      text: 'Sponsors',
      href: '#',
    },    
    {
      text: 'Contacts',
      href: '#',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100063605214508&locale=en_EN' },
  ],
};
