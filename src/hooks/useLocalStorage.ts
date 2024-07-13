import { useEffect, useState } from 'react';

export const useLocalStorage = (initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [searchTerm, setSearchTerm] = useState(() => {
    const storedSearchTerm = localStorage.getItem('prevSearchTerm');
    return storedSearchTerm ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem('prevSearchTerm', searchTerm);

    return () => localStorage.clear();
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
};
