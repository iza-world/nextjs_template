export default function Section({ sectionTitle, children }) {
  return (
    <div className="max-w-screen-lg mx-8 my-16 lg:mx-auto">
      <div className="flex items-center">
        <img className="w-12" src="images/draws/pinkPeach.png" alt="pinkPeach" />
        <div className="ml-2 text-green-900 text-3xl font-bold">
          {sectionTitle}
        </div>
      </div>
      <div className="mt-24 ml-12">
        {children}
      </div>
    </div>
  );
}

export const Subsection = ({ subsectionTitle, children }) => (
  <div className="mt-12">
    <div className="flex items-center">
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
