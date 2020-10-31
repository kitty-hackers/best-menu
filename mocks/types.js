const baseEntry = {
  id: ``,
  name: ``,
};

const entryType = {
  ...baseEntry,
  description: ``,
};

export const dayOfWeek = { ...entryType, };

export const daysOfWeek = [ dayOfWeek, ];

// name as "Breakfast", "Dinner", "Supper", "Launch" etc.
export const eatingType = { ...entryType, order: 0, };

export const ingredientType = { ...entryType, };

// It may be "first course", "second course", "garnish", "salad" etc.
export const tagsType = { ...entryType, };

export const foodType = {
  ...baseEntry,
  ingredients: [
    {
      id: ``, // ingredientType.id
      weight: 0,
      notes: ``,
    },
    // ...
  ],
  tags: [
    // array of tagsType.id
  ],
  receipt: ``,
};

export const weekSchedule = [
  {
    id: ``, // dayOfWeek.id
    // breakfast, dinner, supper etc
    eatings: [
      {
        id: ``, // eatingType.id
        dishes: [
          // array of foodType.id
        ],
      },
      // ...
    ],
  },
  // ...
];
