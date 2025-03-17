import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Championship',
      href: getPermalink('homes/schedule'),
    },
    {
      text: 'For Visitors',
      links: [
        {
          text: 'Location',
          href: getPermalink('homes/accommodation'),
        },
        {
          text: 'Airport Transfer',
          href: getPermalink('homes/transfer'),
        },
        {
          text: 'Sightseeings, leasure',
          href: getPermalink('homes/sightseeings'),
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
      href: getPermalink ('homes/contacts'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'Home Page', href: '/' },
        { text: 'Contacts', href: getPermalink('homes/contacts')},
      ]
    },
    {
      title: 'Championship',
      links: [
        { text: 'Participants', href: '/' },
        { text: 'Shedule', href: getPermalink ('/homes/schedule') },
      ],
    },
    {
      title: 'For Visitors',
      links: [
        { text: 'Location', href: getPermalink('homes/accommodation')},
        { text: 'Airport Transfer', href: getPermalink('homes/transfer')},
        { text: 'Leasure Time', href: getPermalink('homes/sightseeings') },
        ],
    },
    {
      title: 'Sponsors',
      links: [
        { text: 'Sponsore zone', href: '/homes/sponsoring' },
      ],
    },
  ],
  
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100063605214508&locale=en_EN' },
  ],
};
