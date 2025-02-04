import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">tRPC + Next.js 14 App Router</h1>
      <TodoList />
    </div>
  );
}
