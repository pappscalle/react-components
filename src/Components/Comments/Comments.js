import './comments.css';

const Comments = () => {
    return <div className="comments">
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" />
        </a>
        <div className="content">
            <a href="/" className="author">
                Calle    
            </a>
            <div className="metadata">
                <span className="date">Today at 6.00PM</span>
            </div>
            <div className="text">Way to go!</div>
        </div>
    </div>
</div>
}

export default Comments;