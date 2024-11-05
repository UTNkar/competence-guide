import { useState, useEffect, Fragment } from "react";

import styles from "../css/Footer.css"

// Custom components
import FooterCol1 from "./FooterNavbarComponents/FooterCol1";
import FooterCol2 from "./FooterNavbarComponents/FooterCol2";
import FooterCol3 from "./FooterNavbarComponents/FooterCol3";
import FooterCol4 from "./FooterNavbarComponents/FooterCol4";
import FooterSocialsRow from "./FooterNavbarComponents/FooterSocialsRow";

//MUI
import { Box, Grid, Container, Button, Typography, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function H3({children}) {
  return(
    <>
      <h3 className={`footer_heading without_spacing`}>{children}</h3>
      <div className={`h_after`}> </div>
    </>
      
  )
}

export function H4({children}) {
  return(
    <>
      <h4 className={`footer_subheading without_decoration`}>{children}</h4>
    </>
      
  )
}

const Footer = () => {
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

  var columnWidth = 3;

  if (windowSize[0] < 600) {
    columnWidth = 12;
  }

  // To be applied to all columns and socials row
  const styling = { color: "rgba(255,255,255,.7)", fontSize: "14px" };

  return (
    <section className={`footer`}>
      <div className={`w_layout_vflex container`}>
        <div className={`w_layout_vflex footer_wrapper`}>
          <div className={`w_layout_vflex footer_logo_wrapper`}>
            <a href="/" aria-current="page" className={`w_inline_block w_current`}>
                <img
                  src="https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png"
                  loading="lazy" sizes="(max-width: 479px) 100vw, 187.28692626953125px"
                  srcSet="https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png 3227w"
                  alt="" className={`footer_logo`}
                />
              </a>
            <div className={`code_embed w_embed w_iframe`}><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.5168622229132!2d17.64881977699934!3d59.84055606999524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fc95f989af5a9%3A0x2a2ee8953bd196b6!2sUppsala%20Teknolog-%20%26%20Naturvetark%C3%A5r!5e0!3m2!1ssv!2sse!4v1728127637716!5m2!1ssv!2sse"
                width="280" height="280" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
          <div className={`w_layout_vflex footer_info_wrapper`}>
            <div className={`w_layout_vflex footer_column`}>
              <H3>Länkar</H3>
              <H4>Sociala medier</H4>
              <p className={`standalone_link`}><a href="https://facebook.com/utnkar">Facebook</a><br /><a
                  href="https://instagram.com/utnkar">Instagram</a><br /><a
                  href="https://linkedin.com/company/utnkar">LinkedIn</a></p>
              <H4>Språk</H4>
              <div className={`spacer less`}></div>
              <div className={`w_locales_list`}>
                <div role="list" className={`w_locales_items`}>
                  <div role="listitem" className={`w_locales_item`}><a hreflang="sv" href="/" aria-current="page"
                      className={`w_current`}>Svenska</a></div>
                  <div role="listitem" className={`w_locales_item`}><a hreflang="en-US" href="/en">English</a></div>
                </div>
              </div>
            </div>
            <div className={`w_layout_vflex footer_column`}>
              <H3>Kontaktuppgifter</H3>
              <H4>Telefonnummer</H4>
              <p className={`standalone_link`}><a href="#">070-308 95 21</a></p>
              <H4>E-post</H4>
              <p className={`standalone_link`}><a href="mailto:info@utn.se">info@utn.se</a></p>
              <H4>Adress</H4>
              <p className={`footer_paragraph`}>Polacksbacken<br />Hus 73<br />752 37 Uppsala</p>
            </div>
            <div className={`w_layout_vflex footer_column`}>
              <H3>Öppettider</H3>
              <p className={`footer_paragraph spaced`}>Vardagar 9:00–17:00</p>
              <H4>Pub på Uthgård</H4>
              <p className={`footer_paragraph`}>Torsdagar: 17:30–sent</p>
              <H4>Café Bocken</H4>
              <p className={`footer_paragraph`}>Måndagar:
                9:30–15:00<br />Tisdagar:&nbsp;9:30-15:00<br />Onsdagar:&nbsp;9:30–15:00<br />Torsdagar:&nbsp;9:30–15:00<br />Fredagar:&nbsp;9:30–15:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
