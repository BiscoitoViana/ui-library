import { tv } from "tailwind-variants";

const variants = tv({
  base: "w-fit px-3 py-1.5 rounded text-xs",
  variants: {
    variant: {
      success: "bg-lib-green-200 text-lib-green-700",
      warning: "bg-lib-yellow-100 text-lib-yellow-700",
      error: "bg-lib-red-100 text-lib-red-600",
      info: "bg-lib-blue-200 text-lib-blue-600"
    }
  },
  defaultVariants: {
    variant: "info",
  }
})

export { variants } 