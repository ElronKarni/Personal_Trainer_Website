import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <span>
          <h1>רשתות חברתיות</h1>
          <ul>
            <li>
              <a>אינסטגרם</a>
            </li>
            <li>
              <a>פייסבוק</a>
            </li>
          </ul>
        </span>
        <span>
          <h1>יצירת קשר</h1>
          <ul>
            <li>
              <a>אינסטגרם</a>
            </li>
            <li>
              <a>פייסבוק</a>
            </li>
          </ul>
        </span>
      </section>
      <div className={classes.rights}>
        <div className={classes.right_div}>
          <p>כל הזכויות שמורות © לאלרון קרני 2022</p>
        </div>
        <div className={classes.right_div}>
          <p>אתר זה פותח על ידי אלרון קרני</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
