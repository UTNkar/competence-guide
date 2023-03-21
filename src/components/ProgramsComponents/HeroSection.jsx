// Material UI components
import { Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "grey", padding: "20px" }}>
      Kompetensguiden är framtagen av kåren i dialog med företrädare från
      universitetet. Syftet är att erbjuda framtida arbetsgivare en bra bild
      över de utbildningsprogram Uppsala universitet erbjuder inom teknik och
      naturvetenskap.
    </Box>
  );
};

export default HeroSection;
