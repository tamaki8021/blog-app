import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import animationStyles from "../styles/animation.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

type Props = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
};

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.moduleSpacer}></div>
        <p className={utilStyles.text}>
          経済学部、経営学科の玉城響です。<br></br>
          基本的に自分の世界を持っており、その中で色々と考えている人です。それと「ダメ」と言われればやりたくなるし、「やってもいいよ！」と言われるとやりたくなくなってしまうような、どうしても正反対のことをしたくなってしまう天の邪鬼な性格も持ち合わせています。
        </p>
          <input
            className={utilStyles.gradTrigger}
            type="checkbox"
            id="trigger1"
          />
          <label className={utilStyles.gradBtn} htmlFor="trigger1">
            もっと見る
          </label>
          <div className={utilStyles.gradItem}>
            <p>出身地 ： 沖縄</p>
            <p>誕生日 ： ３月２０日</p>
            <p>動物占い ：クリエイティブなオオカミ</p>
            <p>趣味 ： 漫画・海外ドラマ</p>
            <p>スポーツ ： 野球４年、硬式テニス６年</p>
            <p>好きな映画： ボヘミアン・ラプソディ</p>
            <p>好きな本 ： 嫌われる勇気</p>
            <p>座右の銘 ： 朱に交われば赤くなる</p>
          </div>
      </section>
      <div className={utilStyles.iconsList}>
        <a
          href="https://twitter.com/tamo38570240"
          className={utilStyles.icon}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="#1DA1F2"
            className={`${utilStyles.iconI} ${utilStyles.iconTwitter}`}
          />
          <span className={utilStyles.twitterSpan}></span>
        </a>
        <a
          href="https://github.com/tamaki8021"
          className={utilStyles.icon}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#333"
            className={`${utilStyles.iconI} ${utilStyles.iconGithub}`}
          />
          <span className={utilStyles.githubSpan}></span>
        </a>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${animationStyles.btn}`}>
          web-log
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
} 

