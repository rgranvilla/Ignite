import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import { comment } from '../../comment';

import styles from './Post.module.css';

function Post({ data }) {
  const [comments, setComments] = useState(comment);
  const [newCommentText, setNewCommentText] = useState('');

  const { author, content, publishedAt } = data;
  const { avatarUrl, name, role } = author;

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    const newComment = {
      id: uuidV4(),
      postId: data.id,
      author: {
        name: 'Marcos Uchoa',
        avatarUrl:
          'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50'
      },
      comment: newCommentText,
      commentAt: new Date(),
      likes: 0
    };
    setComments([...comments, newComment]);
    setNewCommentText('');
  }

  function handleNewCommentText(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleDeleteComment(commentId) {
    setComments(comments.filter(comment => comment.id !== commentId));
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time
          className={styles.postTime}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(
          ({ id, type, content }) =>
            type === 'paragraph' && <p key={id}>{content}</p>
        )}
        <p className={styles.contact}>
          {content.map(
            ({ id, type, content }) =>
              type === 'link' && (
                <a href="#" key={id}>
                  {content}
                </a>
              )
          )}
        </p>
        <div className={styles.hash}>
          {content.map(
            ({ id, type, content }) =>
              type === 'tag' && (
                <a href="#" key={id}>
                  {content}
                </a>
              )
          )}
        </div>
      </div>

      <form
        className={styles.commentForm}
        onSubmit={event => handleCreateNewComment(event)}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={event => handleNewCommentText(event)}
          placeholder="Deixe um comentário"
          required
          onInvalid={event => handleNewCommentInvalid(event)}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commnetList}>
        {comments.map(
          ({ id: commentId, author, likes, comment, commentAt, postId }) => {
            const relativePost = Number(data.id);
            if (postId === relativePost)
              return (
                <Comment
                  key={commentId}
                  author={author}
                  likes={likes}
                  comment={comment}
                  commentAt={commentAt}
                  postId={postId}
                  onDelete={() => handleDeleteComment(commentId)}
                />
              );
          }
        )}
      </div>
    </article>
  );
}

export { Post };
