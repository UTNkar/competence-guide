import { useState } from "react";

import styles from "../css/FooterNavbarComponents/navbar.module.css"

const Tabs = [
  {
    title: "Engagera dig",
    items: [
      { title: 'Att engagera sig', url: '/engagera-dig/att-engagera-sig' },
      { title: 'Vad kan jag söka?', url: '/engagera-dig/vilka-engagemang-kan-jag-soka' },
      { title: 'Arbetsgrupper & kommittéer', url: '/engagera-dig/arbetsgrupper-och-kommitteer' },
      { title: 'Lediga poster', url: '/engagera-dig/lediga-poster' },
      { title: 'För engagerade', url: '/engagera-dig/for-engagerade' },
      { title: 'Sök volontär/crew', url: '/engagera-dig/volontar' },
    ]
  },
  {
    title: "Dina studier",
    items: [
      { title: 'Din studietid i Uppsala', url: '/din-studietid-i-uppsala' },
      { title: 'Ditt välmående', url: '/ditt-valmaende' },
      { title: 'Påverka din utbildning', url: '/paverka-din-utbildning' },
      { title: 'Åsiktsprogram', url: '/studiebevakning/asiktsprogram' },
      { title: 'Fallverksamhet', url: '/studiebevakning/fallverksamhet' },
      { title: 'Studentrepresentanter', url: '/studiebevakning/studentrepresentanter' },
      { title: 'Studiebevakning', url: '/studiebevakning' },
      { title: 'Dina studiebevakare', url: '/studiebevakning/kontakt' },
      { title: 'För sektioner', url: '/for-sektioner' },
      { title: 'Kårsamarbete', url: '/karsamarbete' },
    ]
  },
  {
    title: "Våra arrangemang",
    items: [
      { title: 'Våra event', url: '/event' },
      { title: 'Pub på Uthgård', url: '/pub' },
      { title: 'Café Bocken på Uthgård', url: '/cafe' },
      { title: 'Kårtidningen Techna', url: '/tidning' },
      { title: 'Sök bidrag', url: '/per-wahlunds-stiftelse' },
    ]
  },
  {
    title: "Inför din framtid",
    items: [
      { title: 'Näringslivsanknytning', url: '/karriar' },
      { title: 'Utnarm', url: '/utnarm' },
      { title: 'Eventgruppen', url: '/eventgruppen' },
      { title: 'För företag', url: '/for-foretag' },
      { title: 'Alumn', url: '/alumn' },
    ]
  },
  {
    title: "Om UTN",
    items: [
      { title: 'Vad gör UTN?', url: '/vad-gor-utn' },
      { title: 'Bli medlem', url: '/bli-medlem' },
      { title: 'Hur fungerar UTN?', url: '/hur-fungerar-utn' },
      { title: 'Sektioner', url: '/sektioner' },
      { title: 'Bokningskalender', url: '/bokningskalender' },
      { title: 'Dokumentarkiv', url: '/dokumentarkiv' },
      { title: 'Associerade föreningar', url: '/associerade-foreningar' },
      { title: 'Utmärkelser', url: '/utmarkelser' },
    ]
  },
  {
    title: "Kontakta oss",
    items: [
      { title: 'Kontakta oss', url: '/kontakta-oss' },
      { title: 'Hyr Uthgård', url: '/uthyrning' },
      { title: 'För företag', url: '/for-foretag' },
      { title: 'Dina studiebevakare', url: '/studiebevakning/kontakt' },
      { title: 'Gästkort', url: '/gastkort' },
    ]
  }
]

function Navbar() {
  const [hamburgerIconState, setHamburgerIconState] = useState(true);

  const show = styles.hamburger_icon_show;
  const hide = styles.hamburger_icon_hide;

  const hamburger = () => {
    setHamburgerIconState((prev) => !prev);

  }


  return (
    <div data-animation="over-right"
      data-collapse="medium"
      data-duration="0"
      data-easing="linear"
      data-easing2="linear"
      role="banner"
      className={`${styles.navbar} ${styles.w_nav}`}>
      <div className={`${styles.w_layout_vflex} ${styles.container} `}>
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
          <div className={`${styles.w_layout_vflex} ${styles.navbar_menu_wrapper} ${styles.navbar_menu_wrapper_mobile} ${hamburgerIconState ? '' : styles.open}`}>
            <nav className={`${styles.navbar_menu}`}>
              <div className={`${styles.navbar_popover_arrow} ${styles.main_menu}`}></div>
              {Tabs.map(({ title, items }) => {
                return (
                  <div className={`${styles.navbar_dropdown_item_wrapper}`}>
                    <NavbarItem title={title} items={items}></NavbarItem>
                  </div>
                );
              })
              }
            </nav>
          </div>

          <div className={`${styles.hamburger}`}>

            <div
              className={`${styles.menu_button} ${hamburgerIconState ? styles.show : styles.hide}`}
              onClick={hamburger}
            >
              menu
            </div>

            <div
              className={`${styles.menu_button}  ${hamburgerIconState ?  styles.hide : styles.show }`}
              onClick={hamburger}
            >
              close
            </div>
          </div>

          
        </div>

        <div className={`${styles.navbar_menu_overlay} ${hamburgerIconState ? '' : styles.open}`}></div>

      </div>
    </div>
  );
}

export default Navbar;

function NavbarItem({ title, items }) {
  return (
    <>
      <section className={`${styles.navbar_item_wrapper}`}>
        <div className={`${styles.w_layout_vflex} ${styles.navbar_dropdown_item}`}>
          <div className={`${styles.navbar_item_label}`}>{title}</div>
          <div className={`${styles.navbar_icon_closed} ${styles.navbar_item_icon}`}>expand_more</div>
        </div>
      </section>
      <NavbarDropdown items={items}></NavbarDropdown>
    </>
  );


}

function NavbarDropdown({ items }) {
  return (
    <div className={`${styles.navbar_dropdown_closed} ${styles.navbar_dropdown_list_wrapper} `}>
      <div className={`${styles.navbar_popover_arrow}`}></div>
      <nav className={`${styles.navbar_dropdown_list}`}>
        {items.map(({ title, url }) => {
          return (
            <NavbarDropdownItem title={title} url={url}></NavbarDropdownItem>
          );
        })
        }
      </nav>
    </div>
  );
}

function NavbarDropdownItem({ title, url }) {
  return (
    <main className={`${styles.w_layout_vflex} ${styles.dropdown_item_hover_target}`}>
      <a href={url} aria-current="page"
        className={`${styles.navbar_dropdown_list_item_wrapper} ${styles.w_inline_block} ${styles.navbar_dropdown_item}`}
      >
        <div className={`${styles.w_layout_vflex} ${styles.navbar_dropdown_list_item_label_wrapper}`}>
          <h4 className={`${styles.navbar_dropdown_list_label} ${styles.without_decoration} ${styles.without_spacing}`}>
            {title}
          </h4>
          <h4 className={`${styles.navbar_dropdown_list_label} ${styles.arrow} ${styles.without_decoration} ${styles.without_spacing} ${styles.navbar_dropdown_item_icon}`}>
            ➚
          </h4>
        </div>
      </a>
    </main>
  );
}
