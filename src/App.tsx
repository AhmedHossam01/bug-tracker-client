import { ArchiveIcon, ClockIcon } from "@heroicons/react/outline";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="customContainer">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="lg:w-7/12">
            <div className="flex gap-x-2 items-center">
              <ArchiveIcon className="w-6 h-6" />
              <h2 className="text-xl uppercase font-semibold">My projects</h2>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-indigo-500 text-white p-2 rounded-md  min-h-28 text-5xl">
                My bug tracker
                <div className="text-gray-300 text-sm mt-3 flex items-center gap-x-1">
                  <ClockIcon className="w-4 h-4" />
                  Last updated: an hour ago
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12">
            <div className="flex gap-x-2 items-center">
              <ClockIcon className="w-6 h-6" />
              <h2 className="text-xl uppercase font-semibold">
                Recent tickets
              </h2>
            </div>
            <div className="mt-4">
              <div className="bg-slate-700 py-3 px-4 rounded-md text-white">
                <div className="flex justify-between">
                  <p>This's my first ticket</p>
                  <p>1 day ago</p>
                </div>
                <div className="bg-indigo-500 rounded md p-1 text-white w-fit mt-2">
                  My bug tracker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
