import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const handleKeyPress = (
    event: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ) => {
    if (event.key === "Enter") {
      setIsDark(!isDark);
    }
  };

  return (
    <div
      className={`${isDark ? "dark" : ""} min-h-screen`}
      data-theme={isDark ? "dark" : "light"}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="bg-slate-100 dark:bg-slate-900 h-screen dark:text-slate-100 overflow-hidden flex">
        <Sidebar />
        <div className="p-4 overflow-y-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ut. Iste
          quidem aliquid esse exercitationem est delectus debitis blanditiis
          quam vitae architecto laborum explicabo corporis impedit deleniti
          voluptatum nulla error, ut et accusamus a nobis consequuntur culpa!
          Modi voluptatum fugiat impedit, accusamus quia maxime natus quis
          itaque porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Qui, ut. Iste quidem
          aliquid esse exercitationem est delectus debitis blanditiis quam vitae
          architecto laborum explicabo corporis impedit deleniti voluptatum
          nulla error, ut et accusamus a nobis consequuntur culpa! Modi
          voluptatum fugiat impedit, accusamus quia maxime natus quis itaque
          porro minus magni nemo esse amet accusantium vero, id ea
          necessitatibus ipsam. Sunt est dolor dolore temporibus. Deleniti sequi
          odit voluptatum recusandae necessitatibus dolorum corporis tenetur
          optio incidunt nam voluptatem expedita, debitis placeat enim
          quibusdam. Iusto facere, error dolorem commodi praesentium ad hic amet
          tempora quidem! Animi vero sequi nam, a distinctio rem.
        </div>
      </div>
    </div>
  );
};

export default App;
