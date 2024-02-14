import { tv } from "tailwind-variants";

const variants = tv({
  base: "flex items-center justify-center w-full font-medium w-fit",
  variants: {
    size: {
      sm: "h-9 text-xs px-3 rounded",
      md: "h-10 text-sm px-4 rounded-md",
      lg: "h-12 text-base px-6 rounded-lg",
    },
    variant: {
      primary: "bg-lib-blue-700 hover:bg-lib-blue-600 active:bg-lib-blue-800 text-white disabled:bg-lib-grey-300 disabled:text-lib-grey-100",
      secondary: "bg-lib-grey-300 hover:bg-lib-grey-400 active:bg-lib-grey-500 text-lib-grey-800 active:text-white disabled:opacity-50",
      danger: "bg-lib-red-600 hover:bg-lib-red-700 active:bg-lib-red-800 text-white disabled:opacity-50"
    },
  },
  defaultVariants: {
    size: "md",
    variant: "secondary",
  }
})

export { variants }