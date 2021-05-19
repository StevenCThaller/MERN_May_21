export const truckReducer = (state, action) => {
    switch(action.type){
        case "removeReview":
            return {
                ...state,
                reviews: state.reviews.filter(rev => rev._id !== action.payload)
            }
        case "reset":
            return action.payload;
        default: 
            return {
                ...state,
                [action.type]: action.payload
            }
    }
}