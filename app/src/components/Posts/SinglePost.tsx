import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../utils/interfaces/states'
import { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getPosts } from '../../redux/actions/posts'
import { IPostComment, IPosts } from '../../utils/interfaces/posts'
import { postServices } from '../../services/posts';
import { Comment } from './Comments';
import { AddComment } from './Comments/AddComment';

export const SinglePost = () => {
    const { postId } = useParams<{ postId: string }>()
    let count = 0

    const [singlePost, setSinglePost] = useState({
        body: "",
        comments: [],
        id: 0,
        title: ""
    })

    useEffect(() => {
        postServices.getPostsById(postId).then(res => setSinglePost(res.data))
    }, [singlePost.comments])

    return (
        <section id="posts">
            <div className="container">
                <div className="row singleBlogContent justify-content-center">
                    <div className="col-lg-7 mt-5">
                        <div className="singleCardHead d-flex justify-content-between ">
                            <div className="likess">
                                <FavoriteBorderIcon /> <span className="likeCount">0 </span> Likes
                            </div>
                        </div>
                        {singlePost !== undefined &&

                            (
                                <>
                                    <div className="title">
                                        {singlePost.title}
                                    </div>
                                    <div className="mt-3 smallDesSingle w-100">
                                        <h5 >
                                            {singlePost.body}
                                        </h5>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Comments</h1>
                <div className="comments" style={{ height: "400px", overflowY: "scroll" }}>
                    {
                        singlePost.comments !== null && (
                            singlePost.comments.map(comment => {
                                count = count + 1
                                return <Comment comment={comment} count={count} />
                            })
                        )
                    }
                </div>
            </div>
            <div className="container">
                <AddComment postId={postId} />
            </div>
        </section>
    )
}