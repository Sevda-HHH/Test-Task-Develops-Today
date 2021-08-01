import { HttpClient } from '../HttpClient'
import { IPostCommentPayload } from '../utils/interfaces/posts';

class CommentServices extends HttpClient {

    constructor() {
        super("https://simple-blog-api.crew.red");
    }
    addComment(data: IPostCommentPayload) {
        return this.post(`comments`, data)
    }
}

export const commentServices = new CommentServices();
