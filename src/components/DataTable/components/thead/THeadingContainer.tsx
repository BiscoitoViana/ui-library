import { ReactNode } from "react";
import {
  classnames,
  height,
  padding,
  position,
  textAlign,
  typography,
  whitespace,
} from "tailwindcss-classnames"

import { SortColumnButton } from "./sorting/SortColumnButton";
import { ColumnDef } from "../..";

type THeadingContainerProps<T> = {
  children: ReactNode
  columnDef: ColumnDef<T>
  sorting: {
    sortable: boolean
    sorted: boolean
    direction: "ascending" | "descending" | undefined
  }
  onSortButtonClick: () => void
}

function THeadingContainer<T>({
  children,
  columnDef,
  onSortButtonClick,
  sorting,
}: THeadingContainerProps<T>): JSX.Element {
  const className = ['border-x bg-lib-grey-100 border-lib-grey-200 shadow-table-header', classnames(
    position('relative'),
    height('h-12'),
    padding('px-3', {
      ['pr-12']: sorting !== undefined
    }),
    textAlign({
      ['text-left']: columnDef.align === undefined || columnDef.align === "left",
      ['text-center']: columnDef.align === "center",
      ['text-right']: columnDef.align === "right"
    }),
    typography('font-medium', 'text-xs'),
    whitespace({
      ['whitespace-nowrap']: columnDef.wrapContent === "nowrap"
    })
  )]

  return (
    <th className={className.join(" ")}>
      {children}
      <SortColumnButton
        state={sorting}
        onClick={onSortButtonClick}
      />
    </th>
  )
}

export { THeadingContainer }