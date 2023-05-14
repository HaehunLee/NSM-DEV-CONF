import {
  ReactNode,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';

import styled from '@emotion/styled';

interface InputGroupProps {
  rightIcon: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

const InputGroup = ({
  width,
  rightIcon,
  onClick,
  onKeyDown,
  ...props
}: InputGroupProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Div onKeyDown={onKeyDown}>
      <Input {...props} />
      <Icon onClick={onClick}>{rightIcon}</Icon>
    </Div>
  );
};

export default InputGroup;

const Div = styled.div`
  min-width: 190px;
  width: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  border: 1px solid #ffffff;
`;

const Input = styled.input`
  font-size: 18px;
  color: white;
  background-color: transparent;
  border: none;
  outline: 0;

  :placeholder-shown {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Icon = styled.div``;
