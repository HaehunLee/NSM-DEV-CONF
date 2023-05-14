import styled from '@emotion/styled';

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  border-bottom: 1px dashed #ffffff;

  > :nth-of-type(n) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    flex: 1;
  }
  > :first-of-type {
    font-weight: 700;
    width: 100px;
    flex: initial;
  }
`;

export default Item;
