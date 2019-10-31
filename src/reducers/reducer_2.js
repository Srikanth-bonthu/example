let Books={Books:[
  {
    author: "Chinua Achebe",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958
  },
  {
    author: "Hans Christian Andersen",
    pages: 784,
    title: "Fairy tales",
    year: 1836
  },
  {
    author: "Dante Alighieri",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315
  },
  {
    author: "Unknown",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700
  },
  {
    author: "Jane Austen",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813
  },
  {
    author: "Honor\u00e9 de Balzac",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    year: 1835
  }
  ]
}
export default function (state =Books , action) {
  console.log(action.type);
  switch (action.type) {
        case "Add_Book":
          return Object.assign({}, state,{ 
           Books: [
              ...state.Books,
              {
                title:action.text1,
                author:action.text2,
                pages: action.text3,
                year: action.text4,
              }
            ]}
          );
    default:
      return state;
  }
}