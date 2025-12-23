import LatestPostsPreview from '@/components/templates/LatestPostsPreview';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { AnchorHTMLAttributes, ReactNode } from 'react';

const pushMock = jest.fn();

type MockLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

jest.mock('next/link', () => {
  const MockLink = ({ href, children, ...rest }: MockLinkProps) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        pushMock(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );

  return MockLink;
});

describe('<LatestPostsPreview/>', () => {
  const basePosts = [
    {
      title: '포스트 타이틀1',
      date: '2025-09-15',
      slug: '포스트 슬러그1',
      category: '포스트 카테고리1',
      excerpt: '포스트 요약 정보1',
    },
    {
      title: '포스트 타이틀2',
      date: '2025-09-16',
      slug: '포스트 슬러그2',
      category: '포스트 카테고리2',
      excerpt: '포스트 요약 정보2',
    },{
      title: '포스트 타이틀3',
      date: '2025-09-17',
      slug: '포스트 슬러그3',
      category: '포스트 카테고리3',
      excerpt: '포스트 요약 정보3',
    },{
      title: '포스트 타이틀4',
      date: '2025-09-18',
      slug: '포스트 슬러그4',
      category: '포스트 카테고리4',
      excerpt: '포스트 요약 정보4',
    },
    {
      title: '포스트 타이틀5',
      date: '2025-09-19',
      slug: '포스트 슬러그5',
      category: '포스트 카테고리5',
      excerpt: '포스트 요약 정보5',
    },
  ]


  beforeEach(() => {
    pushMock.mockClear();
    render(<LatestPostsPreview initialPosts={basePosts} />);
  }) 
  

  it('props로 전달된 포스트가 화면에 올바르게 렌더링', () => {
     const title = screen.getByText('포스트 타이틀1');
     const date = screen.getByText('2025-09-18');
     const link = screen.getByRole('link', { name: '포스트 타이틀1 2025-09-15 포스트 요약 정보1'});
     const excerpt = screen.getByText('포스트 요약 정보1');

     expect(title).toBeInTheDocument();
     expect(date).toBeInTheDocument();
     expect(link).toHaveAttribute('href', '/posts/포스트 카테고리1/포스트 슬러그1')
     expect(excerpt).toBeInTheDocument();
  })

  it('initialPosts 배열에 따른 splice 적용 (최대 4개)', () => {
    const list = screen.getByRole('list');
    const postLinks = within(list).getAllByRole('link');
    expect(postLinks).toHaveLength(4);
  })


  it('링크 클릭 시 올바른 URL로 이동하는지', () => {
    const link = screen.getByTestId('post-link-포스트 슬러그1');
    
    fireEvent.click(link);
    
    expect(pushMock).toHaveBeenCalledWith(
      '/posts/포스트 카테고리1/포스트 슬러그1'
    );
  })

  it('전체 글 보기 버튼이 올바르게 렌더링', () => {
    const moreButton = screen.getByRole('link', { name: '전체 글 보기' });
    expect(moreButton).toHaveAttribute('href', '/posts')
  })
})