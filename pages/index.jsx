// import Head from "next/head";
// import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
// import Link from "next/link";
// import Date from "../components/date";

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p className="text-red-400">API図鑑</p>
//         <p>このサイトでは、様々なapiの使い方を学ぶことができます。</p>

//         <Link href="resas">Resas API編</Link>
//         <br></br>
//         <Link href="spotify">Spotify API編</Link>
//         <br></br>
//         <Link href="resas">Line API編</Link>
//         <br></br>
//         <Link href="new">新規登録</Link>
//         <br></br>
//         <Link href="login">ログイン</Link>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>ブログ</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

import React from "react";

import Layout from "../components/layout";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, loading } = useUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>Next.js and Auth0 Example</h1>

      {/* ロード中 */}
      {loading && <p>Loading login info...</p>}

      {/* ログアウト状態 */}
      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {/* ログイン状態 */}
      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
