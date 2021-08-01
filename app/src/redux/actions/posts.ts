
import { Dispatch } from "redux";
import { postServices } from "../../services/posts";
import { POSTS_ACTIONS } from "../../utils/enums/posts";

export function getPosts() {
    return async function (dispatch: Dispatch) {
        return postServices.getPosts().
            then(res =>
                dispatch({
                    type: `${POSTS_ACTIONS.GET_POSTS}_SUCCESS`,
                    payload: res.data.reverse()
                })
            )
            .catch(err =>
                dispatch({
                    type: `${POSTS_ACTIONS.GET_POSTS}_ERROR`,
                    payload: err
                })
            )

    }
}
