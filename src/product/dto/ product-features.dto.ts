import { IsNotEmpty } from 'class-validator'

export class ProductFeaturesDTO {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string

  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string
}
