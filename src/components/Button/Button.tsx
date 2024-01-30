import { ComponentProps } from "react"
import { VariantProps } from "tailwind-variants"
import { variants } from "./variants"

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof variants>

function Button({ size, variant, className, ...props }: ButtonProps): JSX.Element {
  return <button {...props} className={variants({ size, variant, className })} />
}

export { Button }