import { ReactNode } from "react"

type DropdownListProps = {
  children: ReactNode
}

function DropdownList({
  children
}: DropdownListProps): JSX.Element {
  return (
    <ul className="w-full overflow-y-auto max-h-36 py-2">{children}</ul>
  )
}

export { DropdownList }