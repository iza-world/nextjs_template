export default function Section({ id, sectionTitle, children }) {
  return (
    <div className="max-w-screen-lg my-16">
      <div id={id} className="flex items-center ml-8">
        <img className="w-12" src="images/draws/pinkPeach.png" alt="pinkPeach" />
        <div className="ml-2 text-green-900 text-3xl font-bold">
          {sectionTitle}
        </div>
      </div>
      <div className="mt-16">
        {children}
      </div>
    </div>
  );
}

export const Subsection = ({ subsectionTitle, children }) => (
  <div className="mt-12">
    <div className="ml-16 flex items-center">
      <img className="w-8" src="images/draws/orangePeach.png" alt="pinkPeach" />
      <div className="ml-2 text-green-900 text-2xl font-bold">
        {subsectionTitle}
      </div>
    </div>
    <div className="text-green-900 text-lg font-medium mt-4 ml-10">
      {children}
    </div>
  </div>
);
