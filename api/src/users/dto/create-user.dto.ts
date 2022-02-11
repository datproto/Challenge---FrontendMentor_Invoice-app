import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Post } from 'src/posts/entities/post.entity';

export class CreateUserDto {
  @ApiProperty()
  fName: string;

  @ApiProperty()
  lName: string;

  @ApiProperty()
  uName: string;

  @ApiProperty()
  birth: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, default: [], isArray: true })
  posts: Post[] = [];

  @ApiProperty({ required: false, default: true })
  isActive?: boolean = true;
}
