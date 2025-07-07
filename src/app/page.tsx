import ManuscriptBackground from '@/entities/manuscriptBackground';

export default function HomePage() {
  return (
    <main className="flex min-h-screen">
      {/* 왼쪽 6/10 영역 */}
      <section className="w-3/5 flex flex-col justify-start items-start bg-white/5 relative overflow-hidden" style={{padding: 0}}>
        {/* 원고지 배경 */}
        <ManuscriptBackground width={700} height={700} cellSize={32} lineColor="#bbb" lineWidth={1} style={{opacity:0.25}} />
        <div className="relative z-10 w-full">
          <h1 className="text-3xl font-bold p-15">안녕하세요. 이호진입니다.</h1>
        </div>
      </section>
      {/* 오른쪽 4/10 영역 (추후 컨텐츠) */}
      <section className="w-2/5 bg-white/10 flex items-center justify-center">
        {/* 오른쪽 컨텐츠 영역 (비워둠) */}
      </section>
    </main>
  );
}
