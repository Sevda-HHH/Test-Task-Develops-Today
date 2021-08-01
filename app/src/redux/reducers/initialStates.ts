import { IpostCommentState, IPostState } from "../../utils/interfaces/posts";

export const initialStatePost: IPostState = {
    error: null,
    data: [],
    status: "IDLE"
}
export const initialStateComment: IpostCommentState = {
    error: null,
    data: [],
    status: "IDLE"
}
