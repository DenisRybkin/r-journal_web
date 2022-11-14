import { UserDto } from "./UserDto";
import { PostDto } from "./PostDto";

export interface SideCommentDto {
  id: number;
  user: UserDto;
  text: string;
  post: PostDto;
}
