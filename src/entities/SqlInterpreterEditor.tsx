'use client';
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { material } from '@uiw/codemirror-theme-material';
import { fakeQuery } from '@/entities/fakeSqlInterpreter';
import Card from '@/shared/ui/Card';

const defaultQuery = `WITH observation AS (
  SELECT * FROM context WHERE signal > noise
),
insights AS (
  SELECT extract(insight) AS value FROM observation WHERE bias < 0.1
)
SELECT result FROM insights;`;

const SqlInterpreterEditor: React.FC = () => {
  const [query, setQuery] = useState(defaultQuery);
  const [result, setResult] = useState<Array<Record<string, unknown>>>([]);

  const handleRun = () => {
    setResult(fakeQuery(query));
  };

  return (
    <Card className="max-w-2xl mx-auto mt-12">
      <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">SQL</label>
      <CodeMirror
        value={query}
        height="200px"
        extensions={[sql()]}
        theme={material}
        onChange={(value) => {
          setQuery(value);
        }}
        className="mb-4 bg-transparent !bg-[var(--card-bg)]"
      />
      <button
        className="px-5 py-2 border border-gray-400 bg-white text-gray-700 font-normal rounded-lg hover:bg-gray-100 transition mb-8 text-base shadow-none"
        onClick={handleRun}
      >
        실행
      </button>
      {result.length > 0 ? (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-300 dark:border-neutral-700 text-base rounded-lg overflow-hidden">
            <thead>
              <tr>
                {Object.keys(result[0]).map(key => (
                  <th key={key} className="border px-3 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 font-bold">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, i) => (
                <tr key={i} className="even:bg-gray-50 even:dark:bg-neutral-800">
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="border px-3 py-2 text-center">{String(val)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-400 dark:text-gray-500 text-center mt-8">실행 ㄱ</div>
      )}
    </Card>
  );
};

export default SqlInterpreterEditor; 