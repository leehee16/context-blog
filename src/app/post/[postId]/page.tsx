import MarkdownRenderer from '@/shared/ui/MarkdownRenderer';

export default function PostPage() {
  const markdown = [
    '# h1 테스트',  
    '## h2 테스트',
    '### h3테스트',
    '#### h4테스트',
    '##### h5테스트',
    '###### h6테스트', 
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
      <div className="mt-8 text-left max-w-2xl mx-auto">
        <MarkdownRenderer content={markdown} />
      </div>
    </main>
  );
} 