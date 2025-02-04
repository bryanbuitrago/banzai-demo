"use client";
import { trpc } from "../_trpc/client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div>
      <h1>Todos</h1>
      {getTodos.data?.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
    </div>
  );
}
