import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment";

import { comment } from "../../database/comment";

import styles from "./Post.module.css";
import {
  IPostDTO,
  IPostContentDTO,
  IPostCommentsDTO,
} from "../../database/dtos/PostDTOs";

function Post({ id: postId, author, content, publishedAt }: IPostDTO) {
  const { avatarUrl, name, role } = author;

  const [comments, setComments] = useState<IPostCommentsDTO[]>(comment);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    const newComment = {
      id: uuidV4(),
      parentPostId: postId,
      author: {
        name: "Marcos Uchoa",
        avatarUrl:
          "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50",
      },
      comment: newCommentText,
      commentAt: new Date(),
      likes: 0,
    };
    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleDeleteComment(commentId: string) {
    setComments(comments.filter((comment) => comment.id !== commentId));
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
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
          ({ id, type, content }: IPostContentDTO) =>
            type === "paragraph" && <p key={id}>{content}</p>
        )}
        <p className={styles.contact}>
          {content.map(
            ({ id, type, content }) =>
              type === "link" && (
                <a href="#" key={id}>
                  {content}
                </a>
              )
          )}
        </p>
        <div className={styles.hash}>
          {content.map(
            ({ id, type, content }) =>
              type === "tag" && (
                <a href="#" key={id}>
                  {content}
                </a>
              )
          )}
        </div>
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentText}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commnetList}>
        {comments.map(
          ({
            id: commentId,
            author,
            likes,
            comment,
            commentAt,
            parentPostId,
          }) => {
            if (parentPostId === postId)
              return (
                <Comment
                  key={commentId}
                  author={author}
                  likes={likes}
                  comment={comment}
                  commentAt={commentAt}
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
