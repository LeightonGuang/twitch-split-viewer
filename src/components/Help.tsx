import {
  CloseIconSvg,
  GridViewIconSvg,
  TeamViewIconSvg,
} from "../assets/Icons";

const Help = ({
  setShowHelp,
}: {
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const UrlContainer = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <code
      className={`${className} rounded-md border-1 border-[#393939] bg-[#252525] p-1 text-sm text-gray-300`}
    >
      {children}
    </code>
  );

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      className="fixed inset-0 flex h-full w-full items-center justify-center"
    >
      <div className="text-md max-h-[30rem] w-[50rem] rounded-md bg-[#18181a] p-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">How to use URL Parameters</h2>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-[#36353b]"
            onClick={() => {
              setShowHelp(false);
            }}
            title="Close"
          >
            <CloseIconSvg className="h-4 w-4" />
          </button>
        </div>

        <div>
          <div className="mt-4">
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <GridViewIconSvg className="h-5 w-5" /> Grid View Mode:
            </h3>
            <p>
              To use Grid View Mode, simply add the{" "}
              <strong className="text-green-400">channels</strong> parameter to
              the URL followed by a list of{" "}
              <strong className="text-blue-300">channel names</strong> you want
              to watch, seperated by commas, up to a maximum of 12 names.
            </p>
            <p className="mt-1">For example:</p>
            <div className="mt-1">
              <UrlContainer>
                https://twitchsplitviewer.pages.dev/
                <span className="text-green-400">?channels=</span>
                <span className="text-blue-300">tarik,tenz,iiTzTimmy</span>
              </UrlContainer>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <TeamViewIconSvg className="h-5 w-5" /> Teams Split View Mode:
            </h3>
            <p>
              To use Teams Split View Mode, start by using the{" "}
              <strong className="text-green-400">team1</strong> parameter
              followed by a list of up to 6{" "}
              <strong className="text-blue-300">channel names</strong> seperated
              by commas, then add{" "}
              <strong className="text-red-400">&team2</strong> followed by a
              list of up to 6 additional{" "}
              <strong className="text-blue-300">channel names</strong> seperated
              by commas.
            </p>
            <div className="mt-2">
              <UrlContainer>
                https://twitchsplitviewer.pages.dev/
                <span className="text-green-400">?team1=</span>
                <span className="text-blue-300">zekken,Zellsis,Demon1</span>
                <span className="text-red-400">&team2=</span>
                <span className="text-blue-300">dapr,johnqtcs,derrekow</span>
              </UrlContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
