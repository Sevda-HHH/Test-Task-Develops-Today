import { POSTS_ACTIONS } from "../../utils/enums/posts"
import { IAction } from "../../utils/interfaces/actions"
import { initialStatePost } from "./initialStates"

export const postsReducer = (state = initialStatePost, action: IAction) => {
    switch (action.type) {
        case `${POSTS_ACTIONS.GET_POSTS}_SUCCESS`:
            return {
                ...state,
                data: action.payload,
                status: "SUCCESS"
            }
        case `${POSTS_ACTIONS.GET_POSTS}_ERROR`:
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