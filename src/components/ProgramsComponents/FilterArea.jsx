import ProgramInfoBox from "./ProgramInfoBox";

import { useState, useEffect } from "react";

import mockData from "../../assets/newMock.json";
import FilteredProgramBoxes from "./FilteredProgramBoxes";

var allPrograms = [];

for (const [key, value] of Object.entries(mockData)) {
  var obj = {};
  obj["info"] = value;
  obj["name"] = key;
  allPrograms.push(obj);
}

const FilterArea = (props) => {
  const [renderedProgramBoxes, setRenderedProgramBoxes] = useState(allPrograms);

  useEffect(() => {
    // Filter shown programs based on filters
    const filteredPrograms = allPrograms.filter((program) => {
      const typesSelected = props.checkedItems.types;
      const professionsSelected = props.checkedItems.professions;
      const keywords = program.info.keywords;
      const type = program.info.type;

      if (typesSelected.length === 0 && professionsSelected.length === 0) {
        return true;
      } else if (typesSelected.length === 0) {
        // filter by selected professions only
        return (
          professionsSelected.filter((value) => keywords.includes(value))
            .length > 0
        );
      } else if (professionsSelected.length === 0) {
        // filter by selected types of programs only
        return typesSelected.includes(type);
      } else {
        return (
          professionsSelected.filter((value) => keywords.includes(value))
            .length > 0 && typesSelected.includes(type)
        );
      }
    });

    setRenderedProgramBoxes(filteredPrograms);
  }, [props.checkedItems]);

  const programBoxes = renderedProgramBoxes.map((elem) => {
    return <ProgramInfoBox name={elem.name} data={elem.info} />;
  });

  // Convenient for the two columns
  const firstRow = programBoxes.filter((e, i) => i % 2 !== 0);
  const secondRow = programBoxes.filter((e, i) => i % 2 === 0);

  console.log("I FilterArea");
  console.log(firstRow);

  return <FilteredProgramBoxes firstRow={firstRow} secondRow={secondRow} />;
};

export default FilterArea;
