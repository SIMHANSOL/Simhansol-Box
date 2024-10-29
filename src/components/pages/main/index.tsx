import { Box, Container } from '@mui/material';
import Banner from './banner';
import Introduce from './introduce';
import Portfolio from './portfolio';
import Project from './project';

export default function Main() {
  return (
    <Box
      component={'main'}
      minHeight={'100vh'}>
      <Banner />

      <Container
        maxWidth={'md'}
        sx={{ marginY: 10 }}>
        <Introduce />
      </Container>

      <Container
        maxWidth={'md'}
        sx={{ marginY: 20 }}>
        <Portfolio />
      </Container>

      <Container
        maxWidth={'md'}
        sx={{ marginY: 20 }}>
        <Project />
      </Container>
    </Box>
  );
}
