import styles from "../css/FooterNavbarComponents/footer.module.css"

// Preferably MUI components should be used but this is stolen from utns website

const FooterWrapper = ({children}) => {
    return (
        <section className={`${styles.footer}`}>
            <div className={`${styles.w_layout_vflex} ${styles.container}`}>
                <div className={`${styles.w_layout_vflex} ${styles.footer_wrapper}`}>
                    {children}
                </div>
            </div>
        </section>
    )
}


const FooterLogo = () => {
    return (
        <div className={`${styles.w_layout_vflex} ${styles.footer_logo_wrapper}`}>
            <a href="/" aria-current="page" className={`${styles.w_inline_block} ${styles.w__current}`}>
                <img
                src="https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png"
                loading="lazy" sizes="(max-width: 767px) 100vw, 187.296875px"
                srcset="https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/655e29844518537470ba5b0f/65bcf578eaa70a4540ea6e8a_utn_standard_bla%20(2).png 3227w"
                alt="" className={`${styles.footer_logo}`}/>
            </a>
            <div className={`${styles.code_embed} ${styles.w_embed}`}>
                <iframe
                className={`${styles.footer_map}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.5168622229132!2d17.64881977699934!3d59.84055606999524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fc95f989af5a9%3A0x2a2ee8953bd196b6!2sUppsala%20Teknolog-%20%26%20Naturvetark%C3%A5r!5e0!3m2!1ssv!2sse!4v1728127637716!5m2!1ssv!2sse"
                width="280" height="280" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

const FooterInfo = ({children}) => {
    return (
        <div className={`${styles.w_layout_vflex} ${styles.footer_info_wrapper}`}>
            {children}
        </div>
    )
}

const FooterHeading = ({children}) => {
    return (
        <h3 className={`${styles.without_spacing}`}>{children}</h3>
    )
}

const FooterSubheading = ({children}) => {
    return (
        <h4 className={`${styles.footer_subheading}`}>{children}</h4>
    )
}

const FooterLinks = ({children}) => {
    return (
        <p className={`${styles.standalone_links}`}>{children}</p>
    )
}

const FooterCol = ({children}) => {
    return (
        <div className={`${styles.w_layout_vflex} ${styles.footer_column}`}>
            {children}
        </div>
    )
}

const SocialLinksFooter = () => {
    return (
        <FooterCol>
            <FooterHeading>Länkar</FooterHeading>
            <FooterSubheading>Sociala medier</FooterSubheading>      
            <FooterLinks>
                <a href="https://facebook.com/utnkar">Facebook</a>
                <br/>
                <a href="https://instagram.com/utnkar">Instagram</a>
                <br/>
                <a href="https://linkedin.com/company/utnkar">LinkedIn</a>
            </FooterLinks>  
            <FooterLinks><br/></FooterLinks>  
            <FooterSubheading>Språk</FooterSubheading>     
            <div className={`${styles.spacer} ${styles.less}`}></div>   
            <div>
                <div role="list">
                    <div role="listitem">
                        <a hreflang="sv" href="/" aria-current="page" >Svenska</a>
                    </div>
                    <div role="listitem">
                        <a hreflang="en-US" href="/en">English</a>
                    </div>
                </div>
            </div>
        </FooterCol>
    )
}

const ContactInfoFooter = () => {
    return (
        <FooterCol>
            <FooterHeading>Kontaktuppgifter</FooterHeading>
            <FooterSubheading>Telefonnummer</FooterSubheading>
            <FooterLinks><a href="#">070-308 95 21</a></FooterLinks>
            <FooterSubheading>E-post</FooterSubheading>
            <FooterLinks><a href="mailto:info@utn.se">info@utn.se</a></FooterLinks>
            <FooterSubheading>Adress</FooterSubheading>
            <p>
                Polacksbacken
                <br/>
                Hus 73
                <br/>
                752 37 Uppsala
            </p>
        </FooterCol>
    )
}

const OperatingHoursFooter = () => { 
    return (
        <FooterCol>
            <FooterHeading>Öppettider</FooterHeading>
            <p className={`${styles.footer_paragraph} ${styles.spaced}`}>Vardagar 9:00–17:00</p>
            <FooterSubheading>Pub på Uthgård</FooterSubheading>
            <p className={`${styles.footer_paragraph}`}>Torsdagar: 17:30–sent</p>
            <FooterSubheading>Café Bocken</FooterSubheading>
            <p className={`${styles.footer_paragraph}`}>Måndagar:
                9:30–15:00<br/>Tisdagar:&nbsp;9:30-15:00<br/>Onsdagar:&nbsp;9:30–15:00<br/>Torsdagar:&nbsp;9:30–15:00<br/>Fredagar:&nbsp;9:30–15:00
            </p>
        </FooterCol>
    )
}

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLogo />
            <FooterInfo>
                <SocialLinksFooter />
                <ContactInfoFooter />
                <OperatingHoursFooter />
            </FooterInfo>
        </FooterWrapper>
    );
};

export default Footer;
