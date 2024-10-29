import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BackgroundImage, Headline } from './style';

export default function Banner() {
  return (
    <Box
      component={'section'}
      position={'relative'}
      height={{ xs: '20rem', md: '20rem' }}>
      <BackgroundImage
        src={'/images/carousel/square-ged.png'}
        alt={'banner'}
        fill
      />

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        height={'100%'}
        color={grey[50]}>
        <Headline
          variant={'h1'}
          fontSize={{ xs: '2rem', md: '3rem' }}>
          MAKE YOUR LIFE SOMETHING DIFFERENT
        </Headline>
      </Box>
    </Box>
  );
}
