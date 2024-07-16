import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks.ts';
import { setNewSearchTerm } from '../features/searchTerm/searchTermSlice.ts';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();
  const initialValue = useAppSelector((state) => state.searchTerm);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('prevSearchTerm');
    const searchTerm = storedSearchTerm ?? initialValue;
    localStorage.setItem('prevSearchTerm', searchTerm);
    dispatch(setNewSearchTerm(searchTerm));

    return () => localStorage.clear();
  }, [dispatch, initialValue]);
};
