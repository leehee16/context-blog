export const sampleData = [
  { id: 1, name: 'Leehojin', signal: 0.8, noise: 0.2, bias: 0.05, insight: 'A' },
  { id: 2, name: 'Alice', signal: 0.4, noise: 0.5, bias: 0.2, insight: 'B' },
  { id: 3, name: 'Bob', signal: 0.9, noise: 0.1, bias: 0.18, insight: 'C' },
  { id: 4, name: 'Carol', signal: 0.7, noise: 0.3, bias: 0.12, insight: 'D' },
];

export function fakeQuery(query: string): Array<Record<string, unknown>> {
  // 쿼리에 'Leehojin'이 포함되어 있으면 내 영어 이름만 출력
  if (query.includes('Leehojin')) {
    return [{ name: 'Leehojin' }];
  }
  // signal > noise && bias < 0.1 조건일 때 name, insight 모두 출력
  if (query.includes('signal > noise') && query.includes('bias < 0.1')) {
    return sampleData.filter(row => row.signal > row.noise && row.bias < 0.1).map(row => ({ name: row.name, insight: row.insight }));
  }
  if (query.includes('signal > noise')) {
    return sampleData.filter(row => row.signal > row.noise);
  }
  return sampleData;
} 