import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

import CheckboxDropdown from "./CheckboxDropdown";

// Section where the two dropdown menus are kept

export default function FilterArea(props) {
  // Keep track of window size
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const handleTypeCheck = (typesChecked) => {
    props.setCheckedItems({
      ...props.checkedItems, // Copy the old fields
      types: typesChecked, // But override this one
    });
  };

  const handleProfessionChecked = (professionsChecked) => {
    props.setCheckedItems({
      ...props.checkedItems, // Copy the old fields
      professions: professionsChecked, // But override this one
    });
  };

  // Adjust layout based on screen width
  var dropdownWidth = 6;
  if (windowSize[0] < 880) {
    dropdownWidth = 12;
  }

  return (
    <Grid container style={{ margin: "50px 0" }}>
      <Grid item xs={dropdownWidth} style={{ textAlign: "center" }}>
        <CheckboxDropdown
          onItemChecked={handleTypeCheck}
          label="Typ av program"
          items={["Civilingenjör", "Kandidat", "Högskoleingenjör", "Master"]}
        />
      </Grid>
      <Grid item xs={dropdownWidth} style={{ textAlign: "center" }}>
        <CheckboxDropdown
          onItemChecked={handleProfessionChecked}
          label="Yrkesgrupp"
          items={[
            "Astronomi",
            "Biomedicin/Medicinteknik",
            "Bioteknik/Bioinformatik",
            "Bygg/Anläggning/Fastighet",
            "Elektroteknik/Hårdvara/Inbyggda system Energi",
            "Forskning/Utveckling",
            "Ledarskap/Management",
            "Matematik/Statistik/Beräkning",
            "Miljö/Naturvård/Meteorologi",
            "Produktion/Process/Tillverkning",
            "Programmering/Systemutveckling",
          ]}
        />
      </Grid>
    </Grid>
  );
}
