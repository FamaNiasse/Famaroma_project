import Link from "next/link";
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerFlex}>
                <h2 className={style.footerH2}>Famaroma</h2>
                <Link className={style.footerH3} href="/produits">Nos produits</Link>
                <Link className={style.footerH3} href="/apropos">Qui sommes nous ?</Link>
                <Link className={style.footerH3} href="/partenaires">Nos partenaires</Link>
            </div>
            <span className={style.footerBorder}></span>
            <div className={style.footerFlex}>
                <h2 className={style.footerH2}>Contactez nous</h2>
                <Link className={style.footerH3} href="/formulaire">Via formulaire</Link>
                <Link className={style.footerH3} href="/telephone">Par téléphone</Link>
            </div>

            <img className={style.footerLogo} src="/assets/logos/logo_famaroma_fond_vert.png" alt="icon favoris" />

            <div className={style.footerFlex}>
                <h3 className={style.footerH3}>Suivez nous sur les reseaux sociaux</h3>
            
            <div className={style.footerFlexIcons}>
                <img className={style.footerIcon} src="/assets/icons/icon_messenger_green.png" alt="icon messenger" />
                <img className={style.footerIcon} src="/assets/icons/icon_instagram_green.png" alt="icon instagram" />
                <img className={style.footerIcon} src="/assets/icons/icon_snapchat_green.png" alt="icon snapchat" />

            </div>

            </div>








        </footer>

    )
}

export default Footer;