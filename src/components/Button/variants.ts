import { tv } from "tailwind-variants";

const variants = tv({
  base: "flex items-center justify-center w-full rounded-lg font-bold",
  variants: {
    size: {
      sm: "h-11 text-sm",
      md: "h-12 text-base",
      lg: "h-16 text-lg",
      xl: "h-17 text-xl"
    },
    variant: {
      primary: "bg-primary-base text-white hover:bg-primary-hover active:bg-primary-active disabled:bg-zumira-grey-100",
      secondary: "",
    }
  },
  defaultVariants: {
    size: "md",
    variant: "secondary"
  }
})

export { variants }