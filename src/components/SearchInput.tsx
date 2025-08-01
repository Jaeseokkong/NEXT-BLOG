'use client';

import { useState } from 'react';

type SearchInputProps = {
  onSearch: (keyword: string) => void;
  placeholder?: string;
};

const SearchInput = ({ onSearch, placeholder = "검색어를 입력하세요..." }: SearchInputProps): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setValue(keyword);
    onSearch(keyword);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100"
      />
    </div>
  );
};

export default SearchInput;
