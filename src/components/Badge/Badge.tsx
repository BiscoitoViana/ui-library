import { VariantProps } from "tailwind-variants";
import { variants } from "./variants";
import { MouseEventHandler } from "react";

type BadgeProps = VariantProps<typeof variants> & {
  label: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

function Badge({
  label,
  onClick,
  variant
}: BadgeProps): JSX.Element {
  return <div className={variants({ variant })} onClick={onClick}>{label}</div>
}

export { Badge }