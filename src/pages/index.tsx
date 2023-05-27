import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Main } from '../components/pages';
import { Meta } from '../components/shared';
import type { GetServerSidePropsContext } from '../interfaces';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <>
      <Meta title={t('meta.title')} />

      <Main />
    </>
  );
}

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index'])),
    },
  };
}
