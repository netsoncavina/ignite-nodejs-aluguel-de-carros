import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../modules/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

categoriesRoutes.get("/:name", (request, response) => {
  const { name } = request.params;
  const category = categoriesRepository.findByName(name);
  return response.json(category);
});

export { categoriesRoutes };
