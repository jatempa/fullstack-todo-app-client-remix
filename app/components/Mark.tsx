import type { Task } from "./Item";

export default function Mark({ item }: { item: Task }) {
  return (
    <button
      className={item.done
        ? 'box done'
        : 'box'
      }
      name="id"
      value={item.id}
    />
  );
}