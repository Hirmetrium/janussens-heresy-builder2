import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/D Defender',
  xws: 'tieddefender',
  ffg: 18,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1NB',
    '1YR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '4KW',
    '5FB',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEDefender.png',
  pilots: [
    {
      name: 'Colonel Vessery',
      caption: 'Contemplative Commander',
      initiative: 4,
      limited: 1,
      cost: 82,
      xws: 'colonelvessery',
      ability:
        'While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_123.png',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_123.jpg',
      ffg: 123,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Countess Ryad',
      caption: 'Cutthroat Politico',
      initiative: 4,
      limited: 1,
      cost: 80,
      xws: 'countessryad',
      ability:
        'While you would execute a [Straight] maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a [Koiogran Turn] maneuver instead.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_124.png',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_124.jpg',
      ffg: 124,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Delta Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 67,
      xws: 'deltasquadronpilot',
      text:
        'In addition to its missile launchers and six wingtip laser cannons, the formidable TIE defender is equipped with deflector shields and a hyperdrive.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_126.png',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      slots: ['Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_126.jpg',
      ffg: 126,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Onyx Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 74,
      xws: 'onyxsquadronace',
      text:
        'The experimental TIE defender outclasses all other contemporary starfighters, though its size, speed, and array of weapons come at a tremendous cost in credits.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_125.png',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_125.jpg',
      ffg: 125,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Rexler Brath',
      caption: 'Onyx Leader',
      initiative: 5,
      limited: 1,
      cost: 79,
      xws: 'rexlerbrath',
      ability:
        "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_122.png',
      shipAbility: {
        name: 'Full Throttle',
        text:
          'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      slots: ['Talent', 'Sensor', 'Cannon', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_122.jpg',
      ffg: 122,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
