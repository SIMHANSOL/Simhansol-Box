import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { locale, navigation } from '../../../lib';
import theme from '../../../styles/theme';
import { Image, Link } from '../../shared';
import { SideMenu } from '../../shared/modal';
import type { SideMenuRef } from '../../shared/modal/side-menu';
import { AppBar, Headline } from './style';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const appBarRef = useRef<HTMLDivElement>(null);
  const sideMenuRef = useRef<SideMenuRef>(null);

  function scrollEvent() {
    if (appBarRef.current) {
      if (window.scrollY > 0) {
        appBarRef.current.classList.add('active');
      } else {
        appBarRef.current.classList.remove('active');
      }
    }
  }

  function handleSideMenuOpen(open?: boolean) {
    if (open) {
      sideMenuRef.current?.menuOpen();
      setIsSideMenuOpen(true);
    } else {
      sideMenuRef.current?.menuClose();
      setIsSideMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <>
      <AppBar ref={appBarRef}>
        <Toolbar>
          <IconButton
            size={'large'}
            edge={'start'}
            color={'inherit'}
            aria-label={t<string>('menu')}
            onClick={() => handleSideMenuOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Headline>{t('meta.title')}</Headline>
        </Toolbar>
      </AppBar>

      <SideMenu ref={sideMenuRef}>
        <Box padding={2}>
          <IconButton
            aria-label={t<string>('close')}
            tabIndex={isSideMenuOpen ? 0 : -1}
            onClick={() => handleSideMenuOpen()}>
            <CloseIcon />
          </IconButton>

          <Box
            position={'relative'}
            textAlign={'center'}
            marginTop={1}
            marginBottom={4}>
            <Typography variant={'h7bold'}>{t('meta.title')}</Typography>
            <Typography
              variant={'subtitle2'}
              marginBottom={2}>
              Sim Hansol
            </Typography>
            <Image
              style={{ objectFit: 'cover' }}
              src={'/images/avatar/me-2.jpg'}
              alt={t<string>('meta.title')}
              width={224}
              height={150}
            />
          </Box>

          {navigation.map(({ headline, items }) => (
            <Box
              key={headline}
              marginBottom={3}>
              <Box
                bgcolor={theme.palette.grey[200]}
                borderRadius={1}
                paddingX={1}
                paddingY={0.5}>
                <Typography variant={'body1bold'}>{t(`navigation.${headline}.headline`)}</Typography>
              </Box>
              <Box
                component={'ul'}
                paddingX={0.5}
                paddingY={0.75}>
                {items.map(({ title, link }) => (
                  <Box
                    key={title}
                    component={'li'}
                    paddingY={0.5}>
                    <Link
                      href={link}
                      tabIndex={isSideMenuOpen ? 0 : -1}>
                      <Typography variant={'body2'}>- {t(`navigation.${headline}.${title}`)}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          <Grid
            display={'flex'}
            gap={0.5}>
            {locale.map(({ text, value }) => (
              <Button
                key={text}
                tabIndex={isSideMenuOpen ? 0 : -1}
                variant={router.locale === value ? 'contained' : 'outlined'}
                size={'small'}
                onClick={() => router.push(router.pathname, undefined, { locale: value })}>
                {text}
              </Button>
            ))}
          </Grid>
        </Box>
      </SideMenu>
    </>
  );
}
