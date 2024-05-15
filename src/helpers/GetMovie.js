import { mtbdServices } from "@/service/service";

export const getMovie = async (id) => {
  try {
    const response = await mtbdServices.getMovie(id);

    return response;
  } catch (e) {
    return { message: e.message };
  }
};
