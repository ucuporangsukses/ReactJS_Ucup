import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle(initialValue = 0) {
  const { count, increment, decrement, reset } = useCounter(initialValue);
  const [isVisible, toggleVisible] = useToggle(true);

  return {
    count,
    increment,
    decrement,
    reset,
    isVisible,
    toggleVisible,
  };
}
