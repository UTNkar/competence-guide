import { useState, Fragment } from "react";

// MUI
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Typography, Toolbar, AppBar, Button, Grid } from "@mui/material";

// Committee logos:
import polhacksLogo from "../../assets/committees_logos/polhacks.png";
import naturvetarbalenLogo from "../../assets/committees_logos/naturvetarbalen.png";
import utnarmLogo from "../../assets/committees_logos/utnarm.png";
import rebusrallytLogo from "../../assets/committees_logos/rebusrallyt.png";
import forsranningenLogo from "../../assets/committees_logos/forsranningen.png";
import masterexchangeLogo from "../../assets/committees_logos/masterexchange.png";
import jubileumLogo from "../../assets/committees_logos/jubileum.png";
import tekdatabasLogo from "../../assets/committees_logos/tekdatabas.png";

// Section logos:
import QLogo from "../../assets/section_logos/Q.png";
import XLogo from "../../assets/section_logos/X.png";
import WLogo from "../../assets/section_logos/W.png";
import STSLogo from "../../assets/section_logos/STS.png";
import fyskamLogo from "../../assets/section_logos/fyskam.png";
import ITLogo from "../../assets/section_logos/IT.png";
import FLogo from "../../assets/section_logos/F.png";
import datavetareLogo from "../../assets/section_logos/datavetare.png";
import ESLogo from "../../assets/section_logos/ES.png";
import grusLogo from "../../assets/section_logos/grus.png";
import larnatLogo from "../../assets/section_logos/larnat.png";
import ELogo from "../../assets/section_logos/E.png";
import KLogo from "../../assets/section_logos/K.png";
import iupakLogo from "../../assets/section_logos/iupak.png";
import ILogo from "../../assets/section_logos/I.png";
import HLogo from "../../assets/section_logos/H.png";
import BARLogo from "../../assets/section_logos/BAR.png";

// Custom components
import BlueNavbarLink from "./BlueNavbarLink";

// Create array containing all info for the logos as input for creating BoxLink components
const imagelinks = [
  //Committees:
  { imageSrc: polhacksLogo, linkUrl: "https://polhacks.utn.se/" },
  { imageSrc: naturvetarbalenLogo, linkUrl: "https://balen.utn.se/" },
  { imageSrc: utnarmLogo, linkUrl: "https://utnarm.utn.se/" },
  { imageSrc: rebusrallytLogo, linkUrl: "https://rally.utn.se/" },
  { imageSrc: forsranningenLogo, linkUrl: "https://forsranningen.utn.se/" },
  { imageSrc: masterexchangeLogo, linkUrl: "https://mer.utn.se/" },
  { imageSrc: jubileumLogo, linkUrl: "https://jubileum.utn.se/" },
  { imageSrc: tekdatabasLogo, linkUrl: "https://recce.utn.se/" },
  //Section links:
  { imageSrc: QLogo, linkUrl: "http://materialvetenskap.se/" },
  { imageSrc: XLogo, linkUrl: "http://x.utn.se/" },
  { imageSrc: WLogo, linkUrl: "https://w.utn.se/sv" },
  { imageSrc: STSLogo, linkUrl: "http://sts.utn.se/" },
  { imageSrc: fyskamLogo, linkUrl: "http://fyskam.fysik.uu.se/" },
  { imageSrc: ITLogo, linkUrl: "http://it.sektionen.se/" },
  { imageSrc: FLogo, linkUrl: "http://www.futf.se/" },
  { imageSrc: datavetareLogo, linkUrl: "http://www.datavetenskap.nu/" },
  { imageSrc: ESLogo, linkUrl: "http://es.utn.se/" },
  { imageSrc: grusLogo, linkUrl: "http://grus.utn.se/" },
  { imageSrc: larnatLogo, linkUrl: "http://larnat.utn.se/" },
  { imageSrc: ELogo, linkUrl: "http://e.utn.se/" },
  { imageSrc: KLogo, linkUrl: "http://www.kemiteknik.com/" },
  { imageSrc: iupakLogo, linkUrl: "https://iupak.utn.se/" },
  { imageSrc: ILogo, linkUrl: "https://i.utn.se/" },
  { imageSrc: HLogo, linkUrl: "https://www.hsektionen.com/" },
  { imageSrc: BARLogo, linkUrl: "https://bio.utn.se/" },
];

const BlueNavbar = () => {
  // Committees are rendered when renderSections = false
  const [renderSections, setRenderSections] =
    useState(false);

  const handleChangeComittesSections = () => {
    setRenderSections(!renderSections);
  };

  return (
    <Fragment>
      <AppBar
        position="relative"
        style={{
          backgroundColor: "#00459a",
          fontFamily: "roboto",
          height: "2.65em",
          justifyContent: "center",
        }}
      >
        {/* Toolbar is added so that icons, buttons etc. is handled correctly
              in the navbar */}
        <Toolbar
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            {/* Left images */}
            {renderSections
              ? imagelinks
                  .slice(0, 4)
                  .map(({ imageSrc, linkUrl }) => (
                    <BlueNavbarLink
                      key={linkUrl}
                      imageSrc={imageSrc}
                      linkUrl={linkUrl}
                    />
                  ))
              : imagelinks.slice(8, 16).map(({ imageSrc, linkUrl }) => (
                  <BlueNavbarLink
                    key={linkUrl}
                    imageSrc={imageSrc}
                    linkUrl={linkUrl}
                  />
                ))}
          </Grid>
          <Grid item>
            <Button
              onClick={handleChangeComittesSections}
              variant="contained"
              style={{
                backgroundColor: "#2e2e2e",
                fontFamily: "roboto",

                height: "2.15em",
                width: "auto",
                display: "flex",
              }}
              sx={{ padding: "0 .5em", margin: "0 .3em" }}
            >
              <CompareArrowsIcon />
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                {renderSections ? "Committies" : "Sections"}
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            {/* Right images */}
            {renderSections
              ? imagelinks
                  .slice(4, 8)
                  .map(({ imageSrc, linkUrl }) => (
                    <BlueNavbarLink
                      key={linkUrl}
                      imageSrc={imageSrc}
                      linkUrl={linkUrl}
                    />
                  ))
              : imagelinks
                  .slice(16, 25)
                  .map(({ imageSrc, linkUrl }) => (
                    <BlueNavbarLink
                      key={linkUrl}
                      imageSrc={imageSrc}
                      linkUrl={linkUrl}
                    />
                  ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default BlueNavbar;
