import { Loader } from "@mantine/core";

export function MovieLoader() {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <Loader color="blue" />
    </div>
  );
}
