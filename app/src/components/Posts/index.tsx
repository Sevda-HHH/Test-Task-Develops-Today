import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../utils/interfaces/states'
import './posts.scss'
import { getPosts } from '../../redux/actions/posts'
import { PostCard } from './PostCard'
import { IPosts } from '../../utils/interfaces/posts'

export const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: IState) => state.postsReducer)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (<>
        <section id="posts">
            <div className="container">
                <div className="row " id="postCards">
                    {posts.data !== undefined && posts.data.map((post: IPosts) => {
                        return <PostCard post={post} />
                    }
                    )}
                </div>
            </div>
        </section>
    </>
    )
}
