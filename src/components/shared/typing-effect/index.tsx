import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import type { TypingEffectProps } from './typing-effect';
import TypingEffect from './typing-effect';

export default function TypingEffectWrapper(props: TypingEffectProps) {
  const { children, ...restProps } = props;

  const [key, setKey] = useState('');

  const router = useRouter();

  useEffect(() => {
    setKey(router.locale ?? '');
  }, [router.locale]);

  return (
    <Fragment key={key}>
      <TypingEffect {...restProps}>{children}</TypingEffect>
    </Fragment>
  );
}
