import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { navigation } from '../../../lib';
import theme from '../../../styles/theme';
import { Link } from './style';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box
      component={'footer'}
      bgcolor={theme.palette.grey[900]}
      color={theme.palette.grey[50]}
      py={6}>
      <Container maxWidth={'xl'}>
        <Grid
          container
          columnSpacing={20}>
          {navigation.map(({ headline, items }) => (
            <Grid
              key={headline}
              item
              xs={12}
              sm={6}
              md={4}
              my={{ md: 0, sm: 2, xs: 3 }}>
              <Typography variant={'subtitle1'}>{t(`navigation.${headline}.headline`)}</Typography>

              <Divider
                variant={'middle'}
                color={theme.palette.grey[800]}
                sx={{ marginLeft: 0, my: 1.5 }}
              />

              <Grid
                container
                spacing={1}
                color={theme.palette.grey[400]}>
                {items.map(({ title, link }) => (
                  <Grid
                    key={title}
                    item
                    xs={6}>
                    <Link href={link}>
                      <Typography
                        display={'inline-block'}
                        variant={'subtitle2'}>
                        {t(`navigation.${headline}.${title}`)}
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
