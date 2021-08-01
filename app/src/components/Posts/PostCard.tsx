import { Button, Card } from "react-bootstrap"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from "react-router-dom";
import { IPosts } from "../../utils/interfaces/posts";
interface IProps {
    post: IPosts,
}
export const PostCard: React.FC<IProps> = ({ post }) => {
    return (
        <div className="col-lg-4">
            <Card className="w-100">
                <div className="row" style={{ padding: "0 20px", minHeight: "230px" }}>
                    <Card.Body>
                        <div className="title">
                            <h4>
                                <Link to={`/posts/${post.id}`} data-testid="title" >{post.title}</Link>
                            </h4>
                        </div>
                        <div className="readMore">
                            {post.body}
                        </div>
                        <div>
                            <Link to={`/posts/${post.id}`} className="readMore">Read more <ArrowRightAltIcon /> </Link>
                        </div>
                    </Card.Body>
                    <Card.Footer className="bg-white" style={{ width: "100%", alignSelf: "flex-end", borderTop: "none" }}>
                        <div className="cardFooter d-flex justify-content-between ">
                            <div className="likess">
                                <FavoriteBorderIcon /> <span className="likeCount">0 </span>  Likes
                            </div>
                        </div>
                    </Card.Footer>
                </div>
            </Card>
        </div >
    )
}
