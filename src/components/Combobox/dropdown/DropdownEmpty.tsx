type DropdownEmptyProps = {
  isEmpty: boolean
}

function DropdownEmpty({ isEmpty }: DropdownEmptyProps): JSX.Element {
  if(!isEmpty){
    return <></>
  }

  return <li>No results found</li>
}

export { DropdownEmpty }