import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from '../image';
import { generateRandomColor, generateRandomColorList } from './lib';
import { ColorBox, GameBox, ImageWrapper, ListColor, PreviewColor, PreviewColorBox, TimeoutGauge } from './style';

let handleGameTimeout: ReturnType<typeof setTimeout> | null = null;
const gameTimeout = 5000;

export default function ColorVision() {
  const { t } = useTranslation('color-vision');

  const [status, setStatus] = useState({
    level: 0,
    currentColor: generateRandomColor(),
    listColor: generateRandomColorList(1, 'null'),
    isGameOver: false,
  });

  const timer = useRef<Date | null>(null);
  const prevLevel = useRef<number>(0);
  const score = useRef<number>(0);

  function handleGameNext() {
    if (timer.current != null) {
      const time = new Date().getTime() - timer.current.getTime();
      score.current += Math.round(100000 / time);
    } else {
      score.current = 0;
      prevLevel.current = 0;
    }
    timer.current = new Date();

    setStatus((prev) => {
      const color = generateRandomColor();
      const currentLevel = prev.level + 1;
      const colorLength = currentLevel * 7;

      return {
        ...prev,
        level: currentLevel,
        currentColor: color,
        listColor: generateRandomColorList(colorLength, color),
      };
    });
  }

  function handleGameReset() {
    timer.current = null;

    setStatus((prev) => {
      prevLevel.current = prev.level;

      return {
        ...prev,
        level: 0,
        currentColor: generateRandomColor(),
        listColor: generateRandomColorList(1, 'null'),
        isGameOver: false,
      };
    });
  }

  const handleGameOver = useCallback(() => {
    if (status.isGameOver) {
      handleGameReset();
    } else {
      setStatus((prev) => ({ ...prev, isGameOver: true }));
    }
  }, [status.isGameOver]);

  useEffect(() => {
    if (handleGameTimeout != null) {
      clearTimeout(handleGameTimeout);
    }

    if (!status.isGameOver && status.level > 0) {
      handleGameTimeout = setTimeout(() => {
        handleGameOver();
      }, gameTimeout);
    }
  }, [handleGameOver, status.isGameOver, status.level]);

  return (
    <Box>
      <Typography
        variant={'h1'}
        textAlign={'center'}
        marginBottom={2}>
        {t('name')}
      </Typography>

      {status.level === 0 ? (
        <Box textAlign={'center'}>
          <ImageWrapper>
            <Image
              src={'/images/carousel/brain.jpg'}
              alt={t('name')}
              fill
            />
          </ImageWrapper>

          <Typography>{t('description')}</Typography>

          <Button
            variant={'contained'}
            sx={{ marginTop: 10 }}
            onClick={() => handleGameNext()}>
            {t('game-start')}
          </Button>

          {prevLevel.current > 0 ? (
            <>
              <Typography marginTop={10}>
                {t('prev-level')} : {prevLevel.current}
              </Typography>
              <Typography>
                {t('prev-score')} : {score.current}
              </Typography>
            </>
          ) : null}
        </Box>
      ) : (
        <Box>
          <Typography textAlign={'center'}>
            {status.level} {t('level')}
          </Typography>
          <Typography textAlign={'center'}>
            {score.current} {t('score')}
          </Typography>

          <GameBox>
            <PreviewColorBox>
              <PreviewColor sx={{ backgroundColor: status.currentColor }} />
              <Typography marginTop={1}>{t('where-is-this-color')}</Typography>
            </PreviewColorBox>

            <TimeoutGauge
              key={status.level}
              stop={status.isGameOver ? 'true' : 'false'}
              duration={gameTimeout / 1000}
            />

            <ColorBox>
              {status.listColor.map((color) => (
                <ListColor
                  key={color}
                  bgColor={`${color} !important`}
                  highlight={status.isGameOver && color === status.currentColor ? 'true' : 'false'}
                  onClick={() => {
                    if (!status.isGameOver && color === status.currentColor) {
                      handleGameNext();
                    } else {
                      handleGameOver();
                    }
                  }}
                />
              ))}
            </ColorBox>
          </GameBox>
        </Box>
      )}
    </Box>
  );
}
