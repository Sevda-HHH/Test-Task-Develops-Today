import { HttpClient } from '../HttpClient'

class PostServices extends HttpClient {

    constructor() {
        super("https://simple-blog-api.crew.red");
    }
    getPosts() {
        return this.get(`posts`)
    }
    getPostsById(postId: string | number) {
        return this.get(`posts/${postId}?_embed=comments`)
    }
}

export const postServices = new PostServices();
