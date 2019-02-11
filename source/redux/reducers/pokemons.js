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

    case 'SET_SELECTED_POKEMON':
        return { ...state, selected: action.payload };

    case 'ADD_POKEMON_DATA':
        return {
            ...state,
            details: {
                ...state.details,
                [action.payload.id]: {
                    ...state.details[action.payload.id],
                    data: {
                        ...action.payload.data,
                        ...action.payload.extra,
                    },
                },
            },
        };

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
