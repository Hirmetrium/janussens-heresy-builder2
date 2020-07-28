import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Resistance Transport',
  xws: 'resistancetransport',
  size: 'Small',
  dial: [
    '0OR',
    '1AR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1DR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Cova Nell',
      xws: 'covanell',
      initiative: 4,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability:
        'While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.',
      slots: [
        'Talent',
        'Tech',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 38,
      ffg: 569,
      caption: 'Evacuation Escort',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/a9ae63785f4cadaa28a74858ff1d1bc4.png',
    },
    {
      name: 'Pammich Nerro Goode',
      xws: 'pammichnerrogoode',
      initiative: 3,
      limited: 1,
      caption: "D'Qar Dispatcher",
      hyperspace: true,
      epic: true,
      ability:
        'While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.',
      slots: [
        'Tech',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 36,
      ffg: 570,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/9d7dd5d0851911412dd5c86603a0ea91.png',
    },
    {
      name: 'Nodin Chavdri',
      xws: 'nodinchavdri',
      initiative: 2,
      limited: 1,
      hyperspace: true,
      epic: true,
      ability:
        'After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.',
      slots: [
        'Tech',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 36,
      ffg: 571,
      caption: 'Insubordinate Insurgent',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/9f41de269cb1ff091487554fb53b2374.png',
    },
    {
      name: 'Logistics Division Pilot',
      xws: 'logisticsdivisionpilot',
      initiative: 1,
      limited: 0,
      text:
        'Without the support of the New Republic, members of the Resistance often pull double duty as transport pilots or mechanics, putting their skills and technical knowledge to use in the fight against the First Order.',
      hyperspace: true,
      epic: true,
      slots: [
        'Tech',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Astromech',
        'Modification',
      ],
      cost: 32,
      ffg: 572,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/57ea37cdb13f52ec3f3e0b745fc9d630.png',
    },
  ],
  ffg: 64,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Resistance_Transport.png',
};

export default t;
