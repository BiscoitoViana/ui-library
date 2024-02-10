type DropdownItemContentProps<T> = {
  data: T
  optionKey: keyof T
  optionLabel?: keyof T
  customOptionLabel?: (value: T) => JSX.Element
}

function DropdownItemContent<T>({
  data, 
  optionKey,
  optionLabel,
  customOptionLabel
}: DropdownItemContentProps<T>): JSX.Element {
  if(customOptionLabel){
    return <>{customOptionLabel(data)}</>
  }

  if(optionLabel !== undefined){
    return <>{data[optionLabel] as string}</>
  }

  return <>{data[optionKey] as string}</>
}

export { DropdownItemContent }