import { UserDto } from "./UserDto";

export interface CommentDto {
  id: number;
  user: UserDto;
  text: string;
  createdAt: string;
}
