import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateProductDTO } from './dto/create-product.dto'
import { ProductRepository } from './product.repository'

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    this.productRepository.save(productData)
    return productData
  }

  @Get()
  async listProducts() {
    this.productRepository.list()
  }
}
