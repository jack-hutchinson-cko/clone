import React, { ReactNode } from 'react';
import { get, toArray } from 'lodash';
import {
  ControlValueType,
  CodeControlStateType,
  SelectOptionType,
  SelectedBlockType,
} from './types';

export const getChildComponentName = (child: ReactNode): string =>
  get(child, 'props.mdxType') || get(child, 'props.displayName') || '';

export const getChildWithProps = (child: ReactNode, props: { [key: string]: any }): ReactNode =>
  child && React.isValidElement(child) ? React.cloneElement(child, props) : child;

export const getSouceCodeFromMdxTab = (child: ReactNode): string =>
  child && (get(child, 'props.children.props.children.props.children') || '');

export const getAffectedLines = ({
  codeControlState,
  title,
}: {
  codeControlState: CodeControlStateType;
  title: string;
}): ControlValueType[] =>
  toArray(codeControlState)
    .filter(({ tab }) => tab === title)
    .sort((item1, item2) => item1.lines[0] - item2.lines[0]);

export const getResultSourceCode = ({
  child,
  codeControlState,
}: {
  child: ReactNode;
  codeControlState: CodeControlStateType;
}): string => {
  const initialCode = getSouceCodeFromMdxTab(child);
  const title = get(child, 'props.title');

  const affectedLines = getAffectedLines({ codeControlState, title });

  if (affectedLines.length) {
    const codeByLines = initialCode.split('\n');

    const resultCodeByLines = affectedLines.reduce(
      ({ resultCode, lineSift }, { lines, optionValue }) => {
        const startInsetIndex = lineSift + lines[0] - 1;
        const endInsetIndex = lineSift + lines[1];

        return {
          resultCode: [
            ...resultCode.slice(0, startInsetIndex),
            optionValue,
            ...resultCode.slice(endInsetIndex, resultCode.length),
          ],
          lineSift: lineSift + lines[0] - lines[1],
        };
      },
      {
        resultCode: codeByLines,
        lineSift: 0,
      },
    );

    return resultCodeByLines.resultCode.join('\n');
  }

  return initialCode;
};

export const getCodeProperty = (
  children: ReactNode,
): {
  code: string;
  insertedRowsCount: number;
} => {
  const code = get(children, 'props.children.props.children');

  const resultCode =
    code.charAt(code.length - 1) === '\n' ? code.slice(0, code.length - 1) : code || '';

  const insertedRowsCount = resultCode.split('\n').length;

  return {
    code: resultCode,
    insertedRowsCount,
  };
};

export const getOptionValue = ({
  optionItem,
  code,
}: {
  optionItem: SelectOptionType;
  code: string;
}): { selectedOption: string; optionValue: string } => {
  const { option: selectedOption, codeVariables = [] } = optionItem;
  const regForReplace = RegExp(/\$[0-9]+/g);

  const optionValue = code.replace(regForReplace, (entity: string) => {
    const index = Number(entity.replace('$', '')) - 1;

    return codeVariables[index] || entity;
  });

  return { selectedOption, optionValue };
};

export const getSelectedLines = ({
  selectedBlock,
  codeTitle,
  codeControlState,
}: {
  selectedBlock: SelectedBlockType;
  codeTitle: string;
  codeControlState: CodeControlStateType;
}): number[] => {
  const [startIndex, endIndex] = selectedBlock.lines || [];
  let startIndexShift = 0;
  let endIndexShift = 0;
  const affectedLines = getAffectedLines({ codeControlState, title: codeTitle });

  affectedLines.forEach(({ lines, insertedRowsCount }) => {
    const delta = insertedRowsCount - (lines[1] - lines[0] + 1);
    if (delta !== 0) {
      if (lines[1] < startIndex) {
        startIndexShift += delta;
        endIndexShift += delta;
      } else if (lines[0] >= startIndex && lines[1] <= endIndex) {
        endIndexShift += delta;
      }
    }
  });

  return [startIndex + startIndexShift, endIndex + endIndexShift];
};
