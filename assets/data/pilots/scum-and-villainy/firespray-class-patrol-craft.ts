import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Firespray-class Patrol Craft',
  xws: 'firesprayclasspatrolcraft',
  ffg: 10,
  size: 'Medium',
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
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: 'Boba Fett',
      caption: 'Notorious Bounty Hunter',
      initiative: 5,
      limited: 1,
      cost: 86,
      xws: 'bobafett',
      ability:
        'While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_149.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/bd/38/bd388799-287f-455e-9624-8078e676fed0/op067_boba-fett.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_149.jpg',
      ffg: 149,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Bounty Hunter',
      initiative: 2,
      limited: 0,
      cost: 62,
      xws: 'bountyhunter',
      text:
        'The Firespray-class patrol craft is infamous for its association with the deadly bounty hunters Jango Fett and Boba Fett, who packed their craft with countless deadly armaments.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_154.png',
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_154.jpg',
      ffg: 154,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Emon Azzameen',
      caption: 'Shipping Magnate',
      initiative: 4,
      limited: 1,
      cost: 71,
      xws: 'emonazzameen',
      ability:
        'If you would drop a device using a (1 [Straight]) template, you may use the (3 [Turn Left]), (3 [Straight]), or (3 [Turn Right]) template instead.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_150.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_150.jpg',
      ffg: 150,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Kath Scarlet',
      caption: 'Captain of the Binayre Pirates',
      initiative: 4,
      limited: 1,
      cost: 72,
      xws: 'kathscarlet',
      ability:
        'While you perform a primary attack, if there is at least 1 friendly non-limited ship at range 0 of the defender, roll 1 additional attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_151.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_151.jpg',
      ffg: 151,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Koshka Frost',
      caption: 'Icy Professional',
      initiative: 3,
      limited: 1,
      cost: 70,
      xws: 'koshkafrost',
      ability:
        'While you defend or perform an attack, if the enemy ship is stressed, you may reroll 1 of your dice.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_152.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_152.jpg',
      ffg: 152,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Krassis Trelix',
      caption: 'Imperial Deserter',
      initiative: 3,
      limited: 1,
      cost: 65,
      xws: 'krassistrelix',
      ability:
        'You can perform [Front Arc] special attacks from your [Rear Arc]. While you perform a special attack, you may reroll 1 attack die.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_153.png',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_153.jpg',
      ffg: 153,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
