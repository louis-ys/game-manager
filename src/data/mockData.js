// sample data for Game Manager planning tool

export const worlds = [
  {
    id: 1,
    title: 'Warm Garden',
    description: 'A peaceful starting world with easy stages.',
    orderNo: 1,
  },
  {
    id: 2,
    title: 'Cat Forest',
    description: 'A forest world filled with cat-themed challenges.',
    orderNo: 2,
  },
]

export const stages = [
  {
    id: 1,
    worldId: 1,
    stageCode: '1-1',
    title: 'Warm Garden Intro',
    difficulty: 'easy',
    status: 'planning',
    goal: 'Clear 10 flower tiles',
    reward: '100 gold',
    description: 'Intro stage for new players in Warm Garden.',
  },
  {
    id: 2,
    worldId: 1,
    stageCode: '1-2',
    title: 'Flower Field Run',
    difficulty: 'easy',
    status: 'developing',
    goal: 'Collect 15 flower tiles',
    reward: '150 gold',
    description: 'A simple stage focused on flower tile collection.',
  },
  {
    id: 3,
    worldId: 2,
    stageCode: '2-1',
    title: 'Cat Forest Path',
    difficulty: 'normal',
    status: 'planning',
    goal: 'Rescue 3 lost kittens',
    reward: '200 gold',
    description: 'A forest stage where players help lost kittens.',
  },
  {
    id: 4,
    worldId: 2,
    stageCode: '2-2',
    title: 'Night Lamp Village',
    difficulty: 'hard',
    status: 'testing',
    goal: 'Light 5 magic lamps',
    reward: '300 gold',
    description: 'A harder stage with night-themed puzzle mechanics.',
  },
]