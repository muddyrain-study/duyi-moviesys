import {
  ArrayMinSize,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
  MinLength,
  max,
} from 'class-validator';
export class Movie {
  @IsNotEmpty({ message: '电影名称不能为空' })
  public name: string;

  @IsNotEmpty({ message: '电影类型不能为空' })
  @ArrayMinSize(1, { message: '电影类型至少有一个' })
  public types: string[];

  @IsNotEmpty({ message: '上映类型不可以为空' })
  @ArrayMinSize(1, { message: '上映地区至少有一个' })
  public areas: string[];

  @IsNotEmpty({ message: '上映时长不可以为空' })
  @IsInt({ message: '上映时长必须是整数' })
  @Min(1, { message: '上映时长不能小于1分钟' })
  @Max(999999, { message: '上映时长不能大于999999分钟' })
  public timeLong: number;

  @IsNotEmpty({ message: '是否热映不可以为空' })
  public isHot: boolean = false;

  @IsNotEmpty({ message: '是否即将上映不可以为空' })
  public isComing: boolean = false;

  @IsNotEmpty({ message: '是否是经典影片不可以为空' })
  public isClassic: boolean = false;

  public description?: string;

  public poster?: string;
}
