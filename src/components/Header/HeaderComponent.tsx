import Link from "next/link";
import style from "./Header.module.css"
const Header = () => {

    return (
<>
        <header className={style.header}>
            <div className={style.headerFlex}>
            <Link href="/"><img className={style.headerLogo} src="/assets/logos/logo_famaroma_removebg.png" alt="logo famaroma" /></Link>
            </div>
            <h1 className={style.headerH1}>FAM@ROMA</h1>
            <div className={style.headerFlex}>
            <img className={style.headerIcon} src="/assets/icons/icon_heart_vert.png"  alt="icon favoris" />
            <img className={style.headerIcon} src="/assets/icons/icon_user_vert.png"  alt="icon favoris" />
            <img className={style.headerIcon} src="/assets/icons/icon_cart_vert.png"  alt="icon favoris" />
            </div>
        </header>

            <div className={style.headerFlexmenu}>
            <Link className={style.headerLink} href="/produits">LES PRODUITS</Link>
            <Link className={style.headerLink} href="/besoins">VOS BESOINS</Link>
            <Link className={style.headerLink} href="/conseils">CONSEILS & ASTUCES</Link>
            <Link className={style.headerLink} href="/diy">DIY</Link>
            <Link className={style.headerLink} href="/partenaires">PHARMACIES PARTENAIRES</Link>


        </div>
        </>
    )
}
export default Header;