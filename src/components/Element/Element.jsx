import React from "react";
import { join, trim, flow } from "lodash/fp";

import styles from "./Element.module.scss";

const Element = ({
  className,
  tagName,
  tag: Tag = tagName,
  children,
  flexContainer,
  flexItem,
  flexColumn,
  fullWidth,
  halfWidth,
  fitContent,
  centerContent,
  ...props
}) => {
  let classNames =
    className && className.length > 1 && getClassNames(className);

  if (fitContent) {
    const classNamesWithFitContent = [classNames, styles.fitContent];

    classNames = getClassNames(classNamesWithFitContent);
  }

  if (halfWidth) {
    const classNamesWithHalfWidth = [classNames, styles.halfWidth];

    classNames = getClassNames(classNamesWithHalfWidth);
  }

  if (fullWidth) {
    const classNamesWithFullWidth = [classNames, styles.fullWidth];

    classNames = getClassNames(classNamesWithFullWidth);
  }

  if (flexColumn) {
    const classNamesWithFlexColumn = [classNames, styles.flexColumn];

    classNames = getClassNames(classNamesWithFlexColumn);
  }

  if (flexItem) {
    const classNamesWithFlexItem = [classNames, styles.flexItem];

    classNames = getClassNames(classNamesWithFlexItem);
  }

  if (flexContainer) {
    const classNamesWithFlexContainer = [classNames, styles.flexContainer];

    classNames = getClassNames(classNamesWithFlexContainer);
  }

  if (centerContent) {
    const classNamesWithCenterContent = [classNames, styles.centerContent];

    classNames = getClassNames(classNamesWithCenterContent);
  }

  return (
    <Tag className={classNames || className} {...props}>
      {children}
    </Tag>
  );
};

const getClassNames = flow(join(" "), trim);

export default Element;
