import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import TypingEffect from '../typing-effect';

interface HeadLineProps extends BoxProps {
  title: string;
}

export default function Headline(props: HeadLineProps) {
  const { title, children, ...restProps } = props;

  return (
    <Box {...restProps}>
      <TypingEffect
        duration={100}
        variant={'h5'}
        marginBottom={1}
        observer>
        {title}
      </TypingEffect>

      {children}
    </Box>
  );
}
