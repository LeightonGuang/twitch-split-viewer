import { useState, useEffect } from "react";

const DropArea = ({
  inside,
  dropAreaIndex,
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
  draggingInfo,
  setDraggingInfo,
  ...props
}: {
  inside: "streamers" | "team1Streamers" | "team2Streamers";
  dropAreaIndex: number;
  setStreamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  draggingInfo?: {
    boxIndex: number;
    from: "streamers" | "team1Streamers" | "team2Streamers";
  } | null;
  setDraggingInfo?: React.Dispatch<
    React.SetStateAction<{
      boxIndex: number;
      from: "streamers" | "team1Streamers" | "team2Streamers";
    } | null>
  >;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!draggingInfo) {
      setShow(false);
    }
  }, [draggingInfo]);

  // If we are showing "streamers" and the drag source is "streamers",
  // and dropAreaIndex matches draggingInfo.boxIndex or draggingInfo.boxIndex + 1,
  // then hiding it/disabling it makes sense because dropping it there is a no-op visually.
  const isSelf =
    draggingInfo?.from === inside &&
    (dropAreaIndex === draggingInfo.boxIndex ||
      dropAreaIndex === draggingInfo.boxIndex + 1);

  const onDragEnter = () => {
    if (isSelf) return;
    setShow(true);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShow(false);
    setDraggingInfo?.(null);

    const draggedChannel: {
      channelName: string;
      boxIndex: number;
      from: "streamers" | "team1Streamers" | "team2Streamers";
    } = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (draggedChannel.from === "streamers" && setStreamers) {
      setStreamers((prevStreamers) => {
        const updatedStreamers = [...prevStreamers].filter(
          (s) => s !== draggedChannel.channelName,
        );
        // updatedStreamers.splice(draggedChannel.boxIndex, 1);

        if (inside === "streamers") {
          // If we drag from index 2 and drop at index 5 (which becomes 4 after removal),
          // we need to adjust drop index if removal shifted indices.
          // BUT, `updatedStreamers` already has item removed.
          // If I drop at index 0: splice(0, 0, item) -> [item, ...] OK.
          // If I drop at index 1 (originally below item 0):
          //   Original: [A, B, C] -> Drag A (idx 0). Drop at idx 1 (below A).
          //   Removed: [B, C].
          //   Drop at 1?? Wait. In original list, drop area 1 is between A and B.
          //   If I drop "A" at area 1, it should just stay at A.
          //   That's why `isSelf` check above handles UI.
          //   Logic-wise: if dropAreaIndex > draggedChannel.boxIndex, we need to decrement dropAreaIndex because one item was removed before it?
          //   Actually, let's keep logic simple:
          //   We splice into the filtered list.
          //   If we drag from 0 to 2 (between B and C):
          //     Filtered: [B, C]
          //     target index in filtered list?
          //     DropArea 2 in original list was after B.
          //     In filtered list, B is at 0. After B is index 1.
          //     So if dragged from < dropIndex, we decrement dropIndex.
          let finalIndex = dropAreaIndex;
          if (
            draggedChannel.from === inside &&
            draggedChannel.boxIndex < dropAreaIndex
          ) {
            finalIndex--;
          }
          updatedStreamers.splice(finalIndex, 0, draggedChannel.channelName);
        }
        return updatedStreamers;
      });
    } else if (
      draggedChannel.from === "team1Streamers" &&
      setTeam1Streamers &&
      setTeam2Streamers
    ) {
      setTeam1Streamers((prevStreamers) => {
        const updatedStreamers = [...prevStreamers];
        updatedStreamers.splice(draggedChannel.boxIndex, 1);
        return updatedStreamers;
      });

      if (inside === "team1Streamers") {
        setTeam1Streamers((prevStreamers) => {
          const updatedStreamers = [...prevStreamers];
          let finalIndex = dropAreaIndex;
          // same logic if moving within same list
          if (
            draggedChannel.from === inside &&
            draggedChannel.boxIndex < dropAreaIndex
          ) {
            finalIndex--;
          }
          updatedStreamers.splice(finalIndex, 0, draggedChannel.channelName);
          return updatedStreamers;
        });
      } else if (inside === "team2Streamers") {
        setTeam2Streamers((prevStreamers) => {
          const updatedStreamers = [...prevStreamers];
          updatedStreamers.splice(dropAreaIndex, 0, draggedChannel.channelName);
          return updatedStreamers;
        });
      }
    } else if (
      draggedChannel.from === "team2Streamers" &&
      setTeam1Streamers &&
      setTeam2Streamers
    ) {
      setTeam2Streamers((prevStreamers) => {
        const updatedStreamers = [...prevStreamers];
        updatedStreamers.splice(draggedChannel.boxIndex, 1);
        return updatedStreamers;
      });

      if (inside === "team1Streamers") {
        setTeam1Streamers((prevStreamers) => {
          const updatedStreamers = [...prevStreamers];
          updatedStreamers.splice(dropAreaIndex, 0, draggedChannel.channelName);
          return updatedStreamers;
        });
      } else if (inside === "team2Streamers") {
        setTeam2Streamers((prevStreamers) => {
          const updatedStreamers = [...prevStreamers];
          let finalIndex = dropAreaIndex;
          if (
            draggedChannel.from === inside &&
            draggedChannel.boxIndex < dropAreaIndex
          ) {
            finalIndex--;
          }
          updatedStreamers.splice(finalIndex, 0, draggedChannel.channelName);
          return updatedStreamers;
        });
      }
    }
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    setShow(false);
  };

  const getDropAreaClass = () => {
    if (isSelf) {
      return "h-2 opacity-0 pointer-events-none border-0 p-0 overflow-hidden";
    }
    if (show) {
      return "flex h-14 items-center justify-center rounded-md border-2 border-purple-500 py-2";
    }
    if (draggingInfo) {
      return "flex h-4 items-center justify-center rounded-md border-2 border-dashed border-gray-600 bg-gray-800/30 opacity-70";
    }
    return "h-2";
  };

  return (
    <div
      {...props}
      className={`w-full transition-all duration-150 ${getDropAreaClass()}`}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    >
      {(show || (draggingInfo && !isSelf)) && (
        <div className="pointer-events-none text-xs text-white opacity-70">
          {show ? "Drop here" : ""}
        </div>
      )}
    </div>
  );
};

export default DropArea;
