import ProjectsPreview from "@/components/home/ProjectsPreview"
import { getAllProjects } from "@/lib/projects";
import { render, screen } from "@testing-library/react";

jest.mock('@/lib/projects', () => ({
	getAllProjects: jest.fn().mockReturnValue([
		{
			title: '프로젝트 타이틀1',
			description: '프로젝트 내용1',
			tech: ["기술1", "기술2", "기술3"]
		},
		{
			title: '프로젝트 타이틀2',
			description: '프로젝트 내용2',
			tech: ["기술1", "기술2", "기술3"]
		},
		{
			title: '프로젝트 타이틀3',
			description: '프로젝트 내용3',
			tech: ["기술1", "기술2", "기술3"]
		},
		{
			title: '프로젝트 타이틀4',
			description: '프로젝트 내용4',
			tech: ["기술1", "기술2", "기술3"]
		},
		{
			title: '프로젝트 타이틀5',
			description: '프로젝트 내용5',
			tech: ["기술1", "기술2", "기술3"]
		}
	])
}))

describe('<ProjectPreview />', () => {

	beforeEach(() => {
		render(<ProjectsPreview />);
	})

	it('프로젝트 타이틀과 설명이 렌더링된다.', () => {
		expect(screen.getByText('프로젝트 타이틀1')).toBeInTheDocument();
		expect(screen.getByText('프로젝트 내용1')).toBeInTheDocument();
	});

	it('프로젝트 프리뷰가 4개만 렌더링된다.', () => {
		const projects = screen.getAllByRole('heading', { level: 3 });
		expect(projects).toHaveLength(4);
	})
})