import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Headline } from '../../../shared';
import { Avatar, ProfileAvatar, ProfileWrapper } from './style';

export default function Introduce() {
  const { t } = useTranslation('index');

  const career = [
    {
      name: t('introduce.career.list.frontend.name'),
      date: t('introduce.career.list.frontend.date'),
    },
  ];

  return (
    <Box component={'section'}>
      <ProfileWrapper>
        <ProfileAvatar>
          <Avatar
            src={'/images/avatar/me.jpg'}
            alt={t('name')}
            sizes={'large'}
            fill
          />
        </ProfileAvatar>

        <Box>
          <Typography variant={'h5'}>
            {t('introduce.name')} / {t('introduce.sub-name')}
          </Typography>
          <Typography
            variant={'subtitle1'}
            sx={{ marginBottom: 2 }}>
            1997.01.28 / {t('introduce.age')} / {t('introduce.address')}
          </Typography>
          <Typography variant={'subtitle2'}>
            Email. <Link href={'mailto:zuluy@naver.com'}>gamedayga@gmail.com</Link>
          </Typography>
          <Typography variant={'subtitle2'}>
            Github.{' '}
            <Link
              href={'https://github.com/SIMHANSOL'}
              target={'_blank'}
              rel={'noreferrer'}>
              https://github.com/SIMHANSOL
            </Link>
          </Typography>
        </Box>
      </ProfileWrapper>

      <Headline
        title={t('introduce.career.name')}
        sx={{ marginBottom: 4 }}>
        <Box component={'ul'}>
          {career.map(({ name, date }) => (
            <Typography
              key={name}
              component={'li'}
              variant={'body1'}>
              {name} - {date}
            </Typography>
          ))}
        </Box>
      </Headline>

      <Headline title={t('introduce.intro.name')}>
        <Typography>{t('introduce.intro.description')}</Typography>
      </Headline>
    </Box>
  );
}
