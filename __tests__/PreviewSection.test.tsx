import PreviewSection from "@/components/ui/PreviewSection";
import { render, screen } from "@testing-library/react";

describe("<PreviewSection />", () => {
  it("제목이 렌더링된다.", () => {
    render(<PreviewSection title="섹션 제목">내용</PreviewSection>);
    expect(screen.getByRole("heading", { name: "섹션 제목" })).toBeInTheDocument();
  });

  it("content가 렌더링된다.", () => {
    render(
      <PreviewSection title="섹션 제목" content="설명 텍스트">
        <></>
      </PreviewSection>
    );
    expect(screen.getByText("설명 텍스트")).toBeInTheDocument();
  });

  it("children이 렌더링된다.", () => {
    render(
      <PreviewSection title="섹션 제목">
        <div>자식 요소</div>
      </PreviewSection>
    );
    expect(screen.getByText("자식 요소")).toBeInTheDocument();
  });

  it("moreButton이 있으면 버튼이 표시된다.", () => {
    render(
      <PreviewSection
        title="섹션 제목"
        moreButton={{ href: "/test", label: "더보기" }}
      >
        <></>
      </PreviewSection>
    );
    const button = screen.getByRole("link", { name: "더보기" });
    expect(button).toHaveAttribute("href", "/test");
  });

  it("moreButton이 없으면 버튼이 표시되지 않는다.", () => {
    render(
    <PreviewSection title="섹션 제목">
      <></>
    </PreviewSection>
    );
    expect(screen.queryByRole("link", { name: "더보기" })).not.toBeInTheDocument();
  });
});
