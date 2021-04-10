import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    border: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    border: 2,
    height: 36
  }
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black}
  }
`
const TextInput = styled.input`
  height: var(--height);
  border: none;
  font-size: var(--fontSize);
  border-bottom: var(--border) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px"}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{
        "--width": width + "px",
        "--height": styles.height + "px",
        "--border": styles.border + "px",
        "--font-size": styles.fontSize + "px"
      }} />
    </Wrapper>
  )
};

export default IconInput;
