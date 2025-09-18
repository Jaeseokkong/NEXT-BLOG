import LatestPostsPreview from '@/components/home/LatestPostsPreview';
import { render, screen } from '@testing-library/react';

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
})