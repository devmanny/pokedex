const initialState = {
    list: [],
    details: {},
    selected: null,
    search: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'SEARCH_POKEMON':
        return { ...state, search: action.payload };

    case 'ADD_POKEMON_DATA':
        return {
            ...state,
            list: {
                ...state.list,
                [action.payload.id]: action.payload,
            },
        };

    case 'ADD_POKEMON_LIST_FROM_OBJECT':
        return { ...state, selected: action.payload };

    case 'ADD_POKEMON_LIST_FROM_ARRAY':
        return { ...state, selected: action.payload };

    case 'SET_POKEMON_LIST':
        return {
            ...state,
            list: action.payload.raw,
            details: action.payload.indexed,
        };

    default:
        return state;
    }
};
