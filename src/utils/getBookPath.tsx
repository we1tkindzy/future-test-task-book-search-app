import { AppRoute } from "constants/index";

export default (id: string) => AppRoute.BOOK.replace(/:id/, id);
