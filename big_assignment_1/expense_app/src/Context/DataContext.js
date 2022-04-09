import { createContext } from "react";

const data = createContext({
    expenseList: [
        {
            name: 'Some Book',
            money: 50,
            time: new Date(2022,10,16),
          },
          {
            name: 'Bicycle',
            money: 250,
            time: new Date(2021,10,16),
          },
          {
            name: 'New TV',
            money: 500,
            time: new Date(2019,10,16),
          },
    ]
});

export default data;