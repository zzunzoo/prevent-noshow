import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">❌</span>
        <h1 className="text-4xl">노쇼 방지 서비스</h1>
        {/* <h2 className="text-2xl">당근 마켓에 어서오세요!</h2> */}
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/home" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
      </div>
    </div>
  );
}
