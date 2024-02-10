type DropdownLoadingProps = {
  isLoading?: boolean
}

function DropdownLoading({ isLoading }: DropdownLoadingProps): JSX.Element {
  if(!isLoading) {
    return <></>
  }
  
  return <li className="w-full h-11 text-sm"><span>Loading...</span></li>
}

export { DropdownLoading }