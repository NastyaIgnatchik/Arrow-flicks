import { mtbdServices } from "@/service/service";

export const getMovie = async (id) => {
  try {
    const response = await mtbdServices.getMovie(id);
    if (!response) {
      throw new Error("no response");
    }
    return response;
  } catch (e) {
    return e;
  }
};
