import { CloseIconSvg } from "../assets/Icons";

const Help = ({
  setShowHelp,
}: {
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const UrlContainer = ({
    className,
    url,
  }: {
    className?: string;
    url: string;
  }) => (
    <code
      className={`${className} rounded-md border-1 border-[#393939] bg-[#252525] p-1 text-sm text-gray-300`}
    >
      {url}
    </code>
  );

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      className="fixed inset-0 flex h-full w-full items-center justify-center"
    >
      <div className="text-md h-[30rem] w-[50rem] rounded-md bg-[#18181a] p-4 text-white">
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
          <p>
            To use grid view or team view modes, you can pass the appropriate
            parameters in the URL like this:
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-medium">Grid View Mode:</h3>
            <p>
              Use the <strong>channels</strong> parameter to display players in
              grid view.
            </p>
            <div className="mt-2">
              <UrlContainer url="https://twitchsplitviewer.pages.dev/?channels=tarik,tenz,iiTzTimmy" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">Team Split View Mode:</h3>
            <p>
              Use the <strong>team1</strong> and <strong>team2</strong>{" "}
              parameters to split the screen into two teams.
            </p>
            <div className="mt-2">
              <UrlContainer url="https://twitchsplitviewer.pages.dev/?team1=zekken,Zellsis,Demon1&team2=dapr,johnqtcs,derrekow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
