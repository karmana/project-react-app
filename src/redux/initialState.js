const initialState = {
    columns: [
      {
        id: 1,
        listId: 1,
        title: 'Books',
        icon: 'book',
      },
      {
        id: 2,
        listId: 1,
        title: 'Movies',
        icon: 'film',
      },
      {
        id: 3,
        title: 'Games',
        icon: 'gamepad',
        listId: 1,
      },
      {
        id: 4,
        title: 'Test listy 2',
        icon: 'test',
        listId: 2,
      }

    ],
  
    cards: [
      { id: 1, columnId: 1, title: 'This is Going to Hurt', isFavorite: true },
      { id: 2, columnId: 1, title: 'Interpreter of Maladies', isFavorite: false },
      { id: 3, columnId: 2, title: 'Harry Potter', isFavorite: false },
      { id: 4, columnId: 2, title: 'Star Wars', isFavorite: false },
      { id: 5, columnId: 3, title: 'The Witcher', isFavorite: false },
      { id: 6, columnId: 3, title: 'Skyrim', isFavorite: false },
      { id: 7, columnId: 4, title: 'Hawk', isFavorite: true},
    ],
  
    searchString: '',

    lists: [
      {
        id: '1',
        title: 'Things to do...',
        description: 'Interesting things I want to check out',
      },
     {
        id: '2',
        title: 'Test list',
        description: 'Lorem Ipsum',
     }
   ],

  };
  
  export default initialState;
  