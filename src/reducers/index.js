import { FETCH_SMURF, FETCHED_SMURF, FETCH_SMURF_FAIL, ERROR, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions/index';

// added initialState
const initialState = {
    smurfs: [],
    isLoading: false,
    error:'',
}
// creating reducer to start/end api, add a smurf, and display error
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_SMURF):
            return({
                ...state,
                smurfs: [],
                isLoading: true,
                error:''
            });
        case(FETCHED_SMURF):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error:''
            }); 
        case(FETCH_SMURF_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload
            }); 
        case(ADD_SMURF_SUCCESS): 
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: '',
            });   
        case(ERROR):
            return({
                ...state,
                isLoading:false,
                error: action.payload
            })
        // case(ERROR): // CAHNGE
        //     return({
        //         ...state,
        //         smurfs: [],
        //         isLoading: false,
        //         error: action.payload // YOU NEED TO GO BACK IN AND CHANGE THIS IN YOUR ACTIONS.JS
        //     });  
        
        // case(ADD_SMURF_FAIL): 
        //     return({
        //         ...state,
        //         isLoading: false,
        //         error: action.payload
        //     });
        default:
            return state;
    }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary