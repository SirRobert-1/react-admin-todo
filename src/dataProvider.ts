import fakeRestDataProvider from "ra-data-fakerest";

const data = {
  "todos": [
    {
      "id": 0,
      "title": "Wash the dishes",
      "completed": false
    },
    {
      "id": 1,
      "title": "Do the laundry",
      "completed": true
    },
    {
      "id": 2,
      "title": "Buy groceries",
      "completed": false
    }]
};

export const dataProvider = fakeRestDataProvider(
  data,
  process.env.NODE_ENV !== "test",
);
