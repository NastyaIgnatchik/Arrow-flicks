import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import "../styles/search.css";

export function SearchMovie({ value, setValue, setConfirmSearch }) {
  return (
    <div className="w-full sm:w-[50%]">
      <TextInput
        size="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Search movie title"
        rightSectionWidth={100}
        leftSection={
          <IconSearch
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
        rightSection={
          <Button
            style={{
              marginRight: "12px",
            }}
            onClick={setConfirmSearch}
            radius={8}
            variant="filled"
            color={"#9854F6"}
            size="sm"
          >
            Search
          </Button>
        }
      />
    </div>
  );
}
