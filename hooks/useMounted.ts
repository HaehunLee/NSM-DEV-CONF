import { useEffect, useState } from 'react';

// SSR rendering 과정에서 클라이언트의 로직을 통해 rendering 되는 경우를 대응하기 위한 코드입니다.
// ex) localStorage값을 통한 렌더링..
const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
};

export default useMounted;
