import {
  Calculate as CalculateIcon,
  Close as CloseIcon,
  SportsEsports as SportsEsportsIcon,
} from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Headline } from '../../../shared';
import { ItemImageWrapper, ItemWrapper } from './style';

export default function Project() {
  const { t } = useTranslation('index');

  const project = [
    {
      title: t('project.calculator.name'),
      description: t('project.calculator.description'),
      href: '/box/calculator',
      icon: <CalculateIcon />,
    },
    {
      title: t('project.color-vision.name'),
      description: t('project.color-vision.description'),
      href: '/box/color-vision',
      icon: <SportsEsportsIcon />,
    },
    {
      title: '',
      description: '',
      href: '/',
      icon: null,
    },
    {
      title: '',
      description: '',
      href: '/',
      icon: null,
    },
  ];

  return (
    <Box component={'section'}>
      <Headline
        title={t('project.name')}
        marginBottom={2}>
        <Grid
          container
          alignItems={'start'}
          spacing={5}>
          {project.map(({ title, description, href, icon }, index) => {
            const iconComponent = icon ?? <CloseIcon />;

            return (
              <Grid
                key={title || index}
                item
                xs={6}
                md={3}>
                <ItemWrapper href={href}>
                  <ItemImageWrapper empty={icon === null ? 'true' : null}>{iconComponent}</ItemImageWrapper>
                  <Typography variant={'body1'}>{title}</Typography>
                  <Typography variant={'body2'}>{description}</Typography>
                </ItemWrapper>
              </Grid>
            );
          })}
        </Grid>
      </Headline>
    </Box>
  );
}
