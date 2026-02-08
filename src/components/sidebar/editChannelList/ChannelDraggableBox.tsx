import { useState } from "react";
import EditInput from "./EditInput";
import { CloseIconSvg, DragIconSvg } from "../../../assets/Icons";

const ChannelDraggableBox = ({
  from,
  channel,
  boxIndex,
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
  setDraggingInfo,
}: {
  from: "streamers" | "team1Streamers" | "team2Streamers";
  channel: string;
  boxIndex: number;
  setStreamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setDraggingInfo?: React.Dispatch<
    React.SetStateAction<{
      boxIndex: number;
      from: "streamers" | "team1Streamers" | "team2Streamers";
    } | null>
  >;
}) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="flex h-min w-full items-center gap-2 rounded-md bg-[#27262c] p-2"
      draggable={isDraggable}
      onDragStart={(e) => {
        setDraggingInfo?.({
          boxIndex,
          from,
        });
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({
            channelName: channel,
            boxIndex: boxIndex,
            from: from,
          }),
        );
      }}
      onDragEnd={() => {
        setDraggingInfo?.(null);
      }}
    >
      <DragIconSvg
        color="#fff"
        className="h-4 w-4 cursor-grab"
        onMouseOver={() => setIsDraggable(true)}
        onMouseLeave={() => setIsDraggable(false)}
      />
      <div className="flex h-min w-full items-center justify-between">
        <div className="text-[0.875rem] font-semibold">
          {isEditing ? (
            <EditInput
              defaultValue={channel}
              boxIndex={boxIndex}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              setStreamers={setStreamers}
              setTeam1Streamers={setTeam1Streamers}
              setTeam2Streamers={setTeam2Streamers}
            />
          ) : (
            <div
              onClick={() => {
                setIsEditing(true);
              }}
              title="Edit Channel"
            >
              {channel || (
                <span className="font-medium text-gray-500">Empty</span>
              )}
            </div>
          )}
        </div>

        <button
          className="flex cursor-pointer justify-end rounded-sm bg-none p-1 hover:bg-[#3c3c44]"
          title="Remove channel"
          onClick={() => {
            if (setStreamers) {
              setStreamers((prev) => prev.filter((c) => c !== channel));
            } else if (setTeam1Streamers) {
              setTeam1Streamers((prev) => prev.filter((c) => c !== channel));
            } else if (setTeam2Streamers) {
              setTeam2Streamers((prev) => prev.filter((c) => c !== channel));
            }
          }}
        >
          <CloseIconSvg className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ChannelDraggableBox;
