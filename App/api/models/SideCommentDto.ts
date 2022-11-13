import { UserDto } from "./UserDto";
import { PostDto } from "./PostDto";

export interface SideCommentDto {
  user: UserDto;
  text: string;
  post: PostDto;
}
