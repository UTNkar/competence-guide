import { Grid, Typography } from "@mui/material";
import { useState } from "react";

import CheckboxDropdown from "./CheckboxDropdown";

export default function FilterArea() {
  const [checkedItems, setCheckedItems] = useState({
    programs: [],
    professions: [],
  });

  const handleProgramCheck = (programsChecked) => {
    setCheckedItems({
      ...checkedItems, // Copy the old fields
      programs: programsChecked, // But override this one
    });
  };

  const handleProfessionChecked = (professionsChecked) => {
    setCheckedItems({
      ...checkedItems, // Copy the old fields
      professions: professionsChecked, // But override this one
    });
  };

  return (
    <Grid container>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <CheckboxDropdown
          onItemChecked={handleProgramCheck}
          label="Typ av program"
          items={["Civilingenjör", "Kandidat", "Högskoleingenjör", "Master"]}
        />
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
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
      <Typography>
        This is inside DropdownSection.jsx, you have checked programs:
        {checkedItems.programs} and professions: {checkedItems.professions}
      </Typography>
    </Grid>
  );
}
