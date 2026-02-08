import React from "react";
import DropArea from "./DropArea";
import ViewModeToggle from "./ViewModeToggle";
import ChannelContainer from "./ChannelContainer";
import ChannelDraggableBox from "./ChannelDraggableBox";

const EditChannelList = ({
  streamers,
  setStreamers,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  isGridViewMode,
  isTeamViewMode,
}: {
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  isGridViewMode: boolean;
  isTeamViewMode: boolean;
}) => {
  const [draggingInfo, setDraggingInfo] = React.useState<{
    boxIndex: number;
    from: "streamers" | "team1Streamers" | "team2Streamers";
  } | null>(null);

  const hasChannels =
    streamers.length > 0 ||
    team1Streamers.length > 0 ||
    team2Streamers.length > 0;

  const AddButton = ({ ...props }: React.ComponentProps<"button">) => (
    <button
      {...props}
      className={`flex justify-center rounded-md bg-[#27262c] p-2 hover:cursor-pointer hover:bg-[#36353b] ${streamers.length === 1 && "mt-2"}`}
    >
      <span className="text-[0.875rem] font-semibold">+ Add</span>
    </button>
  );

  return (
    <div className="h-full overflow-y-auto bg-[#0e0e10] dark:[color-scheme:dark]">
      <ViewModeToggle
        streamers={streamers}
        setStreamers={setStreamers}
        team1Streamers={team1Streamers}
        setTeam1Streamers={setTeam1Streamers}
        team2Streamers={team2Streamers}
        setTeam2Streamers={setTeam2Streamers}
        isGridViewMode={isGridViewMode}
        isTeamViewMode={isTeamViewMode}
      />

      {hasChannels ? (
        isGridViewMode ? (
          <>
            <div className="m-4">
              <h2 className="text-lg font-medium text-[#efeff1]">Streamers</h2>
              <p className="text-sm text-[#adadb8]">
                Add, edit, reorder and remove streamers here
              </p>
            </div>

            <ChannelContainer>
              {streamers.map((streamer, i) => (
                <React.Fragment key={i}>
                  {streamers.length > 1 && (
                    <DropArea
                      inside="streamers"
                      dropAreaIndex={i}
                      setStreamers={setStreamers}
                      draggingInfo={draggingInfo}
                      setDraggingInfo={setDraggingInfo}
                    />
                  )}

                  {
                    <ChannelDraggableBox
                      from="streamers"
                      channel={streamer}
                      boxIndex={i}
                      setStreamers={setStreamers}
                      setDraggingInfo={setDraggingInfo}
                    />
                  }
                </React.Fragment>
              ))}

              {streamers.length > 1 && (
                <DropArea
                  inside="streamers"
                  dropAreaIndex={streamers.length}
                  setStreamers={setStreamers}
                  draggingInfo={draggingInfo}
                  setDraggingInfo={setDraggingInfo}
                />
              )}

              {streamers.length < 12 && (
                <AddButton
                  onClick={() => {
                    if (!streamers.includes(""))
                      setStreamers([...streamers, ""]);
                  }}
                />
              )}
            </ChannelContainer>
          </>
        ) : isTeamViewMode ? (
          <>
            <div className="m-4">
              <h2 className="text-lg font-medium text-[#efeff1]">Team 1</h2>
              <p className="text-sm text-[#adadb8]">
                Edit, add, reorder and remove streamers here
              </p>
            </div>

            <ChannelContainer>
              <DropArea
                inside="team1Streamers"
                dropAreaIndex={0}
                setTeam1Streamers={setTeam1Streamers}
                setTeam2Streamers={setTeam2Streamers}
                draggingInfo={draggingInfo}
                setDraggingInfo={setDraggingInfo}
              />

              {team1Streamers.length > 0 ? (
                team1Streamers.map((streamer, i) => (
                  <React.Fragment key={i}>
                    <ChannelDraggableBox
                      from="team1Streamers"
                      boxIndex={i}
                      channel={streamer}
                      setTeam1Streamers={setTeam1Streamers}
                      setDraggingInfo={setDraggingInfo}
                    />
                    <DropArea
                      inside="team1Streamers"
                      dropAreaIndex={i + 1}
                      setTeam1Streamers={setTeam1Streamers}
                      setTeam2Streamers={setTeam2Streamers}
                      draggingInfo={draggingInfo}
                      setDraggingInfo={setDraggingInfo}
                    />
                  </React.Fragment>
                ))
              ) : (
                <span className="mb-2 text-sm text-[#adadb8]">
                  No channels in team 1
                </span>
              )}

              {team1Streamers.length < 6 && (
                <AddButton
                  onClick={() => {
                    if (!team1Streamers.includes(""))
                      setTeam1Streamers([...team1Streamers, ""]);
                  }}
                />
              )}
            </ChannelContainer>

            <h2 className="m-4 text-lg font-medium text-[#efeff1]">Team 2</h2>

            <ChannelContainer>
              <DropArea
                inside="team2Streamers"
                dropAreaIndex={0}
                setTeam1Streamers={setTeam1Streamers}
                setTeam2Streamers={setTeam2Streamers}
                draggingInfo={draggingInfo}
                setDraggingInfo={setDraggingInfo}
              />

              {team2Streamers.length > 0 ? (
                team2Streamers.map((streamer, i) => (
                  <React.Fragment key={i}>
                    <ChannelDraggableBox
                      from="team2Streamers"
                      channel={streamer}
                      boxIndex={i}
                      setTeam2Streamers={setTeam2Streamers}
                      setDraggingInfo={setDraggingInfo}
                    />
                    <DropArea
                      inside="team2Streamers"
                      dropAreaIndex={i + 1}
                      setTeam1Streamers={setTeam1Streamers}
                      setTeam2Streamers={setTeam2Streamers}
                      draggingInfo={draggingInfo}
                      setDraggingInfo={setDraggingInfo}
                    />
                  </React.Fragment>
                ))
              ) : (
                <span className="mb-2 text-sm text-[#adadb8]">
                  No channels in team 2
                </span>
              )}

              {team2Streamers.length < 6 && (
                <AddButton
                  onClick={() => {
                    if (!team2Streamers.includes(""))
                      setTeam2Streamers([...team2Streamers, ""]);
                  }}
                />
              )}
            </ChannelContainer>
          </>
        ) : null
      ) : (
        <div className="m-2 rounded-md border-1 border-[#2f2e32] bg-[#18181a] p-2 text-white">
          No mode selected
        </div>
      )}
    </div>
  );
};

export default EditChannelList;
