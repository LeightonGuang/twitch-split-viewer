import { useState } from "react";

const DropArea = ({
  inside,
  dropAreaIndex,
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
  ...props
}: {
  inside: "streamers" | "team1Streamers" | "team2Streamers";
  dropAreaIndex: number;
  setStreamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [show, setShow] = useState(false);

  return (
    <div
      {...props}
      className={`w-full text-white ${show ? "h-10 rounded-md border-1 border-purple-500 py-2" : "h-2"}`}
      onDragEnter={(e) => {
        e.preventDefault();
        setShow(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={(e) => {
        e.preventDefault();
        setShow(false);

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
            updatedStreamers.splice(draggedChannel.boxIndex, 1);

            if (inside === "streamers") {
              updatedStreamers.splice(
                dropAreaIndex,
                0,
                draggedChannel.channelName,
              );
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
              updatedStreamers.splice(
                dropAreaIndex,
                0,
                draggedChannel.channelName,
              );
              return updatedStreamers;
            });
          } else if (inside === "team2Streamers") {
            setTeam2Streamers((prevStreamers) => {
              const updatedStreamers = [...prevStreamers];
              updatedStreamers.splice(
                dropAreaIndex,
                0,
                draggedChannel.channelName,
              );
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
              updatedStreamers.splice(
                dropAreaIndex,
                0,
                draggedChannel.channelName,
              );
              return updatedStreamers;
            });
          } else if (inside === "team2Streamers") {
            setTeam2Streamers((prevStreamers) => {
              const updatedStreamers = [...prevStreamers];
              updatedStreamers.splice(
                dropAreaIndex,
                0,
                draggedChannel.channelName,
              );
              return updatedStreamers;
            });
          }
        }
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setShow(false);
      }}
    />
  );
};

export default DropArea;
