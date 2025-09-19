import LatestPostsPreview from '@/components/home/LatestPostsPreview';
import { render, screen, within } from '@testing-library/react';

describe('<LatestPostsPreview/>', () => {
  it('props로 전달된 포스트가 화면에 올바르게 렌더링', () => {
    render(
      <LatestPostsPreview 
        initialPosts={[
          {
            title: '포스트 타이틀',
            date: '2025-09-18',
            slug: '포스트 슬러그',
            category: '포스트 카테고리',
            excerpt: '포스트 요약 정보',
          }
        ]} 
      />
     );

     const title = screen.getByText('포스트 타이틀');
     const date = screen.getByText('2025-09-18');
     const link = screen.getByRole('link', { name: '포스트 타이틀 2025-09-18 포스트 요약 정보'});
     const excerpt = screen.getByText('포스트 요약 정보');

     expect(title).toBeInTheDocument();
     expect(date).toBeInTheDocument();
     expect(link).toHaveAttribute('href', '/posts/포스트 카테고리/포스트 슬러그')
     expect(excerpt).toBeInTheDocument();
  })

  it('initialPosts 배열에 따른 splice 적용 (최대 4개)', () => {
    const testPosts = [
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
        title: '포스트 타이틀4',
        date: '2025-09-18',
        slug: '포스트 슬러그4',
        category: '포스트 카테고리4',
        excerpt: '포스트 요약 정보4',
      },
    ]

    render(<LatestPostsPreview initialPosts={testPosts} />);

    const list = screen.getByRole('list');
    const postLinks = within(list).getAllByRole('link');
    expect(postLinks).toHaveLength(4);
  })
})