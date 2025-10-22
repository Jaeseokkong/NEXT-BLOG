'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { debounce } from 'lodash';

type SearchInputProps = {
  onSearch: (keyword: string) => void;
  placeholder?: string;
};

const SearchInput = ({ onSearch, placeholder = "검색어를 입력하세요..." }: SearchInputProps) => {
  const [value, setValue] = useState('');

  const debouncedSearch = useMemo(
    () => debounce((keyword: string) => onSearch(keyword), 300),
    [onSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    }
  }, [debouncedSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setValue(keyword);
    debouncedSearch(keyword)
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };



  return (
    <div className="w-full mx-auto mb-6 mt-3 flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full bg-white dark:bg-zinc-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-400 transition">
      <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent focus:outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
      />
      {value && (
        <button onClick={handleClear} className="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
          <X className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
