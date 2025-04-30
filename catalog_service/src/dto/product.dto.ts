import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator'

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string
  @IsString()
  description: string
  @IsNumber()
  stock: number
  @Min(1)
  @IsNumber()
  price: number
}
export class UpdateProductRequest {
  @IsOptional()
  name: string
  @IsOptional()
  description: string
  @IsOptional()
  stock: number
  @Min(1, { message: 'Price should be greater than 0' })
  @IsOptional()
  price: number
}
