import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: '"Chopper"',
    limited: 1,
    xws: 'chopper-crew',
    sides: [
      {
        title: '"Chopper"',
        type: 'Crew',
        ability:
          'During the Perform Action step, you may perform 1 action, even while stressed. After you perform an action while stressed, suffer 1 [Hit] damage unless you expose 1 of your damage cards.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_83.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_83.jpg',
        ffg: 307,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: '"Zeb" Orrelios',
    limited: 1,
    xws: 'zeborrelios',
    sides: [
      {
        title: '"Zeb" Orrelios',
        type: 'Crew',
        ability:
          'You can perform primary attacks at range 0. Enemy ships at range 0 can perform primary attacks against you.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_94.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_94.jpg',
        ffg: 318,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: '0-0-0',
    limited: 1,
    xws: '000',
    sides: [
      {
        title: '0-0-0',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 enemy ship at range 0-1. If you do, you gain 1 calculate token unless that ship chooses to gain 1 stress token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_127.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_127.jpg',
        ffg: 352,
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'], character: ['darthvader'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: '4-LOM',
    limited: 1,
    xws: '4lom',
    sides: [
      {
        title: '4-LOM',
        type: 'Crew',
        ability:
          'While you perform an attack, after rolling attack dice, you may name a type of green token. If you do, gain 2 ion tokens and, during this attack, the defender cannot spend tokens of the named type.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_128.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_128.jpg',
        ffg: 353,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Admiral Sloane',
    limited: 1,
    xws: 'admiralsloane',
    sides: [
      {
        title: 'Admiral Sloane',
        type: 'Crew',
        ability:
          'After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_109.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_109.jpg',
        ffg: 335,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Agent Kallus',
    limited: 1,
    xws: 'agentkallus',
    sides: [
      {
        title: 'Agent Kallus',
        type: 'Crew',
        ability:
          'Setup: Assign the Hunted condition to 1 enemy ship. While you perform an attack against the ship with the Hunted condition, you may change 1 of your [Focus] results to a [Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_110.png',
        conditions: ['hunted'],
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_110.jpg',
        ffg: 336,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Baze Malbus',
    limited: 1,
    xws: 'bazemalbus',
    sides: [
      {
        title: 'Baze Malbus',
        type: 'Crew',
        ability:
          'While you perform a [Focus] action, you may treat it as red. If you do, gain 1 additional focus token for each enemy ship at range 0-1, to a maximum of 2.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_79.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_79.jpg',
        ffg: 303,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Boba Fett',
    limited: 1,
    xws: 'bobafett',
    sides: [
      {
        title: 'Boba Fett',
        type: 'Crew',
        ability:
          'Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of any enemy ship.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_129.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_129.jpg',
        ffg: 354,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'Before rolling defense dice, you may spend 1 calculate token to guess aloud a number 1 or higher. If you do and you roll exactly that many [Evade] results, add 1 [Evade] result. After you perform the [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_80.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_80.jpg',
        ffg: 304,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Cad Bane',
    limited: 1,
    xws: 'cadbane',
    sides: [
      {
        title: 'Cad Bane',
        type: 'Crew',
        ability:
          'After you drop or launch a device, you may perform a red [Boost] action.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_130.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_130.jpg',
        ffg: 355,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Captain Phasma',
    limited: 1,
    xws: 'captainphasma',
    sides: [
      {
        title: 'Captain Phasma',
        type: 'Crew',
        ability:
          'At the end of the Engagement Phase, each enemy ship at range 0-1 that is not stressed gains 1 stress token.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/784566afc8c540d5e392689865207059.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/71ad5db561ea39d9d59c4bbdc1b42f35.jpg',
        ffg: 465,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Cassian Andor',
    limited: 1,
    xws: 'cassianandor',
    sides: [
      {
        title: 'Cassian Andor',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose 1 enemy ship at range 1-2 and guess aloud a bearing and speed, then look at that ship's dial. If the chosen ship's bearing and speed match your guess, you may set your dial to another maneuver.",
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_81.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_81.jpg',
        ffg: 305,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may spend 2 [Charge] to repair 1 faceup damage card.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_82.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_82.jpg',
        ffg: 306,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca-crew',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_157.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_157.jpg',
        ffg: 382,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ciena Ree',
    limited: 1,
    xws: 'cienaree',
    sides: [
      {
        title: 'Ciena Ree',
        type: 'Crew',
        ability:
          'After you perform a [Coordinate] action, if the ship you coordinated performed a [Barrel Roll] or [Boost] action, it may gain 1 stress token to rotate 90°.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_111.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_111.jpg',
        ffg: 337,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Cikatro Vizago',
    limited: 1,
    xws: 'cikatrovizago',
    sides: [
      {
        title: 'Cikatro Vizago',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 2 [Illicit] upgrades equipped to friendly ships at range 0-1. If you do, you may exchange these upgrades. End of Game: Return all [Illicit] upgrades to their original ships.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_131.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_131.jpg',
        ffg: 356,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Darth Vader',
    limited: 1,
    xws: 'darthvader',
    sides: [
      {
        title: 'Darth Vader',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc at range 0-2 and spend 1 [Force]. If you do, that ship suffers 1 [Hit] damage unless it chooses to remove 1 green token.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_112.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_112.jpg',
        ffg: 338,
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Death Troopers',
    limited: 1,
    xws: 'deathtroopers',
    sides: [
      {
        title: 'Death Troopers',
        type: 'Crew',
        ability:
          'During the Activation Phase, enemy ships at range 0-1 cannot remove stress tokens.',
        slots: ['Crew', 'Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_113.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_113.jpg',
        ffg: 339,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Director Krennic',
    limited: 1,
    xws: 'directorkrennic',
    sides: [
      {
        title: 'Director Krennic',
        type: 'Crew',
        ability:
          'Setup: Before placing forces, assign the Optimized Prototype condition to another friendly ship.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_114.png',
        conditions: ['optimizedprototype'],
        slots: ['Crew'],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_114.jpg',
        ffg: 340,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Emperor Palpatine',
    limited: 1,
    xws: 'emperorpalpatine',
    sides: [
      {
        title: 'Emperor Palpatine',
        type: 'Crew',
        ability:
          'While another friendly ship defends or performs an attack, you may spend 1 [Force] to modify 1 of its dice as though that ship had spent 1 [Force].',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_115.png',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_115.jpg',
        ffg: 341,
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Freelance Slicer',
    limited: 0,
    xws: 'freelanceslicer',
    sides: [
      {
        title: 'Freelance Slicer',
        type: 'Crew',
        ability:
          'While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 jam token. Then, on a [Hit] or [Critical Hit] result, gain 1 jam token.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_42.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_42.jpg',
        ffg: 271,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'General Hux',
    limited: 1,
    xws: 'generalhux',
    sides: [
      {
        title: 'General Hux',
        type: 'Crew',
        ability:
          'While you perform a white [Coordinate] action, you may treat it as red. If you do, you may coordinate up to 2 additional ships of the same ship type, and each ship you coordinate must perform the same action, treating that action as red.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fa0b8492eff625bc66f00bd561015465.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/94bee4960ca0fb907ba77d5cb2ff7abb.jpg',
        ffg: 466,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['First Order'] },
      { action: { type: 'Coordinate', difficulty: 'White' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'GNK "Gonk" Droid',
    limited: 0,
    xws: 'gnkgonkdroid',
    sides: [
      {
        title: 'GNK "Gonk" Droid',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. Action: Recover 1 [Charge]. Action: Spend 1 [Charge] to recover 1 shield.',
        slots: ['Crew'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_43.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_43.jpg',
        ffg: 272,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Grand Inquisitor',
    limited: 1,
    xws: 'grandinquisitor',
    sides: [
      {
        title: 'Grand Inquisitor',
        type: 'Crew',
        ability:
          'After an enemy ship at range 0-2 reveals its dial, you may spend 1 [Force] to perform 1 white action on your action bar, treating that action as red.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_116.png',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_116.jpg',
        ffg: 342,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Grand Moff Tarkin',
    limited: 1,
    xws: 'grandmofftarkin',
    sides: [
      {
        title: 'Grand Moff Tarkin',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, each friendly ship may acquire a lock on a ship that you have locked.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_117.png',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_117.jpg',
        ffg: 343,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Lock' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Hera Syndulla',
    limited: 1,
    xws: 'herasyndulla',
    sides: [
      {
        title: 'Hera Syndulla',
        type: 'Crew',
        ability:
          'You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 [Hit] damage.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_84.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_84.jpg',
        ffg: 308,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'IG-88D',
    limited: 1,
    xws: 'ig88d',
    sides: [
      {
        title: 'IG-88D',
        type: 'Crew',
        ability:
          'You have the pilot ability of each other friendly ship with the IG-2000 upgrade. After you perform a [Calculate] action, gain 1 calculate token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_132.png',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_132.jpg',
        ffg: 357,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'ISB Slicer',
    limited: 0,
    xws: 'isbslicer',
    sides: [
      {
        title: 'ISB Slicer',
        type: 'Crew',
        ability:
          'During the End Phase, enemy ships at range 1-2 cannot remove jam tokens.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_118.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_118.jpg',
        ffg: 344,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Informant',
    limited: 1,
    xws: 'informant',
    sides: [
      {
        title: 'Informant',
        type: 'Crew',
        ability:
          'Setup: After placing forces, choose 1 enemy ship and assign the Listening Device condition to it.',
        conditions: ['listeningdevice'],
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_44.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_44.jpg',
        ffg: 273,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Jabba the Hutt',
    limited: 1,
    xws: 'jabbathehutt',
    sides: [
      {
        title: 'Jabba the Hutt',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 1 friendly ship at range 0-2 and spend 1 [Charge]. If you do, that ship recovers 1 [Charge] on 1 of its equipped [Illicit] upgrades.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_133.png',
        slots: ['Crew', 'Crew'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_133.jpg',
        ffg: 358,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Jyn Erso',
    limited: 1,
    xws: 'jynerso',
    sides: [
      {
        title: 'Jyn Erso',
        type: 'Crew',
        ability:
          'If a friendly ship at range 0-3 would gain a focus token, it may gain 1 evade token instead.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_85.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_85.jpg',
        ffg: 309,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Kanan Jarrus',
    limited: 1,
    xws: 'kananjarrus',
    sides: [
      {
        title: 'Kanan Jarrus',
        type: 'Crew',
        ability:
          'After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 [Force] to remove 1 stress token from that ship.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_86.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_86.jpg',
        ffg: 310,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ketsu Onyo',
    limited: 1,
    xws: 'ketsuonyo',
    sides: [
      {
        title: 'Ketsu Onyo',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may choose 1 enemy ship at range 0-2 in your firing arc. If you do, that ship does not remove its tractor tokens.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_134.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_134.jpg',
        ffg: 359,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Kylo Ren',
    limited: 1,
    xws: 'kyloren',
    sides: [
      {
        title: 'Kylo Ren',
        type: 'Crew',
        ability:
          "<strong>Action:</strong> Choose 1 enemy ship at range 1-3. If you do, spend 1 [Force] to assign the <strong>I'll Show You the Dark Side</strong> condition to that ship.",
        conditions: ['illshowyouthedarkside'],
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f60322a1f5ace7e45f6c7e0fa0200705.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a61302c8e1cd180d4198e9ae75b82e91.jpg',
        ffg: 467,
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'L3-37',
    limited: 1,
    xws: 'l337',
    sides: [
      {
        title: 'L3-37',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. While you defend, you may flip this card. If you do, the attacker must reroll all attack dice.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_158.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_158.jpg',
        ffg: 384,
      },
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_158b.png',
        ffg: 383,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Lando Calrissian',
    limited: 1,
    xws: 'landocalrissian-crew',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'After you roll dice, you may spend 1 green token to reroll up to 2 of your results.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_159.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_159.jpg',
        ffg: 385,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Lando Calrissian',
    limited: 1,
    xws: 'landocalrissian',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'Action: Roll 2 defense dice. For each [Focus] result, gain 1 focus token. For each [Evade] result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_87.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_87.jpg',
        ffg: 311,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Latts Razzi',
    limited: 1,
    xws: 'lattsrazzi',
    sides: [
      {
        title: 'Latts Razzi',
        type: 'Crew',
        ability:
          'While you defend, if the attacker is stressed, you may remove 1 stress from the attacker to change 1 of your blank/[Focus] results to an [Evade] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_135.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_135.jpg',
        ffg: 360,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Leia Organa',
    limited: 1,
    xws: 'leiaorgana',
    sides: [
      {
        title: 'Leia Organa',
        type: 'Crew',
        ability:
          'At the start of the Activation Phase, you may spend 3 [Charge]. During this phase, each friendly ship reduces the difficulty of its red maneuvers.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_88.png',
        slots: ['Crew'],
        charges: { value: 3, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_88.jpg',
        ffg: 312,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Magva Yarro',
    limited: 1,
    xws: 'magvayarro',
    sides: [
      {
        title: 'Magva Yarro',
        type: 'Crew',
        ability:
          'After you defend, if the attack hit, you may acquire a lock on the attacker.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_89.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_89.jpg',
        ffg: 313,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Maul',
    limited: 1,
    xws: 'maul',
    sides: [
      {
        title: 'Maul',
        type: 'Crew',
        ability:
          'After you suffer damage, you may gain 1 stress token to recover 1 [Force]. You can equip "Dark Side" upgrades.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_136.png',
        slots: ['Crew'],
        grants: [{ side: 'dark', value: 1 }],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_136.jpg',
        ffg: 361,
      },
    ],
    cost: { value: 12 },
    restrictions: [
      {
        factions: ['Scum and Villainy'],
        character: [
          'ezrabridger',
          'ezrabridger-sheathipedeclassshuttle',
          'ezrabridger-tielnfighter',
        ],
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Minister Tua',
    limited: 1,
    xws: 'ministertua',
    sides: [
      {
        title: 'Minister Tua',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, if you are damaged, you may perform a red [Reinforce] action.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_119.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_119.jpg',
        ffg: 345,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Moff Jerjerrod',
    limited: 1,
    xws: 'moffjerjerrod',
    sides: [
      {
        title: 'Moff Jerjerrod',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, choose the (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) template. Each friendly ship may perform a red [Boost] action using that template.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_120.png',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_120.jpg',
        ffg: 346,
      },
    ],
    cost: { value: 8 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { action: { type: 'Coordinate' } },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Nien Nunb',
    limited: 1,
    xws: 'niennunb',
    sides: [
      {
        title: 'Nien Nunb',
        type: 'Crew',
        ability:
          'Decrease the difficulty of your bank maneuvers ([Bank Left] and [Bank Right]).',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_90.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_90.jpg',
        ffg: 314,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Novice Technician',
    limited: 0,
    xws: 'novicetechnician',
    sides: [
      {
        title: 'Novice Technician',
        type: 'Crew',
        ability:
          'At the end of the round, you may roll 1 attack die to repair 1 faceup damage card. Then on a [Hit] result, expose 1 damage card.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_45.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_45.jpg',
        ffg: 274,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Perceptive Copilot',
    limited: 0,
    xws: 'perceptivecopilot',
    sides: [
      {
        title: 'Perceptive Copilot',
        type: 'Crew',
        ability: 'After you perform a [Focus] action, gain 1 focus token.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_46.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_46.jpg',
        ffg: 275,
      },
    ],
    cost: { value: 8 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Petty Officer Thanisson',
    limited: 1,
    xws: 'pettyofficerthanisson',
    sides: [
      {
        title: 'Petty Officer Thanisson',
        type: 'Crew',
        ability:
          'During the Activation or Engagement Phase, after an enemy ship in your [Front Arc] at range 0-1 gains a red or orange token, if you are not stressed, you may gain 1 stress token. If you do, that ship gains 1 additional token of the type that it gained.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/900397d209adfd3f7bd6429909cc20cc.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/007c0145ba0ec1c57de17c0448cafef2.jpg',
        ffg: 468,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: "Qi'ra",
    limited: 1,
    xws: 'qira',
    sides: [
      {
        title: "Qi'ra",
        type: 'Crew',
        ability:
          'While you move and perform attacks, you ignore obstacles that you are locking.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_161.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_161.jpg',
        ffg: 387,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2-crew',
    sides: [
      {
        title: 'R2-D2',
        type: 'Crew',
        ability:
          'During the End Phase, if you are damaged and not shielded, you may roll 1 attack die to recover 1 shield. On a [Hit] result, expose 1 of your damage cards.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_91.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_91.jpg',
        ffg: 315,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Sabine Wren',
    limited: 1,
    xws: 'sabinewren',
    sides: [
      {
        title: 'Sabine Wren',
        type: 'Crew',
        ability:
          'Setup: Place 1 ion, 1 jam, 1 stress, and 1 tractor token on this card. After a ship suffers the effect of a friendly bomb, you may remove 1 ion, jam, stress, or tractor token from this card. If you do, that ship gains a matching token.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_92.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_92.jpg',
        ffg: 316,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Saw Gerrera',
    limited: 1,
    xws: 'sawgerrera',
    sides: [
      {
        title: 'Saw Gerrera',
        type: 'Crew',
        ability:
          'While you perform an attack, you may suffer 1 [Hit] damage to change all of your [Focus] results to [Critical Hit] results.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_93.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_93.jpg',
        ffg: 317,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Seasoned Navigator',
    limited: 0,
    xws: 'seasonednavigator',
    sides: [
      {
        title: 'Seasoned Navigator',
        type: 'Crew',
        ability:
          'After you reveal your dial, you may set your dial to another non-red maneuver of the same speed. While you execute that maneuver, increase its difficulty.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_47.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_47.jpg',
        ffg: 276,
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 2,
        '1': 3,
        '2': 4,
        '3': 5,
        '4': 6,
        '5': 7,
        '6': 8,
        '7': 8,
        '8': 9,
      },
    },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Seventh Sister',
    limited: 1,
    xws: 'seventhsister',
    sides: [
      {
        title: 'Seventh Sister',
        type: 'Crew',
        ability:
          'If an enemy ship at range 0-1 would gain a stress token, you may spend 1 [Force] to have it gain 1 jam or tractor token instead.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_121.png',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_121.jpg',
        ffg: 347,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Supreme Leader Snoke',
    limited: 1,
    xws: 'supremeleadersnoke',
    sides: [
      {
        title: 'Supreme Leader Snoke',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose any number of enemy ships beyond range 1. If you do, spend that many [Force] to flip each chosen ship's dial faceup.",
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/5b699f8b5268e5290c42adce0fd2ee3e.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3b29995fb9e419822a34c672f2543fa6.jpg',
        ffg: 469,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Tactical Officer',
    limited: 0,
    xws: 'tacticalofficer',
    sides: [
      {
        title: 'Tactical Officer',
        type: 'Crew',
        text:
          'In the chaos of a starfighter battle, a single order can mean the difference between a victory and a massacre.',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: -1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_48.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_48.jpg',
        ffg: 277,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ action: { type: 'Coordinate', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Tobias Beckett',
    limited: 1,
    xws: 'tobiasbeckett',
    sides: [
      {
        title: 'Tobias Beckett',
        type: 'Crew',
        ability:
          'Setup: After placing forces, you may choose 1 obstacle in the play area. If you do, place it anywhere in the play area beyond range 2 of any board edge or ship and beyond range 1 of other obstacles.',
        slots: ['Crew'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_160.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_160.jpg',
        ffg: 386,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Unkar Plutt',
    limited: 1,
    xws: 'unkarplutt',
    sides: [
      {
        title: 'Unkar Plutt',
        type: 'Crew',
        ability:
          'After you partially execute a maneuver, you may suffer 1 [Hit] damage to perform 1 white action.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_137.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_137.jpg',
        ffg: 362,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Zuckuss',
    limited: 1,
    xws: 'zuckuss',
    sides: [
      {
        title: 'Zuckuss',
        type: 'Crew',
        ability:
          'While you perform an attack, if you are not stressed, you may choose 1 defense die and gain 1 stress token. If you do, the defender must reroll that die.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_138.png',
        slots: ['Crew'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_138.jpg',
        ffg: 363,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po-crew',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'While you coordinate, you can choose friendly ships beyond range 2 if they have [Calculate] on their action bar. After you perform the [Calculate] or [Coordinate] action, gain 1 calculate token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a0e80bb89748e7415e945a050f82ba84.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/1629b5a262f8b69e1dee4b841150c9b7.jpg',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 472,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Han Solo',
    limited: 1,
    xws: 'hansolo-crew',
    sides: [
      {
        title: 'Han Solo',
        type: 'Crew',
        ability:
          'After you perform an [Evade] action, gain additional evade tokens equal to the number of enemy ships at range 0-1.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/622ea4b573afbb5c95b3e9f2989a8aef.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/af2ce405b6c28568aa2d66b78296b351.jpg',
        slots: ['Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        ffg: 474,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca-crew-swz19',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. After a friendly ship at range 0-3 is dealt 1 damage card, recover 1 [Charge]. While you perform an attack, you may spend 2 [Charge] to change 1 [Focus] result to a [Critical Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3090c218acff7dc71a81e791ce15860e.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3d124811dd272ec2355a30903a827034.jpg',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
        ffg: 473,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Rose Tico',
    limited: 1,
    xws: 'rosetico',
    sides: [
      {
        title: 'Rose Tico',
        type: 'Crew',
        ability:
          'While you defend or perform an attack, you may spend 1 of your results to acquire a lock on the enemy ship.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/60ac08169a90794c33d1d582f1a08480.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/92a93952c31c95dff0fc96f31e88cfd3.jpg',
        slots: ['Crew'],
        ffg: 475,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Chancellor Palpatine',
    limited: 1,
    xws: 'chancellorpalpatine',
    sides: [
      {
        title: 'Chancellor Palpatine',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. After you defend, if the attacker is at range 0-2, you may spend 1 [Force]. If you do, the attacker gains 1 stress token. During the End Phase, you may flip this card.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8218d7b903ea8c0c0f88375124a93a5f.png',
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 556,
      },
      {
        title: 'Darth Sidious',
        type: 'Crew',
        ability:
          'After you perform a purple [Coordinate] action, the ship you coordinated gains 1 stress token. Then, it gains 1 focus token or recovers 1 [Force].',
        force: { value: 1, recovers: 1, side: ['dark', 'light'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/fe4d36bbd6f43ada43a5cf55354211c0.png',
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 538,
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['Galactic Republic', 'Separatist Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Count Dooku',
    limited: 1,
    xws: 'countdooku',
    sides: [
      {
        title: 'Count Dooku',
        type: 'Crew',
        ability:
          'Before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/a1920988dd8634d9780c6363e3f36f6e.png',
        slots: ['Crew'],
        ffg: 539,
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'General Grievous',
    limited: 1,
    xws: 'generalgrievous',
    sides: [
      {
        title: 'General Grievous',
        type: 'Crew',
        ability:
          'While you defend, after the Neutralize Results step, if there are 2 or more [Hit]/[Critical Hit] results, you may spend 1 [Charge] to cancel 1 [Hit] or [Critical Hit] result. After a friendly ship is destroyed, recover 1 [Charge].',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f3740c47b0253ec848c4cfcdde195393.png',
        charges: { value: 1, recovers: 0 },
        slots: ['Crew'],
        ffg: 540,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Amilyn Holdo',
    limited: 1,
    xws: 'amilynholdo',
    sides: [
      {
        title: 'Amilyn Holdo',
        type: 'Crew',
        ability:
          'Before you engage, you may choose another friendly ship at range 1-2. You may transfer to that ship 1 token of a type that ship does not have. That ship may transfer 1 token to you of a type you do not have.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cbe5e849e9daa4f3f968b2ff6e2879b1.png',
        slots: ['Crew'],
        ffg: 581,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'GA-97',
    limited: 1,
    xws: 'ga97',
    sides: [
      {
        title: 'GA-97',
        type: 'Crew',
        ability:
          "Setup: Before placing forces, you may spend 3-5 [Charge]. If you do, choose another friendly ship and assign the It's the Resistance condition to it.",
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af44c6d32812dc07238b40842d67b47.png',
        conditions: ['itstheresistance'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Crew'],
        ffg: 582,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Kaydel Connix',
    limited: 1,
    xws: 'kaydelconnix',
    sides: [
      {
        title: 'Kaydel Connix',
        type: 'Crew',
        ability:
          'After you reveal your dial, you may set your dial to a basic maneuver of the next higher speed. While you execute that maneuver, increase its difficulty.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/29a0eb418850a3821c38874daf0a6b0d.png',
        slots: ['Crew'],
        ffg: 583,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Korr Sella',
    limited: 1,
    xws: 'korrsella',
    sides: [
      {
        title: 'Korr Sella',
        type: 'Crew',
        ability:
          'After you fully execute a blue maneuver, remove all of your stress tokens.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/dd102b8e517399d12b17756a863d19ee.png',
        slots: ['Crew'],
        ffg: 584,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: "Larma D'Acy",
    limited: 1,
    xws: 'larmadacy',
    sides: [
      {
        title: "Larma D'Acy",
        type: 'Crew',
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Reinforce], [Coordinate], and [Jam] actions, even while stressed.\n\nWhile you perform a white [Reinforce], [Coordinate], or [Jam] action, if you are stressed, treat that action as red.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/555a815e60cd7bf4612109c3fd65beaa.png',
        slots: ['Crew'],
        ffg: 585,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Leia Organa',
    limited: 1,
    xws: 'leiaorgana-resistance',
    sides: [
      {
        title: 'Leia Organa',
        type: 'Crew',
        ability:
          'After a friendly ship reveals its dial, you may spend 1 [Force]. If you do, the chosen ship reduces the difficulty of that maneuver.',
        slots: ['Crew', 'Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        force: { value: 1, recovers: 1, side: ['light'] },
        ffg: 586,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0a194c8c529278b471e64edc597b06fc.png',
      },
    ],
    cost: { value: 17 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'PZ-4CO',
    limited: 1,
    xws: 'pz4co',
    sides: [
      {
        title: 'PZ-4CO',
        type: 'Crew',
        ability:
          'At the end of the Activation Phase, you may choose 1 friendly ship at range 1-2.  If you do, transfer 1 calculate token to that ship.  If your revealed maneuver is blue, you may transfer 1 focus token instead.',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/11c5bdf18a62dc43bdda0834026dace2.png',
        slots: ['Crew'],
        ffg: 587,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po-republic',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'While you defend, if you are calculating, you may reroll 1 defense die.\n\nAfter you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        ffg: 616,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/01e1a3b43aee6c564662825cadcd3f22.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Toryn Farr',
    limited: 1,
    xws: 'torynfarr',
    sides: [
      {
        title: 'Toryn Farr',
        type: 'Crew',
        ability:
          'After you coordinate a friendly ship, it may acquire a lock on a ship you are locking, ignoring range restrictions.',
        slots: ['Crew'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: -1,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'K-2SO',
    limited: 1,
    xws: 'k2so',
    sides: [
      {
        title: 'K-2SO',
        type: 'Crew',
        ability:
          'During the System Phase, you may choose a friendly ship at range 0-3.  That ship gains 1 calculate and 1 stress token.',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 647,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/bd3d6c3227984bc0f5daacebdc7d92ad.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Plo Koon',
    limited: 1,
    xws: 'plokoon',
    hyperspace: false,
    epic: true,
    sides: [
      {
        ability:
          'At the start of the End Phase, if you are reinforced, you may choose 1 friendly ship at range 0 or in your [Left Arc] or [Right Arc] at range 1. That ship removes 1 deplete token or strain token, or repairs 1 faceup damage card.',
        title: 'Plo Koon',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: -1,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 0 },
  },
];

export default t;
