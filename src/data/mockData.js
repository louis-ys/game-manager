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
    title: 'Warm Garden Intro',
    stageCode: '1-1',
    difficulty: 'Easy',
    status: 'planning',
  },
  {
    id: 2,
    worldId: 1,
    title: 'Flower Field Run',
    stageCode: '1-2',
    difficulty: 'Easy',
    status: 'developing',
  },
  {
    id: 3,
    worldId: 2,
    title: 'Cat Forest Path',
    stageCode: '2-1',
    difficulty: 'Normal',
    status: 'planning',
  },
  {
    id: 4,
    worldId: 2,
    title: 'Night Lamp Village',
    stageCode: '2-2',
    difficulty: 'Hard',
    status: 'testing',
  },
]