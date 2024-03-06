import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'primary' | 'secondary' | 'destructive';
type Size = 'small' |'medium'| 'large';

type ButtonProps = {
  onClick?: () => void;
  type?: ButtonType;
  size?: Size;
  title: string;
};

const ButtonContainer = styled.div<{
  type: 'primary' | 'secondary' | 'destructive';
  size: 'small' |'medium'| 'large';
}>`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: flex;
  background-color: ${(props) =>
    props.type === 'primary'
      ? '#FFC8C8'
      : props.type === 'secondary'
      ? '#CBD1D9'
      : '#FFF6F6'};
  color: ${(props) =>
    props.type === 'primary'
      ? 'white'
      : props.type === 'secondary'
      ? '##EEF1F3'
      : '#FF3E3E'};
  cursor: pointer;


  ${(props) =>
    props.size === 'large' &&
    css`
      height: 50px;
      font-size: 1.25rem;
      width: 250px;
      text-align: center;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 40px;
      font-size: 1rem;
      width: 150px;
      text-align: center;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      height: 20px;
      font-size: 0.875rem;
      width: 75px;
      text-align: center;
    `}
  &:hover {
    background-color: ${(props) =>
      props.type === 'primary'
        ? '#1065ED'
        : props.type === 'secondary'
        ? '#FFB8B8'
        : '#FFDFDF'};
    color: ${(props) => props.type !== 'destructive' && 'white'};
  }
`;

const ButtonTitle = styled.p`
  font-weight: 700;
`;

export default function Button(props: ButtonProps) {
  const { type = 'primary', size ='large', title, onClick = () => {} } = props;
  const [hover, setHover] = useState(false);
  return (
    <ButtonContainer
      type={type}
      size={size}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}