import { useEffect, useState, Fragment } from "react";
//will be removed/changed

// MUI
import { Link, Typography, Toolbar, AppBar } from "@mui/material";

// Custom components
import { ReactComponent as UTNLogo } from "../assets/utn_logo_blue.svg";

import styles from "../css/FooterNavbarComponents/navbar.module.css"

const Tabs = [
  {
    title: "Engagera dig",
    items: [
        {title: 'Att engagera sig'          , url: '/engagera-dig/att-engagera-sig'},
        {title: 'Vad kan jag söka?'         , url: '/engagera-dig/vilka-engagemang-kan-jag-soka'},
        {title: 'Arbetsgrupper & kommittéer', url: '/engagera-dig/arbetsgrupper-och-kommitteer'},
        {title: 'Lediga poster'             , url: '/engagera-dig/lediga-poster'},
        {title: 'För engagerade'            , url: '/engagera-dig/for-engagerade'},
        {title: 'Sök volontär/crew'         , url: '/engagera-dig/volontar'},
    ]
  },
  {
    title: "Dina studier",
    items: [
      {title: 'Din studietid i Uppsala', url: '/din-studietid-i-uppsala'},
      {title: 'Ditt välmående'         , url: '/ditt-valmaende'},
      {title: 'Påverka din utbildning' , url: '/paverka-din-utbildning'},
      {title: 'Åsiktsprogram'          , url: '/studiebevakning/asiktsprogram'},
      {title: 'Fallverksamhet'         , url: '/studiebevakning/fallverksamhet'},
      {title: 'Studentrepresentanter'  , url: '/studiebevakning/studentrepresentanter'},
      {title: 'Studiebevakning'        , url: '/studiebevakning'},
      {title: 'Dina studiebevakare'    , url: '/studiebevakning/kontakt'},
      {title: 'För sektioner'          , url: '/for-sektioner'},
      {title: 'Kårsamarbete'           , url: '/karsamarbete'},
    ]
  },
  {
    title: "Våra arrangemang",
    items: [
      {title: 'Våra event'            , url: '/event'},
      {title: 'Pub på Uthgård'        , url: '/pub'},
      {title: 'Café Bocken på Uthgård', url: '/cafe'},
      {title: 'Kårtidningen Techna'   , url: '/tidning'},
      {title: 'Sök bidrag'            , url: '/per-wahlunds-stiftelse'},
    ]
  },
  {
    title: "Inför din framtid",
    items: [
      {title: 'Näringslivsanknytning', url: '/karriar'},
      {title: 'Utnarm'               , url: '/utnarm'},
      {title: 'Eventgruppen'         , url: '/eventgruppen'},
      {title: 'För företag'          , url: '/for-foretag'},
      {title: 'Alumn'                , url: '/alumn'},
    ]
  },
  {
    title: "Om UTN",
    items: [
      {title: 'Vad gör UTN?'          , url: '/vad-gor-utn'},
      {title: 'Bli medlem'            , url: '/bli-medlem'},
      {title: 'Hur fungerar UTN?'     , url: '/hur-fungerar-utn'},
      {title: 'Sektioner'             , url: '/sektioner'},
      {title: 'Bokningskalender'      , url: '/bokningskalender'},
      {title: 'Dokumentarkiv'         , url: '/dokumentarkiv'},
      {title: 'Associerade föreningar', url: '/associerade-foreningar'},
      {title: 'Utmärkelser'           , url: '/utmarkelser'},
    ]
  },
  {
    title: "Kontakta oss",
    items: [
      {title: 'Kontakta oss'       , url: '/kontakta-oss'},
      {title: 'Hyr Uthgård'        , url: '/uthyrning'},
      {title: 'För företag'        , url: '/for-foretag'},
      {title: 'Dina studiebevakare', url: '/studiebevakning/kontakt'},
      {title: 'Gästkort'           , url: '/gastkort'},
    ]
  }
]

