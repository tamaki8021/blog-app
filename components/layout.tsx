import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {data} from './path.module'

const name = "Tamaki  Hibiki";
export const siteTitle = "Tamaki profile";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle} ${styles.topImage}`}
              alt={name}
            />
            <h1 className={`${utilStyles.heading2Xl} ${styles.headerText}`} >{name}</h1>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="960.000000pt"
              height="579.000000pt"
              viewBox="0 0 960.000000 579.000000"
              preserveAspectRatio="xMidYMid meet"
              className={styles.svg}
            >
              <path
                d={data} className={styles.path}/>
            </svg>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <p className={styles.footerText}>&copy 2021 - tamaki</p>
      </footer>
    </div>
  );
}
