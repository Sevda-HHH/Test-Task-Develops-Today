export interface IPosts {
    id: string | number,
    title: string,
    body: string,
    comments: IPostComment[]
}
export interface IPostPayload {
    title: string,
    body: string
}

export interface IPostComment {
    id: string | number,
    postId: string | number,
    body: string
}
export interface IPostCommentPayload {
    postId: string | number,
    body: string
}

export interface IPostState {
    error: null | string,
    data: IPosts[],
    status: string
}

export interface IpostCommentState {
    error: null | string,
    data: IPostComment[],
    status: string
}

