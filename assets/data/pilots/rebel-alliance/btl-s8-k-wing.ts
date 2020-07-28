import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTL-S8 K-wing',
  xws: 'btls8kwing',
  ffg: 30,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_K-wing.png',
  pilots: [
    {
      name: 'Esege Tuketu',
      caption: 'Selfless Hero',
      initiative: 3,
      limited: 1,
      cost: 44,
      xws: 'esegetuketu',
      ability:
        'While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_63.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Crew',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_63.jpg',
      ffg: 63,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Miranda Doni',
      caption: 'Heavy Hitter',
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'mirandadoni',
      ability:
        'While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_62.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Crew',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_62.jpg',
      ffg: 62,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Warden Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 38,
      xws: 'wardensquadronpilot',
      text:
        "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_64.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Gunner',
        'Crew',
        'Device',
        'Device',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_64.jpg',
      ffg: 64,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
