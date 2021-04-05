/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
    progressHeight: 8 + "px",
    "--padding": 0
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
    progressHeight: 12 + "px",
    "--padding": 0
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    progressHeight: 16 + "px",
    "--padding": 4 + "px"
  }
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--borderRadius);
  background: ${COLORS.transparentGray35};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`
const ProgressLine = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: var(--borderRadiusRight);
  border-bottom-right-radius: var(--borderRadiusRight);
`

const ProgressBar = ({ value, size }) => {
   const styles = SIZES[size];
  let Component;
  console.log()
  if (size === "small") {
    
  }
  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100">
      <ProgressLine style={{
        "--width": value + "%",
        "--height": styles.progressHeight,
        "--borderRadiusRight": value > 98 ? value > 99 ? 4 + "px" : 2 + "px" : 0
      }}>
        <VisuallyHidden>
          {value}
        </VisuallyHidden>
      </ProgressLine>
    </Wrapper>
  );
};

export default ProgressBar;
