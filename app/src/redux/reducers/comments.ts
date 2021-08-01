import { COMMENTS_ACTIONS, POSTS_ACTIONS } from "../../utils/enums/posts"
import { IAction } from "../../utils/interfaces/actions"
import { initialStateComment, initialStatePost } from "./initialStates"

export const commentsReducer = (state = initialStateComment, action: IAction) => {
    switch (action.type) {
        case `${COMMENTS_ACTIONS.ADD_COMMENT}_SUCCESS`:
            console.log(state.data);

            return {
                ...state,
                data: [...state.data, action.payload],
                status: "SUCCESS"
            }
        case `${COMMENTS_ACTIONS.ADD_COMMENT}_ERROR`:
            return {
                ...state,
                data: [],
                status: "ERROR",
                error: action.payload
            }
        default:
            return state
    }
}