export interface Office {
  name: string;
  address: string[];
  phone: string;
  phoneHref: string;
  directionsUrl: string;
  mapSrc: string;
}

export const offices: Office[] = [
  {
    name: 'Ranchi (Head Office)',
    address: [
      '3rd Floor, Sunita Complex, Shivdayal Nagar,',
      'Argora, Bypass Rd, opposite V Mart,',
      'Harmu Housing Colony, Harmu, Ranchi, Jharkhand 834002'
    ],
    phone: '+91 81475 23253',
    phoneHref: 'tel:+918147523253',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sattva+Design+Consultancy+Sunita+Complex+Argora+Harmu+Ranchi',
    mapSrc:
      'https://maps.google.com/maps?q=Sattva%20Design%20Consultancy%2C%20Sunita%20Complex%2C%20Argora%20Bypass%20Rd%2C%20Harmu%2C%20Ranchi%2C%20Jharkhand%20834002&output=embed'
  },
  {
    name: 'Medininagar (Branch Office)',
    address: [
      'Shop no-14, 1st Floor Zila Parishad Market Kutchery,',
      'Railway crossing Road, Jail Hata Rd,',
      'Medininagar, Jharkhand 822101'
    ],
    phone: '+91 7209567678',
    phoneHref: 'tel:+917209567678',
    directionsUrl: 'https://www.google.com/maps/place/Sattva+Design+Consultancy/@24.0410025,84.0672999,17z/',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7673460244392!2d84.06729989999999!3d24.0410025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c777187960e53%3A0x97413753729d2041!2sSattva%20Design%20Consultancy!5e0!3m2!1sen!2sin!4v1709052136037!5m2!1sen!2sin'
  }
];