function Navbar() {
  return (
    <div data-animation="over-right" 
         data-collapse="medium" 
         data-duration="0" 
         data-easing="linear" 
         data-easing2="linear"
         role="banner" 
         className={`${styles.navbar} ${styles.w_nav}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.navbar_wrapper}`}>
        <a href="/" class={` ${styles.navbar_brand} ${styles.w_nav_brand}`} aria-label="home">
          <img width="64" height="64" 
            alt="" 
            src="https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png" 
            loading="eager" 
            srcset="
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-500.png 500w, 
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-800.png 800w, 
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1080.png 1080w, 
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1600.png 1600w, 
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-2000.png 2000w, 
              https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png 3227w
              " 
            sizes="190px" className={`${styles.logo_icon}`}></img></a>
        <div className={`${styles.navbar_menu_wrapper}`}>
          <nav className={`${styles.navbar_menu}`}>  
            {/* <div className="navbar-popover-arrow main-menu"></div> */}
            
            {Tabs.map(({title, items}) => {
                return (
                  <div className={`${styles.navbar_dropdown_item_wrapper}`}>
                    
                      <NavbarItem title={title}></NavbarItem>
                      {/* 
                      <NavbarDropdown items={items}></NavbarDropdown>
                      */}
                    
                  </div>
                );
              })
            }
          </nav>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;

function NavbarItem({title}) {
  return (
    <section className={`${styles.navbar_item_wrapper}`}>
      <div className={`${styles.w_layout_vflex} ${styles.navbar_dropdown_item}`}>
        <div className={`${styles.navbar_item_label}`}>{title}</div>
        <div className={`${styles.navbar_icon_closed} ${styles.navbar_item_icon}`}>expand_more</div>
      </div>
    </section>
  );


}

function NavbarDropdown({items}) {
  return (
    <div className={`navbar-dropdown-list-wrapper ${styles.navbar_dropdown_closed}`}>
      <div className="navbar-popover-arrow"></div>
      <nav className="navbar-dropdown-list">
        {items.map(({title, url}) => {
            return (
             <NavbarDropdownItem title={title} url={url}></NavbarDropdownItem>
            );
          })
        }
      </nav>
    </div>
  );
}
 
function NavbarDropdownItem({title, url}) {
  return (
    <main className="w-layout-vflex">
      <a href={url} aria-current="page"
        className= {`navbar-dropdown-list-item-wrapper w-inline-block ${styles.navbar_dropdown_item}`}
        // style="border-color: rgb(0,69,154);"
        >
        <div className="w-layout-vflex navbar-dropdown-list-item-label-wrapper">
          <h4 className="navbar-dropdown-list-label without-decoration without-spacing">{title}</h4>
          <h4 className={`navbar-dropdown-list-label arrow without-decoration without-spacing ${styles.navbar_dropdown_item_icon}`}
            // style="opacity: 1; transform: translate3d(4px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; color: rgb(0,69,154); "
            >             
            ➚</h4>
        </div>
      </a>
    </main>
  );
}



// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const Example = () => {
//   return (
//     <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
//       <FlyoutLink href="#" FlyoutContent={PricingContent}>
//         Pricing
//       </FlyoutLink>
//     </div>
//   );
// };

// const FlyoutLink = ({ children, href, FlyoutContent }) => {
//   const [open, setOpen] = useState(false);

//   const showFlyout = FlyoutContent && open;

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       className="relative w-fit h-fit"
//     >
//       <a href={href} className="relative text-white">
//         {children}
//         <span
//           style={{
//             transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
//           }}
//           className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
//         />
//       </a>
//       <AnimatePresence>
//         {showFlyout && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             style={{ translateX: "-50%" }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="absolute left-1/2 top-12 bg-white text-black"
//           >
//             <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
//             <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
//             <FlyoutContent />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const PricingContent = () => {
//   return (
//     <div className="w-64 bg-white p-6 shadow-xl">
//       <div className="mb-3 space-y-3">
//         <h3 className="font-semibold">For Individuals</h3>
//         <a href="#" className="block text-sm hover:underline">
//           Introduction
//         </a>
//         <a href="#" className="block text-sm hover:underline">
//           Pay as you go
//         </a>
//       </div>
//       <div className="mb-6 space-y-3">
//         <h3 className="font-semibold">For Companies</h3>
//         <a href="#" className="block text-sm hover:underline">
//           Startups
//         </a>
//         <a href="#" className="block text-sm hover:underline">
//           SMBs
//         </a>
//         <a href="#" className="block text-sm hover:underline">
//           Enterprise
//         </a>
//       </div>
//       <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
//         Contact sales
//       </button>
//     </div>
//   );
// };