import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <span>
          <h2>רשתות חברתיות</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/lior_malul_fit/">אינסטגרם</a>
            </li>
            <li>
              <a href="https://www.facebook.com/lioor.malul">פייסבוק</a>
            </li>
          </ul>
        </span>
        <span>
          <h2>יצירת קשר</h2>
          <ul>
            <li>
              <a>פלאפון - 050-2933304</a>
            </li>
          </ul>
        </span>
      </section>
      {/* <div className={classes.rights}>
        <div className={classes.right_div}>
          <p>כל הזכויות שמורות © לאלרון קרני 2022</p>
        </div>
        <div className={classes.right_div}>
          <p>אתר זה פותח על ידי אלרון קרני</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
