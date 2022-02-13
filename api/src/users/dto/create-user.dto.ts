import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsEmail, IsNotEmpty, ValidateIf } from 'class-validator';
import { Post } from 'src/posts/entities/post.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  fName: string;

  @ApiProperty()
  @IsNotEmpty()
  lName: string;

  @ApiProperty()
  @IsNotEmpty()
  uName: string;

  @ApiProperty()
  @IsNotEmpty()
  birth: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty('')
  @ValidateIf((o) => !o.phone || o.email)
  @IsEmail()
  email: string;

  // @ApiProperty({ required: false, default: [], isArray: true })
  // posts: Post[] = [];

  // @ApiProperty({ required: false, default: true })
  // isActive?: boolean = true;
}
