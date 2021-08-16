import React, { ReactNode } from 'react';
import { get } from 'lodash';

export const getChildComponentName = (child: ReactNode): string =>
  get(child, 'props.mdxType') || get(child, 'props.displayName') || '';

export const getChildWithProps = (child: ReactNode, props: { [key: string]: any }): ReactNode =>
  child && React.isValidElement(child) ? React.cloneElement(child, props) : child;
