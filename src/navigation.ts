import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Championship',
      href: '/',
    },
    {
      text: 'For Visitors',
      links: [
        {
          text: 'Location',
          href: getPermalink('homes/accommodation'),
        },
        {
          text: 'Transport',
          href: getPermalink('/'),
        },
        {
          text: 'Sightseeings, leasure',
          href: getPermalink('/'),
        },
        {
          text: 'FAQ',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: 'Sponsors',
      href: getPermalink ('/homes/sponsoring'),
    },    
    {
      text: 'Contacts',
      href: '/',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'Home Page', href: '/' },
        { text: 'Contacts', href: '/' },
      ]
    },
    {
      title: 'Championship',
      links: [
        { text: 'Participants', href: '/' },
        { text: 'Shedule', href: '/' },
      ],
    },
    {
      title: 'For Visitors',
      links: [
        { text: 'Accomodation', href: '/' },
        { text: 'Arena', href: '/' },
        { text: 'Transport', href: '/' },
        { text: 'Leasure Time', href: '/' },
        { text: 'FAQ', href: '/' },
      ],
    },
    {
      title: 'Sponsors',
      links: [
        { text: 'List of Sponsors', href: '/homes/sponsoring' },
        { text: 'Become a partner', href: '/homes/sponsoring' },
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
