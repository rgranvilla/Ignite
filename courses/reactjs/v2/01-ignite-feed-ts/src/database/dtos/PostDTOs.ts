export interface IPostAuthorDTO {
  avatarUrl: string;
  name: string;
  role?: string;
}

export interface IPostContentDTO {
  id: string;
  type: string;
  content: string;
}

export interface IPostCommentsDTO {
  id: string;
  parentPostId: string;
  author: IPostAuthorDTO;
  comment: string;
  commentAt: Date;
  likes: number;
}
[];

export interface IPostDTO {
  id: string;
  author: IPostAuthorDTO;
  content: IPostContentDTO[];
  publishedAt: Date;
}
