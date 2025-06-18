import React from "react";
import { useGroups } from "../hooks/use-groups";
import { cn } from "../utils";
interface GridProps<T> {
  columnClassName?: string;
  rowClassName?: string;
  cols: number;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function Grid<T>(props: GridProps<T>) {
  const cols = props.cols ?? 2;
  const groups = useGroups(props.items, cols);
  const filling = React.useCallback(
    (items: T[]) => {
      const reminder = items.length % cols;
      if (reminder === 0) {
        return [];
      }
      return Array.from({ length: cols - reminder }).fill(null);
    },
    [cols],
  );
  return (
    <div className="flex flex-col gap-4">
      {groups.map((items, index) => (
        <div
          key={`col-${index}`}
          className={cn("flex w-full px-4 gap-3", props.columnClassName)}
        >
          {items.map((item, index) => (
            <div
              key={`row-${index}`}
              className={cn("flex-1", props.rowClassName)}
            >
              {props.renderItem(item)}
            </div>
          ))}
          {filling(items).map((item, index) => (
            <div
              key={`filling-${index}`}
              className={cn("flex-1", props.rowClassName)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
