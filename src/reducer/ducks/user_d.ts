// import { Store } from "redux";
import Schema, { ActionI } from "reducer/schema";
import { UserI } from "reducer/schema/user_s";

/*
  constants
*/
const initialState = Schema.User;

/*
  actions
*/
// example:
// export const userSignIn = (body:SignInRequestI) => async (dispatch: Store["dispatch"]) => {
//     try {
//         dispatch({ type: SIGNIN_FETCH });
//         const { success, data, errors } = await signIn(body);
//         if (success === "true") {
//             dispatch({ type: SIGNIN_SUCCESS, payload: data });
//         } else {
//             dispatch({
//                 type: SIGNIN_FAILURE,
//                 payload: { errorMessage: errors, data: Schema.User.data }
//             });
//         }
//     } catch (error:any) {
//         dispatch({
//             type: SIGNIN_FAILURE,
//             payload: { errorMessage: error.message, data: Schema.User.data }
//         });
//     }
// }
/*
  reducer
*/
export default function reducer(state:UserI=initialState, action: ActionI){
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}
