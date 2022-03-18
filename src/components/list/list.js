import { memo } from "react";
import { Item } from "../";
import style from "./list.module.scss";

export const List = memo(({ values = [] }) => (
  <div className={style.list}>
    {values.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
      />
    ))}
  </div>
));
