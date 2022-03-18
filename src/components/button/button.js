import { memo } from "react"
import style from "./button.module.scss"

export const Button = memo(({ name, handler }) => (
  <button data-type={String(name).toLowerCase()} className={style.button} onClick={handler}>
    {name}
  </button>
))
