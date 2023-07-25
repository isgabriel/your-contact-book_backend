import { Router } from "express";

const contactRoutes = Router();

contactRoutes.post("");
contactRoutes.get("");
contactRoutes.patch("/:id");
contactRoutes.delete("/:id");

export { contactRoutes };
