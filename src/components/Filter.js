import React from "react";

const Filter = ({ FilterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {FilterData.map((data) => {
        return (
          <button
            className={
              "text-lg px-2 py-1 rounded font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 "
            }
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
