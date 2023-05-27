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
        duration={200}
        observer
        variant={'h5'}
        marginBottom={1}>
        {title}
      </TypingEffect>

      {children}
    </Box>
  );
}
