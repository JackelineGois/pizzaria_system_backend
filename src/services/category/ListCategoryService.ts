import prisma from "../../../prisma";

class ListCategoryService {
  async execute() {
    const category = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    console.log(category);
    return category;
  }
}

export { ListCategoryService };
