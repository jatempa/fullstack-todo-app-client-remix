export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default function Item({ item }: { item: Task }) {
  return (
    <span className={item.done ? 'done' : ''}>
      {item.title}
    </span>
  );
}
