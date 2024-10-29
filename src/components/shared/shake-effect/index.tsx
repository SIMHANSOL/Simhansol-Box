import type { TypographyProps } from '@mui/material';
import { Box } from '@mui/material';
import { Shake, ShakeWrapper } from './style';

interface ShakeEffectProps extends TypographyProps {
  children: string;
}

export default function ShakeEffect(props: ShakeEffectProps) {
  const { children, ...restProps } = props;

  const render = [];
  for (let i = 0; i < children.length; i += 1) {
    const text = children[i];
    const isText = text !== ' ';

    const ShakeComponent = isText ? (
      <Shake key={i}>{text}</Shake>
    ) : (
      <Box
        key={i}
        marginX={1.5}
      />
    );

    render.push(ShakeComponent);
  }

  return <ShakeWrapper {...restProps}>{render}</ShakeWrapper>;
}
