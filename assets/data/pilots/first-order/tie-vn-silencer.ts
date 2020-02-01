import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/vn Silencer',
  xws: 'tievnsilencer',
  ffg: 52,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FB',
    '4KR',
    '5FB',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIESilencer.png',
  pilots: [
    {
      name: '"Blackout"',
      xws: 'blackout',
      caption: 'Ill-Fated Test Pilot',
      initiative: 5,
      limited: 1,
      cost: 63,
      ability:
        'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/c5659b210e13b4e11fdd5f1396f2847c.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/20308b5887fb20d6b8ecdb3ede0bede3.jpg',
      ffg: 415,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Kylo Ren',
      xws: 'kyloren',
      caption: 'Tormented Apprentice',
      initiative: 5,
      limited: 1,
      cost: 76,
      ability:
        "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
      force: { value: 2, recovers: 1, side: ['dark'] },
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      conditions: ['illshowyouthedarkside'],
      slots: ['Force Power', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/71dbde337b9ff5aab897781d40d8f653.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/80b87be22656fc01742fca490193d440.jpg',
      ffg: 414,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'First Order Test Pilot',
      xws: 'firstordertestpilot',
      initiative: 4,
      limited: 0,
      cost: 56,
      text:
        'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/568abbcd68bb174173da4e7ee92051e3.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/86349c032fc169cb2000d3db7c9fbef4.jpg',
      ffg: 416,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Recoil"',
      xws: 'recoil',
      caption: 'Quantity Over Quality',
      initiative: 4,
      limited: 1,
      cost: 57,
      ability:
        'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/ab11858b2b9ac5c8bbfb2dc21023ba34.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c4590088696ecc687f5c0f004d1d97ab.jpg',
      ffg: 455,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Avenger"',
      xws: 'avenger',
      caption: 'Wrathful Wingmate',
      initiative: 3,
      limited: 1,
      cost: 56,
      ability:
        'After another friendly ship is destroyed, you may perform an action, even while stressed.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d90d3057ead18b5df5f6de55a199a4cd.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg',
      ffg: 456,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Rush"',
      xws: 'rush',
      caption: 'Adrenaline Junkie',
      initiative: 2,
      limited: 1,
      cost: 57,
      ability: 'While you are damaged, treat your initiative as 6.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/886d715885da65bdf10ad7c68e4d0a93.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg',
      ffg: 643,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Sienar-Jaemus Engineer',
      xws: 'sienarjaemusengineer',
      initiative: 1,
      limited: 0,
      cost: 51,
      text:
        'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/8f7c4680fbc001169baf6538ab259e9b.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/18b2a1b00b2f8c6669b6b1d1b278dcf2.jpg',
      ffg: 417,
      hyperspace: true,
      epic: true,
    },
    {
      name: '"Rush"',
      xws: 'rush',
      caption: 'Adrenaline Junkie',
      initiative: 2,
      limited: 1,
      cost: 57,
      ability: 'While you are damaged, treat your initiative as 6.',
      shipAbility: {
        name: 'Autothrusters',
        text:
          'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/886d715885da65bdf10ad7c68e4d0a93.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3778411ec66e33951231314e909b981d.jpg',
      ffg: 643,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;
