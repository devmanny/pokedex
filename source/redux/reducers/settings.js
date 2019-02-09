const initialState = {
    colors: {},
    language: 'en',
    languages: { 
        'en': {
            name: "en",
        }
    }
};

export default (state = initialState, action) => {
  switch (action.type) {

  case 'SEARCH':
      return { ...state };

  case 'ADD_CONDOMINIUM':
      return { ...state, list: { ...state.list, [action.payload._id]: action.payload } };

  case 'SET_CONDOMINIUM':
      return { ...state, selected: action.payload };

  case 'SET_CONDOMINIUM_LIST':
      return { ...state, list: { ...state.list, ...action.payload } };

  default:
      return state;
  }
};
