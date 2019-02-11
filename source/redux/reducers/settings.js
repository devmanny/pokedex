const initialState = {
    colors: {},
    language: 'En',
    languages: ['En', 'Es'],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'SET_LANGUAGE':
        return { ...state };

    default:
        return state;
    }
};
