import prisma from "../../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {

    const parsedPrice = parseFloat(price);
    
    if (isNaN(parsedPrice)) {
      throw new Error("Price must be a valid number");
    }

    const product = await prisma.product.create({
      data: {
        name: name,
        price: parsedPrice,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });
    return product;
  }
}

export { CreateProductService };
