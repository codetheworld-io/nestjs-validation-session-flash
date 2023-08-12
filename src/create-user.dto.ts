import {
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  name: string;

  @IsNumber()
  @Min(10)
  @Max(50)
  age: number;
}
