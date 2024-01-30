import { SortingProps } from "./types";

function sortArrayAsString<T>({ column, data, direction }: SortingProps<T>): T[] {
  return (
    data
      .map((item) => item)
      .sort((a, b) => {
        if (direction === "ascending") {
          return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0
        }

        return a[column] > b[column] ? -1 : a[column] < b[column] ? 1 : 0
      })
  )
}

function sortArrayAsDate<T>({ column, data, direction }: SortingProps<T>): T[] {
  return (
    data
    .map(item => item)
    .sort((a, b) => {
      if(direction === "ascending"){
        return (
          new Date(a[column] as string).getTime() - new Date(b[column] as string).getTime()
        )
      }

      return (
        new Date(b[column] as string).getTime() - new Date(a[column] as string).getTime()
      )
    })
  )
}

function sortArrayAsNumber<T>({ column, data, direction }: SortingProps<T>): T[] {
  if(direction === "descending"){
    return data.map(item => item).sort()
  }

  return (
    data
    .map(item => item)
    .sort((a, b) => {
      if(direction === "ascending"){
        return (a[column] as number) - (b[column] as number)
      }

      return (b[column] as number) - (a[column] as number)
    })
  )
}

export {
  sortArrayAsDate,
  sortArrayAsNumber,
  sortArrayAsString
}