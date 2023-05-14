import styled from '@emotion/styled';

export interface SelectProps {
  width?: number | string;
  sizeType?: 'sm' | 'md';
  color?: string;
  isError?: boolean;
}

export const Dropdown = styled.select`
  width: 144px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid #ffffff;
  font-weight: 700;
  color: #ffffff;

  background: url("data:image/svg+xml;utf8,<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M2 4L6 8L10 4' stroke='white'/> </svg>")
    no-repeat;
  background-position: calc(100% - 10px) center !important;
  background-color: transparent;
  appearance: none !important;

  option[value=''][disabled] {
    display: none;
  }
  &:focus {
    outline: 0;
  }
`;

export default Dropdown;
