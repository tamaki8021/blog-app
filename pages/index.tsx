import {GetStaticPaths, GetStaticProps} from 'next'
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'


export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  } []
}

export default function Home({ allPostsData } : Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>出身地 ： 沖縄</p>
        <p>誕生日 ： ３月２０日</p>
        <p>趣味 ： 漫画・海外ドラマ</p>
        <p>スポーツ ： 野球４年、硬式テニス６年</p>
        <p>好きな映画： ボヘミアン・ラプソディ</p>
        <p>好きな本 ： 嫌われる勇気</p>
        <p>座右の銘 ： 朱に交われば赤くなる</p>
      </section>
      <div className={utilStyles.iconsList}>
        <Link href="https://twitter.com/tamo38570240">
            <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" className={utilStyles.icon} />
        </Link>
        <Link href="https://github.com/tamaki8021">
            <FontAwesomeIcon icon={faGithub}  className={utilStyles.icon} />
        </Link>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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

