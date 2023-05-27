/* eslint-disable react/no-array-index-key */
import {
  Calculate as CalculateIcon,
  Close as CloseIcon,
  DeleteOutline as DeleteOutlineIcon,
  History as HistoryIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
} from '@mui/icons-material';
import { Button, Collapse, Typography } from '@mui/material';

import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
import { printNumericValue } from './lib';
import {
  CalculatorBodyContainer,
  CalculatorBox,
  CalculatorContainer,
  CalculatorExtendedContainer,
  CalculatorExtension,
  CalculatorExtensionButtonWrapper,
  CalculatorHistory,
  CalculatorHistoryButtonWrapper,
  CalculatorHistoryCloseButton,
  CalculatorHistoryTypographyWrapper,
  CalculatorInput,
  CalculatorPrevInput,
  ExtensionButton,
} from './style';

interface HistoryProps {
  key: number;
  prevValue: string;
  operator: string;
  currentValue: string;
  result: string;
}

interface ModalProps {
  history: boolean;
  extension: boolean;
}

interface ModProps {
  text: ReturnType<typeof HistoryIcon> | string;
  label?: string;
  onClick: () => void;
}

type Mod = 'none' | 'average';

export default function Calculator() {
  const { t } = useTranslation(['calculator, common']);

  const [value, setValue] = useState('0');
  const [modal, setModal] = useState<ModalProps>({ history: false, extension: false });
  const [history, setHistory] = useState<HistoryProps[]>([]);
  const [mod, setMod] = useState<Mod>('none');
  const prevValueRef = useRef('0');
  const operatorRef = useRef('');
  const isResultRef = useRef(false);

  function handleModalOpen(modalName: keyof ModalProps) {
    setModal({ ...modal, [modalName]: !modal[modalName] });
  }

  function handleHistoryDelete() {
    setHistory([]);
  }

  function handleHistoryOnClick(result: string) {
    setValue(result);
  }

  function handleInsertInput(char: string) {
    const isFloat = value.indexOf('.') !== -1;

    if ((value === '0' && char !== '.') || isResultRef.current) {
      isResultRef.current = false;
      setValue(char);
    } else if (!(isFloat && char === '.') && value.length <= 25) {
      setValue(value + char);
    }
  }

  function handleRemoveInput(all?: boolean) {
    if (!all && value.length > 1) {
      setValue(value.slice(0, -1));
    } else {
      prevValueRef.current = '0';
      operatorRef.current = '';
      isResultRef.current = false;
      setHistory([]);
      setValue('00'); // WARN: Need Force Update
    }
  }

  function handleOperatorRefInput(operator: '+' | '-' | '×' | '÷' | '=' | '%' | '%?' | '%+' | '%-') {
    const isResultRefMode = operator === '=';

    if (prevValueRef.current === '0') {
      prevValueRef.current = value;
      setValue('0');
    } else {
      const current = parseFloat(value);
      const prev = parseFloat(prevValueRef.current);
      let result: string | number = 0;
      switch (isResultRefMode ? operatorRef.current : operator) {
        case '+':
          result = current + prev;
          break;
        case '-':
          result = prev - current;
          break;
        case '×':
          result = current * prev;
          break;
        case '÷':
          result = prev / current;
          break;
        case '%':
          result = (current / prev) * 100;
          break;
        case '%?':
          result = (current * prev) / 100;
          break;
        case '%+':
          result = prev * (1 + current / 100);
          break;
        case '%-':
          result = prev * (1 - current / 100);
          break;

        default:
          break;
      }
      result = result.toString();

      setHistory([
        {
          key: history.length + 1,
          prevValue: prevValueRef.current,
          operator: operatorRef.current,
          currentValue: value,
          result,
        },
        ...history,
      ]);
      prevValueRef.current = !isResultRefMode ? result : '0';
      setValue(result);
    }

    operatorRef.current = !isResultRefMode ? operator : '';
    isResultRef.current = !isResultRefMode;
  }

  const keypad = [
    { text: <HistoryIcon />, label: t('calculator:label.history'), onClick: () => handleModalOpen('history') },
    {
      text: <CalculateIcon />,
      label: t('calculator:label.extension'),
      onClick: () => handleModalOpen('extension'),
    },
    { text: <DeleteOutlineIcon />, label: t('calculator:label.remove'), onClick: () => handleRemoveInput(true) },
    { text: <RemoveCircleOutlineIcon />, label: t('calculator:label.delete'), onClick: () => handleRemoveInput() },
    { text: '1', onClick: () => handleInsertInput('1') },
    { text: '2', onClick: () => handleInsertInput('2') },
    { text: '3', onClick: () => handleInsertInput('3') },
    { text: '×', onClick: () => handleOperatorRefInput('×') },
    { text: '4', onClick: () => handleInsertInput('4') },
    { text: '5', onClick: () => handleInsertInput('5') },
    { text: '6', onClick: () => handleInsertInput('6') },
    { text: '－', onClick: () => handleOperatorRefInput('-') },
    { text: '7', onClick: () => handleInsertInput('7') },
    { text: '8', onClick: () => handleInsertInput('8') },
    { text: '9', onClick: () => handleInsertInput('9') },
    { text: '＋', onClick: () => handleOperatorRefInput('+') },
    { text: '÷', onClick: () => handleOperatorRefInput('÷') },
    { text: '0', onClick: () => handleInsertInput('0') },
    { text: '.', onClick: () => handleInsertInput('.') },
    { text: '=', onClick: () => handleOperatorRefInput('=') },
  ];

  const extendedKeypad: Record<Mod, ModProps[] | never[]> = {
    'none': [],
    'average': [
      { text: '%', onClick: () => handleOperatorRefInput('%') },
      {
        text: '%?',
        onClick: () => handleOperatorRefInput('%?'),
      },
      {
        text: '%+',
        onClick: () => handleOperatorRefInput('%+'),
      },
      {
        text: '%-',
        onClick: () => handleOperatorRefInput('%-'),
      },
    ],
  };

  const extensionButton: Mod[] = ['none', 'average'];

  return (
    <CalculatorBox>
      <CalculatorContainer>
        <CalculatorPrevInput>
          {prevValueRef.current !== '0' ? `${printNumericValue(prevValueRef.current)} ${operatorRef.current}` : '　'}
        </CalculatorPrevInput>
        <CalculatorInput
          type={'string'}
          size={'small'}
          sx={{ width: '100%' }}
          value={printNumericValue(value)}
        />
        <CalculatorBodyContainer>
          {keypad.map(({ text, label, onClick }, index) => (
            <Button
              key={index}
              variant={'contained'}
              onClick={onClick}
              aria-label={label ?? text}>
              {text}
            </Button>
          ))}
        </CalculatorBodyContainer>
        <Collapse
          in={mod !== 'none'}
          timeout={'auto'}
          unmountOnExit>
          <CalculatorExtendedContainer>
            {extendedKeypad[mod].map(({ text, label, onClick }, index) => (
              <Button
                key={index}
                variant={'contained'}
                onClick={onClick}
                aria-label={text != null && typeof text === 'string' ? text : label ?? ''}>
                {t(`calculator:extension.${mod}.${text}`)}
              </Button>
            ))}
          </CalculatorExtendedContainer>
        </Collapse>
        <CalculatorHistory open={modal.history}>
          <CalculatorHistoryButtonWrapper>
            <CalculatorHistoryCloseButton
              variant={'contained'}
              onClick={() => handleModalOpen('history')}
              aria-label={t<string>('common:close')}>
              <CloseIcon />
            </CalculatorHistoryCloseButton>
            <CalculatorHistoryCloseButton
              variant={'contained'}
              onClick={() => handleHistoryDelete()}
              aria-label={t<string>('common:remove')}>
              <DeleteOutlineIcon />
            </CalculatorHistoryCloseButton>
          </CalculatorHistoryButtonWrapper>
          {history.length > 0
            ? history.map(({ key, prevValue, operator, currentValue, result }) => (
                <CalculatorHistoryTypographyWrapper
                  key={key}
                  variant={'contained'}
                  onClick={() => handleHistoryOnClick(result)}>
                  <Typography variant={'body2'}>{printNumericValue(prevValue)}</Typography>
                  <Typography variant={'body2'}>{operator}</Typography>
                  <Typography variant={'body2'}>{printNumericValue(currentValue)}</Typography>
                  <Typography variant={'body2'}>=</Typography>
                  <Typography variant={'body1'}>{printNumericValue(result)}</Typography>
                </CalculatorHistoryTypographyWrapper>
              ))
            : t('calculator:base.history')}
        </CalculatorHistory>
        <CalculatorExtension open={modal.extension}>
          <CalculatorHistoryCloseButton
            variant={'contained'}
            onClick={() => handleModalOpen('extension')}
            aria-label={t('common:close') as string}>
            <CloseIcon />
          </CalculatorHistoryCloseButton>
          <CalculatorExtensionButtonWrapper>
            {extensionButton.map((name) => (
              <ExtensionButton
                key={name}
                variant={name === mod ? 'contained' : 'outlined'}
                onClick={() => setMod(name)}>
                {t(`calculator:extension.${name}.name`)}
              </ExtensionButton>
            ))}
          </CalculatorExtensionButtonWrapper>
        </CalculatorExtension>
      </CalculatorContainer>
    </CalculatorBox>
  );
}
