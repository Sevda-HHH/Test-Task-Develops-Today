
import { Dispatch } from "redux";
import { commentServices } from "../../services/comments";
import { COMMENTS_ACTIONS } from "../../utils/enums/posts";
import { IPostCommentPayload } from "../../utils/interfaces/posts";

export function addComment(data: IPostCommentPayload) {
    return async function (dispatch: Dispatch) {
        return commentServices.addComment(data).
            then(res =>

                dispatch({
                    type: `${COMMENTS_ACTIONS.ADD_COMMENT}_SUCCESS`,
                    payload: res.data,
                })
            )
            .catch(err =>
                dispatch({
                    type: `${COMMENTS_ACTIONS.ADD_COMMENT}_ERROR`,
                    payload: err
                })
            )

    }
}
