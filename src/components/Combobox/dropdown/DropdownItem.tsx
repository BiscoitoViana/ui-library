import { Dispatch, ReactNode, useCallback, useEffect, useRef } from "react"
import { ComboboxReducerAction } from "../actions/types"
import { VariantProps, tv } from "tailwind-variants"

type DropdownItemProps<T> = VariantProps<typeof variants> & {
  children: ReactNode
  onClick: () => void
  index: number
  dispatch: Dispatch<ComboboxReducerAction<T>>
}

const variants = tv({
  base: "w-full h-11 text-xs font-medium px-4 flex items-center text-lib-grey-600",
  variants: {
    isActive: {
      true: "text-white bg-lib-blue-400"
    }
  },
  defaultVariants: {
    isActive: false
  }
})

function DropdownItem<T>({
  children,
  dispatch,
  index,
  isActive,
  onClick
}: DropdownItemProps<T>): JSX.Element {
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if(isActive){
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [isActive])

  const handleHover = useCallback(() => {
    dispatch({ type: "SET-FOCUS", payload: index })
  }, [dispatch, index])

  return (
    <li
      ref={ref}
      className={variants({ isActive })}
      onMouseEnter={handleHover}
    >
      <button
        type="button"
        onClick={onClick}
        className="h-full w-full text-left flex items-center justify-start"
      >{children}</button>
    </li>
  )
}

export { DropdownItem }