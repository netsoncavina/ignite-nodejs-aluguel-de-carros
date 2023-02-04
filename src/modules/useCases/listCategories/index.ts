import { CategoriesRepository } from "../../cars/repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

const listCategoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository
);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
