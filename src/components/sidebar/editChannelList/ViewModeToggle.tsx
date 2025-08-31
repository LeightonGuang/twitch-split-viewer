const ViewModeToggle = ({
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
  return (
    <div className="flex items-center justify-center px-4 pt-4 text-white">
      <div className="flex w-full items-center justify-center rounded-full border-1 border-[#a970ff] bg-black p-1">
        <button
          className={`w-full rounded-full px-2 py-1 text-xs font-medium ${isGridViewMode || (!isGridViewMode && !isTeamViewMode) ? "bg-[#a970ff] text-white" : "cursor-pointer text-[#707070]"}`}
          disabled={isGridViewMode}
          onClick={() => {
            setStreamers([...team1Streamers, ...team2Streamers]);
            setTeam1Streamers([]);
            setTeam2Streamers([]);
          }}
        >
          Grid View
        </button>
        <button
          className={`w-full rounded-full px-2 py-1 text-xs font-medium ${isTeamViewMode ? "bg-[#a970ff] text-white" : "cursor-pointer text-[#707070]"}`}
          disabled={isTeamViewMode}
          onClick={() => {
            setTeam1Streamers(
              streamers.slice(0, Math.ceil(streamers.length / 2)),
            );
            setTeam2Streamers(streamers.slice(Math.ceil(streamers.length / 2)));
            setStreamers([]);
          }}
        >
          Team View
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ViewModeToggle;
