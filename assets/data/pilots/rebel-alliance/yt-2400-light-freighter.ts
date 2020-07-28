import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter',
  xws: 'yt2400lightfreighter',
  ffg: 5,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_YT-2400.png',
  pilots: [
    {
      name: '"Leebo"',
      caption: 'Dry-Witted Droid',
      initiative: 3,
      limited: 1,
      cost: 76,
      xws: 'leebo',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_78.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      shipAbility: {
        name: 'Sensor Blindspot',
        text:
          'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
      },
      slots: ['Missile', 'Gunner', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_78.jpg',
      ffg: 78,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Dash Rendar',
      caption: 'Hotshot Mercenary',
      initiative: 5,
      limited: 1,
      cost: 85,
      xws: 'dashrendar',
      ability: 'While you move, you ignore obstacles.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_77.png',
      shipAbility: {
        name: 'Sensor Blindspot',
        text:
          'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_77.jpg',
      ffg: 77,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Wild Space Fringer',
      initiative: 1,
      limited: 0,
      cost: 72,
      xws: 'wildspacefringer',
      text:
        'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_79.png',
      shipAbility: {
        name: 'Sensor Blindspot',
        text:
          'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
      },
      slots: ['Missile', 'Crew', 'Gunner', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_79.jpg',
      ffg: 79,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
