import prisma from "../../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListProductService {
  async execute({ category_id }: ProductRequest) {
    const findByCategory = await prisma.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return findByCategory;
  }
}

export { ListProductService };
