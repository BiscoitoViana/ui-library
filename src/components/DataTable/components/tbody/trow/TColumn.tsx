import {
  borders,
  classnames,
  padding,
  textAlign,
  typography,
  whitespace,
} from "tailwindcss-classnames"
import { ColumnDef } from "../../.."

type TColumnProps<T> = {
  data: T
  columnDef: ColumnDef<T>
}

function TColumn<T>({
  data,
  columnDef
}: TColumnProps<T>): JSX.Element {
  const className = ["border-lib-grey-200 first-if-type:border-l last-of-type:border-r", classnames(
    padding('p-3'),
    typography('text-xs'),
    borders('border-y'),
    textAlign({
      ['text-left']: columnDef.align === undefined || columnDef.align === "left",
      ['text-center']: columnDef.align === "center",
      ['text-right']: columnDef.align === "right"
    }),
    whitespace({
      ['whitespace-nowrap']: columnDef.wrapContent === "nowrap"
    })
  )]

  if (columnDef.customCellRenderer !== undefined) {
    return <td className={className.join(" ")}>{columnDef.customCellRenderer(data)}</td>
  }

  return (
    <td className={className.join(" ")}>
      <span className="text-xs">{data[columnDef.column] as string}</span>
    </td>
  )
}

export { TColumn }