import type { TypographyProps } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { observer as observerFunction } from '../../../modules';
import { combineText, decomposeText } from './function';
import { Cursor, TypingWrapper } from './style';

export interface TypingEffectProps extends TypographyProps {
  children: string;
  duration?: number;
  delay?: number;
  observer?: boolean;
}

export default function TypingEffect(props: TypingEffectProps) {
  const { children, duration = 50, delay = 200, observer, ...restProps } = props;

  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const elementRef = useRef<HTMLParagraphElement>(null);
  const typingText = useRef(decomposeText(children));

  const play = useCallback(
    () =>
      setTimeout(
        () => {
          if (textIndex === typingText.current.length) return;

          setTypedText((prev) => combineText(prev + typingText.current[textIndex]));
          setTextIndex((prev) => prev + 1);
        },
        textIndex === 0 ? delay : duration
      ),
    [delay, duration, textIndex]
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let intersectionObserver: IntersectionObserver;

    if (observer != null && elementRef.current != null) {
      intersectionObserver = observerFunction(
        elementRef.current,
        () => {
          timer = play();
        },
        { callbackOnce: true }
      );
    } else {
      timer = play();
    }

    return () => {
      clearTimeout(timer);

      if (intersectionObserver != null) {
        intersectionObserver.disconnect();
      }
    };
  }, [observer, play]);

  return (
    <>
      <TypingWrapper
        ref={elementRef}
        {...restProps}>
        {typedText}
      </TypingWrapper>
      <Cursor>|</Cursor>
    </>
  );
}
