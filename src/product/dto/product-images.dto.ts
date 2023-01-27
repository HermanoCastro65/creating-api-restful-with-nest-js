import { IsNotEmpty, IsUrl } from 'class-validator'

export class ProductImagesDTO {
  @IsNotEmpty({ message: 'Url cannot be empty' })
  @IsUrl()
  url: string

  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string
}
