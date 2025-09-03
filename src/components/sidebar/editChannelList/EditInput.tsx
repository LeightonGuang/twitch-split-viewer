import { useEffect, useRef } from "react";
import Button from "../../Button";
import { SearchIconSvg } from "../../../assets/Icons";

const EditInput = ({
  boxIndex,
  defaultValue,
  isEditing,
  setIsEditing,
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
  ...props
}: {
  boxIndex: number;
  defaultValue: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setStreamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
} & React.ComponentProps<"input">) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    const newChannel = inputRef.current?.value.trim();

    if (newChannel === "") return;

    if (newChannel && setStreamers) {
      setStreamers((prevStreamers) => {
        const newStreamers = [...prevStreamers];
        newStreamers[boxIndex] = newChannel;
        return newStreamers;
      });
    } else if (newChannel && setTeam1Streamers) {
      setTeam1Streamers((prevStreamers) => {
        const newStreamers = [...prevStreamers];
        newStreamers[boxIndex] = newChannel;
        return newStreamers;
      });
    } else if (newChannel && setTeam2Streamers) {
      setTeam2Streamers((prevStreamers) => {
        const newStreamers = [...prevStreamers];
        newStreamers[boxIndex] = newChannel;
        return newStreamers;
      });
    }

    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  return (
    <div className="flex w-full items-center">
      <input
        {...props}
        className="z-10 w-28 rounded-l-[0.375rem] border-1 border-[#d4d4d6] bg-[#18181a] px-[0.625rem] py-[0.3125rem] text-[0.875rem] font-normal text-[#eeeef1] placeholder-[#959595] outline-none hover:border-[#858488] focus:border focus:border-[#a674f1] focus:ring-2 focus:ring-[#a674f1]"
        defaultValue={defaultValue}
        placeholder="Search"
        ref={inputRef}
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleOnClick();
          if (e.key === "Escape") setIsEditing(false);
        }}
      />

      <Button
        className="z-0 rounded-l-none rounded-r-[0.375rem] py-2 leading-normal"
        title="Search"
        onClick={handleOnClick}
      >
        <SearchIconSvg className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EditInput;
