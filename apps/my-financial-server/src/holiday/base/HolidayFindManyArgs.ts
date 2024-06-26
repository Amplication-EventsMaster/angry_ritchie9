/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HolidayWhereInput } from "./HolidayWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HolidayOrderByInput } from "./HolidayOrderByInput";

@ArgsType()
class HolidayFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HolidayWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HolidayWhereInput, { nullable: true })
  @Type(() => HolidayWhereInput)
  where?: HolidayWhereInput;

  @ApiProperty({
    required: false,
    type: [HolidayOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HolidayOrderByInput], { nullable: true })
  @Type(() => HolidayOrderByInput)
  orderBy?: Array<HolidayOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HolidayFindManyArgs as HolidayFindManyArgs };
