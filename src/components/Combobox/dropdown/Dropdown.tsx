import { ReactNode } from "react"

type DropdownProps = {
  children: ReactNode
  open: boolean
}

function Dropdown({ children, open }: DropdownProps): JSX.Element {
  if(!open){
    return <></>
  }

  return (
    <div className="w-full border border-lib-grey-300 bg-white top-11 mt-2 absolute left-0 right-0 shadow-md z50 rounded-lg overflow-hidden">
      {children}
    </div>
  )
}

export { Dropdown }