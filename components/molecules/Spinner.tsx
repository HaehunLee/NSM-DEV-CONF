import { css, keyframes } from '@emotion/react';

import { IconSpinner } from '../atoms/icons';

interface SpinnerProps {
  size?: string;
  delay?: number;
}

const Spinner = ({ size = '100px', delay }: SpinnerProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <IconSpinner
        width={size}
        height={size}
        css={css`
          animation: ${rotate} ${delay ?? 0.6}s linear infinite;
        `}
      />
    </div>
  );
};

export default Spinner;

const rotate = keyframes`
100% {
  transform: rotate(360deg);
}
`;
