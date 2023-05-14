import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { StudyModel } from '../interfaces';
import { MyStudiesState } from '../stores/studiesStore';

const useCheckMyList = (id: number) => {
  const [myList, setMyList] = useRecoilState(MyStudiesState);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdded = (item: StudyModel) => {
    if (myList) {
      setMyList((prev) => {
        const newList = [...prev, item];
        return newList;
      });
    } else {
      setMyList([item]);
    }
    setIsAdded(true);
  };
  const handleInAdded = (item: StudyModel) => {
    const confirmed = confirm('담은 강의를 취소하시겠습니까?');

    if (confirmed) {
      if (myList) {
        setMyList((prev) => {
          const newList = prev.filter((prev) => prev.id !== item.id);
          return newList;
        });
        setIsAdded(false);
      }
    }
  };

  useEffect(() => {
    if (myList) {
      const prev = myList.find((prevItem) => prevItem.id === id);
      if (prev) {
        setIsAdded(true);
      }
    }
  }, [myList]);

  return {
    isAdded,
    onAdded: handleAdded,
    onInAdded: handleInAdded,
  };
};

export default useCheckMyList;
