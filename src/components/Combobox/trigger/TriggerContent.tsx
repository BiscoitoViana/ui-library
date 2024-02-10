type TriggerContentProps<T> = {
  optionKey: keyof T
  optionLabel?: keyof T
  customOptionLabel?: (value: T) => JSX.Element
  label?: string
  value: T | null
}

function TriggerContent<T>({
  label = "Select...",
  optionKey,
  optionLabel,
  customOptionLabel,
  value
}: TriggerContentProps<T>): JSX.Element {
  if(!value) {
    return (
      <div className="px-4 text-xs font-medium text-lib-grey-400">
        <span>{label}</span>
      </div>
    )
  }

  if(customOptionLabel !== undefined){
    return (
      <div className="px-4 text-xs font-medium text-lib-grey-700">
        {customOptionLabel(value)}
      </div>
    )
  }

  if(optionLabel !== undefined){
    return (
      <div className="px-4 text-xs font-medium text-lib-grey-700">
        <span>{value[optionLabel] as string}</span>
      </div>
    )
  }

  return (
    <div className="px-4 text-xs font-medium text-lib-grey-700">
      <span>{value[optionKey] as string}</span>
    </div>
  )
}

export { TriggerContent }