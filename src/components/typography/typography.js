import { memo } from "react";
import style from "./typography.module.scss";

export const Typography = memo(({ text, isCompleted }) => (
  <div className={style.typography} data-completed={isCompleted}>
    {text}
  </div>
));
