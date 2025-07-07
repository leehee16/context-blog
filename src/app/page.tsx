import MarkdownRenderer from '@/shared/ui/MarkdownRenderer';

export default function HomePage() {
  const markdown = [
    '## 마크다운 렌더러 테스트',
    '',
    '- [x] 체크박스',
    '- [ ] 미완료 체크박스',
    '',
    '| 표 | 예시 |',
    '|----|------|',
    '|  1 |  2   |',
    '',
    '```js',
    "console.log('Hello, world!'); \nconsole.log('안녕, 세상!');",
    '```',
    '',
    '**하이라이트**',
    '',
    '~~취소선~~',
    '',
    '> 인용문',
  ].join('\n');

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">안녕하세요! </h1>
      <span style={{ fontFamily: 'Pretendard, Arial, sans-serif' }}>
        Pretendard 폰트 실험<br />
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
        abcdefghijklmnopqrstuvwxyz<br />
        0123456789<br />
        !@#$%^&*()_+-= 한글 테스트
      </span>
      <br />
      <p className="mb-2">테스트 중입니다.</p>
      <div className="mt-8 text-left max-w-2xl mx-auto">
        <MarkdownRenderer content={markdown} />
      </div>
    </main>
  );
}
