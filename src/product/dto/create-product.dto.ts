import { Type } from 'class-transformer'
import {
  ValidateNested,
  IsArray,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsInt,
  Min,
  IsNumber,
} from 'class-validator'
import { ProductFeaturesDTO } from './ product-features.dto'
import { ProductImagesDTO } from './product-images.dto'

export class CreateProductDTO {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string

  @IsNumber()
  @Min(0.5, { message: 'The price must be a positive number' })
  price: number

  @IsInt()
  @Min(0, { message: 'The quantity must be a number equal to or greater than zero' })
  quantity: number

  @IsNotEmpty({ message: 'Description cannot be empty' })
  @MaxLength(1000, { message: 'Description cannot be longer than 1000 characters' })
  descricao: string

  @ValidateNested()
  @IsArray()
  @Type(() => ProductFeaturesDTO)
  @MinLength(3, { message: 'Product feature list must have at least 3 items' })
  features: ProductFeaturesDTO[]

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImagesDTO)
  @MinLength(1, { message: 'Product images list must have at least 1 item' })
  imagens: ProductImagesDTO[]

  @IsNotEmpty({ message: 'Category cannot be empty' })
  category: string
}
