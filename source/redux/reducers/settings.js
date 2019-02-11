const initialState = {
    language: 'en',
    languages: ['en', 'es'],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'SET_LANGUAGE':
        return { ...state, language: action.payload };

    default:
        return state;
    }
};
