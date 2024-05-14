import { mtbdServices } from "@/service/service";

export const getGenres = async () => {
  try {
    const { genres } = await mtbdServices.getGenres();
    return genres;
  } catch (e) {
    console.log(e);
  }
};
