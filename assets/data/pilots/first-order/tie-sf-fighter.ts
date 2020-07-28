import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/sf Fighter',
  xws: 'tiesffighter',
  ffg: 50,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Evade',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Lock',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEsf.png',
  pilots: [
    {
      name: '"Quickdraw"',
      caption: 'Defiant Duelist',
      initiative: 6,
      limited: 1,
      cost: 47,
      xws: 'quickdraw',
      ability:
        'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      charges: { value: 1, recovers: 1 },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d038dadd7a62bbe2de89d3866e1a3639.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/86f8ccc959081a43dc4d0dbeb921d0ba.jpg',
      ffg: 406,
      hyperspace: false,
      epic: true,
    },
    {
      name: '"Backdraft"',
      caption: 'Fiery Fanatic',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'backdraft',
      ability:
        'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/317cc5350980277f1d389ed618030d85.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6c3a06877712596601ba1cc4ec533626.jpg',
      ffg: 407,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Omega Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'omegasquadronexpert',
      text:
        'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/784d00f653ff7cd58cb634c7a59e47c1.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2caf1312bd6aba3630ef6edc1ff81f53.jpg',
      ffg: 408,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zeta Squadron Survivor',
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'zetasquadronsurvivor',
      text:
        'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/848db1993150bda19217e2c14b3c3df6.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 409,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Lieutenant LeHuse',
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'lieutenantlehuse',
      text:
        "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/b823438eb2b32a407bf6a757a4ecb7d5.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      ffg: 641,
      hyperspace: true,
      epic: true,
      caption: 'Unflinching Executioner',
      ability:
        "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
    },
    {
      name: 'Captain Phasma',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'captainphasma',
      text:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Tech', 'Missile', 'Gunner', 'Modification'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/7c0bc32446e17991aff226d0fcab7b19.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/55f72ce4974962db5b2ab3fac316b896.jpg',
      hyperspace: true,
      epic: true,
      ffg: 642,
      caption: 'Scyre Survivor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
    },
  ],
};

export default t;
