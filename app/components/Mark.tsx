import { useFetcher } from "@remix-run/react";

import type { Task } from "./Item";

export default function Mark({ item }: { item: Task }) {
  const fetcher = useFetcher({ key: "update-task" });

  const updateStatus = (id: string) => {
    fetcher.submit(id, { method: "POST", action: `/tasks/${id}/update` })
  }

  return (
    <button
      className={item.done
        ? 'box done'
        : 'box'
      }
      onClick={() => updateStatus(item.id)}
    />
  );
}