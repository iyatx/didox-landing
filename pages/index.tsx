import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import HomeHeader from '../components/Home/HomeHeader/HomeHeader';

const Home: NextPage = () => {
  const linkToRegistrationPage = (): void => {
    gtag('event', 'link', {
      event_category: 'goToRegistrationPage',
    });
  };

  return (
    <>
      <Head>
        <title>Didox Main Page</title>
      </Head>
      <main>
        <HomeHeader linkToRegistrationPage={linkToRegistrationPage} />
      </main>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'home-page'])),
    },
  };
}

export default Home;
