import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Sheathipede-class Shuttle',
  xws: 'sheathipedeclassshuttle',
  ffg: 8,
  size: 'Small',
  dial: [
    '1SR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3KR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Sheathipede.png',
  pilots: [
    {
      name: '"Zeb" Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 33,
      xws: 'zeborrelios-sheathipedeclassshuttle',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_40.png',
      shipAbility: {
        name: 'Comms Shuttle',
        text:
          'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_40.jpg',
      ffg: 40,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'AP-5',
      caption: 'Escaped Analyst Droid',
      initiative: 1,
      limited: 1,
      cost: 32,
      xws: 'ap5',
      ability:
        'While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_41.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Coordinate' },
      ],
      shipAbility: {
        name: 'Comms Shuttle',
        text:
          'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_41.jpg',
      ffg: 41,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'ezrabridger-sheathipedeclassshuttle',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_39.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Comms Shuttle',
        text:
          'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Force Power', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_39.jpg',
      ffg: 39,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Fenn Rau',
      caption: 'Reluctant Rebel',
      initiative: 6,
      limited: 1,
      cost: 50,
      xws: 'fennrau-sheathipedeclassshuttle',
      ability:
        'Before an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/43140025bc61b3e64ef6831987cafb2c.png',
      shipAbility: {
        name: 'Comms Shuttle',
        text:
          'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_38.jpg',
      ffg: 38,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
