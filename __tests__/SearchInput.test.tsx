import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/posts/SearchInput';

describe('SearchInput', () => {
  const placeholderText = "검색어를 입력하세요...";
  let onSearchMock: jest.Mock;

  beforeEach(() => {
    onSearchMock = jest.fn();
    render(<SearchInput onSearch={onSearchMock} />);
  });

  it('초기값은 빈 문자열이다', () => {
    const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('입력하면 onSearch가 호출된다', () => {
    const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(input.value).toBe('Jest');
    expect(onSearchMock).toHaveBeenCalledWith('Jest');
  });

  it('X 버튼 클릭하면 값이 지워지고 onSearch가 빈 문자열로 호출된다', () => {
    const input = screen.getByPlaceholderText(placeholderText) as HTMLInputElement;

    // 입력
    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(input.value).toBe('Jest');

    // X 버튼 클릭
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);

    expect(input.value).toBe('');
    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});
