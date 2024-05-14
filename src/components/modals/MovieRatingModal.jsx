import StarIcon from "@/components/icons/StarIcon";
import { useEffect } from "react";

export default function MovieRatingModal({
  starId,
  movieEstimate,
  setMovieEstimate,
  isSave,
  setIsSave,
  savedMovieEstimate,
  setSavedMovieEstimate,
  id,
  movie,
  getStorageData,
}) {
  const starsEstimate = () => {
    if (starId === movieEstimate)
      setMovieEstimate((selectedStar) => selectedStar - 1);
    else setMovieEstimate(starId);
    setIsSave(false);
  };

  useEffect(() => {
    if (isSave) {
      setSavedMovieEstimate(movieEstimate);
      localStorage.setItem(
        `${id}`,
        JSON.stringify({ movie, average: movieEstimate })
      );
      if (getStorageData) {
        getStorageData();
      }
    }
  }, [isSave]);

  useEffect(() => {
    let value;
    value = JSON.parse(localStorage.getItem(`${id}`));
    setMovieEstimate(value?.average);
    if (savedMovieEstimate === 0) {
      localStorage.removeItem(`${id}`);
    }
  }, [savedMovieEstimate]);

  const starBg = starId <= movieEstimate ? "#FAB005" : "#D5D6DC";

  return (
    <div onClick={starsEstimate}>
      <StarIcon color={starBg} />
    </div>
  );
}
