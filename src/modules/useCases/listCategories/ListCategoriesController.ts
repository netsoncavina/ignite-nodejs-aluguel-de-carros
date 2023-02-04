import { Request, Response } from "express";
import { CategoriesRepository } from "../../cars/repositories/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
