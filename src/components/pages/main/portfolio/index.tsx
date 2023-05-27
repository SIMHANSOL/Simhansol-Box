import { ExpandMore as ExpandMoreIcon, Launch as LaunchIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { portfolio } from '../../../../lib';
import { ExpandMore, Headline, Image } from '../../../shared';
import { ImageWrapper } from './style';

export default function Portfolio() {
  const [isExpandOpen, setIsExpandOpen] = useState(Array.from({ length: portfolio.length }, () => false));
  const { t } = useTranslation(['common', 'index']);

  function handleExpandClick(index: number) {
    const newIsExpandOpen = [...isExpandOpen];
    newIsExpandOpen[index] = !newIsExpandOpen[index];
    setIsExpandOpen(newIsExpandOpen);
  }

  return (
    <Box component={'section'}>
      <Headline title={t('index:portfolio.name')}>
        <Grid
          container
          spacing={2}>
          {portfolio.map(({ href, icon, image, expand }, index) => {
            const isExpand = isExpandOpen[index] ?? false;
            const currentIndex = index + 1;
            const name = t(`index:portfolio.tab-${currentIndex}.name`);
            const date = t(`index:portfolio.tab-${currentIndex}.accessDate`);
            const description = t(`index:portfolio.tab-${currentIndex}.description`);

            return (
              <Grid
                key={name}
                item
                xs={12}
                md={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label={name}
                        src={icon}
                      />
                    }
                    titleTypographyProps={{ variant: 'body1' }}
                    subheaderTypographyProps={{ variant: 'body3' }}
                    title={name}
                    subheader={date}
                  />
                  <ImageWrapper>
                    <Image
                      src={image}
                      alt={name}
                      fill
                    />
                  </ImageWrapper>
                  <CardContent>
                    <Typography
                      variant={'body2'}
                      marginTop={2}>
                      {description}
                    </Typography>
                  </CardContent>

                  <CardActions disableSpacing>
                    <IconButton
                      component={'a'}
                      href={href}
                      target={'_blank'}
                      rel={'noreferrer'}
                      aria-label={t<string>('common:link')}>
                      <LaunchIcon />
                    </IconButton>

                    <ExpandMore
                      isExpand={isExpand}
                      aria-expanded={isExpand}
                      aria-label={t<string>('common:more')}
                      onClick={() => handleExpandClick(index)}>
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>

                  <Collapse
                    in={isExpand}
                    timeout={'auto'}
                    unmountOnExit>
                    <CardContent>
                      <Typography variant={'body3'}>{expand}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Headline>
    </Box>
  );
}
