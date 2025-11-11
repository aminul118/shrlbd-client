import { useSearchParams } from 'next/navigation';

const useSearchParamsValues = <T extends string>(
  keys: T[],
): Record<T, string | null> => {
  const searchParams = useSearchParams();
  const values = {} as Record<T, string | null>;

  keys.forEach((key) => {
    values[key] = searchParams.get(key);
  });

  return values;
};

export default useSearchParamsValues;
