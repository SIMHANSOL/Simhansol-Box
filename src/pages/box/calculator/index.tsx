import { Box, Container } from '@mui/material';
import type { } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Calculator, Meta } from '../../../components/shared';
import type { GetServerSidePropsContext } from '../../../interfaces';

export default function CalculatorPage() {
  const { t } = useTranslation('calculator');

  return (
    <>
      <Meta title={t('name')} />
      
      <Box marginY={20}>
        <Container maxWidth={'xl'}>
          <Calculator />
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'calculator'])),
    },
  };
}
