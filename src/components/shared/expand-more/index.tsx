import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
  isExpand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { isExpand: _, ...restProps } = props;

  return <IconButton {...restProps} />;
})(({ theme, isExpand }) => ({
  transform: !isExpand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMore;
