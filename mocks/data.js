export const alternateDate = [
  {
    id: ``,
    name: `Soup`,
    daysOfWeek: [
      { id: ``, name: `Monday`, },
      { id: ``, name: `Thuesday`, },
      { id: ``, name: `Fridey`, },
      { id: ``, name: `Sunday`, },
    ],
    eatings: [
      {
        id: ``,
        name: `Twenty third breakfast`,
        description: `What?! I am a young growing organism!`,
      },
    ],
    ingredients: [
      { id: ``, name: `Carrot`, description: ``, weight: 1000, notes: ``, },
      { id: ``, name: `Chiken`, description: ``, weight: 1500, notes: `Boil it`, },
      { id: ``, name: `Galina Blanka`, description: ``, weight: 20, notes: `Bull-bull`, },
    ],
    tags: [
      { id: ``, name: `Dinner`, description: ``, },
      { id: ``, name: `Supper`, description: ``, },
      { id: ``, name: `Strange tag`, description: `Clearly description of strange tag`, },
    ],
    receipt: `Just boil it!!!`,
  },
];

export default [
  {
    id: ``,
    name: `Monday`,
    eatings: [
      {
        id: ``,
        name: `Twenty third breakfast`,
        description: `What?! I am a young growing organism!`,
        dishes: [
          {
            id: ``,
            name: `Soup`,
            ingredients: [
              { id: ``, name: `Carrot`, description: ``, weight: 1000, notes: ``, },
              { id: ``, name: `Chiken`, description: ``, weight: 1500, notes: `Boil it`, },
              { id: ``, name: `Galina Blanka`, description: ``, weight: 20, notes: `Bull-bull`, },
            ],
            tags: [
              { id: ``, name: `Dinner`, description: ``, },
              { id: ``, name: `Supper`, description: ``, },
              { id: ``, name: `Strange tag`, description: `Clearly description of strange tag`, },
            ],
            receipt: `Just boil it!!!`,
          },
        ],
      },
    ],
  },
];
