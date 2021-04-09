import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';


const Wrapper = styled.div`
  position:relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: var(--size);
  width: var(--size);
  margin: auto;
  pointer-events: none`


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  
  return (
    <Wrapper>
      <NativeSelect
      value={value}
      onChange={onChange}
      >
        {children}
      </NativeSelect>
        <PresentationalBit
          style={{
        "--height": 43 + "px"
        }}>
       {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
           <VisuallyHidden>
          {displayedValue}
        </VisuallyHidden>
        </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
