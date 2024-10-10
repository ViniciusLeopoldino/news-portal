import React, { useState } from 'react';

interface Comment {
    id: number;
    text: string;
    author: string;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    const handleAddComment = () => {
        if (newComment.trim() && author.trim()) {
            const newCommentObj: Comment = {
                id: comments.length + 1,
                text: newComment,
                author: author,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
            setAuthor('');
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <div>
                <input
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.author}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;