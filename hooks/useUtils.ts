import { useCallback } from "react";

const useUtils = () => {
  const exampleFunction = useCallback((arg1: string, arg2: number) => {
    // ここで処理を実装します。
  }, []);

  // 他にも関数を追加できます。

  return {
    exampleFunction,
    // 他の関数も返すことができます。
  };
};

export default useUtils;
