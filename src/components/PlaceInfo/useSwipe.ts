import { TouchEvent, useState } from 'react';

export default function useSwipe(input: SwipeInput): SwipeOutput {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  return {
    onTouchStart(e: TouchEvent) {
      setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX);
    },

    onTouchMove(e: TouchEvent) {
      setTouchEnd(e.targetTouches[0].clientX);
    },

    onTouchEnd() {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isLeftSwipe) {
        input.onSwipedLeft();
      }
      if (isRightSwipe) {
        input.onSwipedRight();
      }
    },
  };
}

interface SwipeInput {
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}
