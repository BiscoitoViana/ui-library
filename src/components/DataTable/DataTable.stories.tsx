import type { Meta, StoryObj, } from '@storybook/react';

import { DataTable } from './DataTable';
import { MockDataTableRecord, products } from './mock';
import { Badge } from '..';
import { useState } from 'react';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Standard: Story = {
  render: () => (
    <DataTable
      data={products}
      keyExtractor="id"
      columnDefs={[
        {
          column: "id",
          headerTitle: "Order ID",
          sorting: { type: "number" },
          wrapContent: "nowrap"
        },
        {
          column: "customer",
          headerTitle: "Customer",
          sorting: { type: "string" },
          wrapContent: "nowrap"
        },
        {
          column: "shippingTo",
          headerTitle: "Shipping Location",
          wrapContent: "nowrap"
        },
        {
          column: "price",
          headerTitle: "Total price",
          customCellRenderer: (data) => (
            <span>{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(data.price)}</span>
          ),
          align: "right",
          sorting: {
            type: "number"
          }
        },
        {
          column: "status",
          headerTitle: "Status",
          customCellRenderer: (data) => {
            if (data.status === "in progress") {
              return <Badge variant="success" label={data.status} />
            }
            if (data.status === "on hold") {
              return <Badge variant="error" label={data.status} />
            }

            return <Badge variant="warning" label={data.status} />
          },
          sorting: {
            type: "string"
          },
        }
      ]}
    />
  )
}

export const Draggable = () => {
  const [state, setState] = useState<MockDataTableRecord[]>(products)

  return (
    <DataTable
      data={state}
      keyExtractor="id"
      draggable
      onRowDropped={(value) => setState(value)}
      columnDefs={[
        {
          column: "id",
          headerTitle: "Order ID",
          wrapContent: "nowrap"
        },
        {
          column: "customer",
          headerTitle: "Customer",
          wrapContent: "nowrap"
        },
        {
          column: "shippingTo",
          headerTitle: "Shipping Location",
          wrapContent: "nowrap"
        },
        {
          column: "price",
          headerTitle: "Total price",
          customCellRenderer: (data) => (
            <span>{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(data.price)}</span>
          ),
          align: "right",
        },
        {
          column: "status",
          headerTitle: "Status",
          customCellRenderer: (data) => {
            if (data.status === "in progress") {
              return <Badge variant="success" label={data.status} />
            }
            if (data.status === "on hold") {
              return <Badge variant="error" label={data.status} />
            }

            return <Badge variant="warning" label={data.status} />
          },
        }
      ]}
    />
  )
}

export const CustomRowStyle: Story = {
  render: () => (
    <DataTable
      data={products}
      keyExtractor="id"
      columnDefs={[
        {
          column: "id",
          headerTitle: "Order ID",
          sorting: { type: "number" },
          wrapContent: "nowrap"
        },
        {
          column: "customer",
          headerTitle: "Customer",
          sorting: { type: "string" },
          wrapContent: "nowrap"
        },
        {
          column: "shippingTo",
          headerTitle: "Shipping Location",
          wrapContent: "nowrap"
        },
        {
          column: "price",
          headerTitle: "Total price",
          customCellRenderer: (data) => (
            <span>{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(data.price)}</span>
          ),
          align: "right",
          sorting: {
            type: "number"
          }
        },
      ]}
      customRowStyle={(value) => {
        if(value.status === "open"){
          return "!bg-lib-yellow-200 !text-lib-yellow-600"
        }

        if(value.status === "on hold"){
          return "!bg-lib-red-300 !text-lib-red-800"
        }

        return "!bg-lib-green-500 !text-white"
      }}
    />
  )
}

export const HiddenHeader: Story = {
  render: () => (
    <DataTable
      data={products}
      keyExtractor="id"
      columnDefs={[
        {
          column: "id",
          headerTitle: "Order ID",
          sorting: { type: "number" },
          wrapContent: "nowrap"
        },
        {
          column: "customer",
          headerTitle: "Customer",
          sorting: { type: "string" },
          wrapContent: "nowrap"
        },
        {
          column: "shippingTo",
          headerTitle: "Shipping Location",
          wrapContent: "nowrap"
        },
        {
          column: "price",
          headerTitle: "Total price",
          customCellRenderer: (data) => (
            <span>{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(data.price)}</span>
          ),
          align: "right",
          sorting: {
            type: "number"
          }
        },
        {
          column: "status",
          headerTitle: "Status",
          customCellRenderer: (data) => {
            if (data.status === "in progress") {
              return <Badge variant="success" label={data.status} />
            }
            if (data.status === "on hold") {
              return <Badge variant="error" label={data.status} />
            }

            return <Badge variant="warning" label={data.status} />
          },
          sorting: {
            type: "string"
          },
        }
      ]}
      hiddenHeader
    />
  )
}

export const StickyHeader: Story = {
  render: () => (
    <div className="h-40 overflow-y-auto">
      <DataTable
        data={products}
        keyExtractor="id"
        columnDefs={[
          {
            column: "id",
            headerTitle: "Order ID",
            sorting: { type: "number" },
            wrapContent: "nowrap"
          },
          {
            column: "customer",
            headerTitle: "Customer",
            sorting: { type: "string" },
            wrapContent: "nowrap"
          },
          {
            column: "shippingTo",
            headerTitle: "Shipping Location",
            wrapContent: "nowrap"
          },
          {
            column: "price",
            headerTitle: "Total price",
            customCellRenderer: (data) => (
              <span>{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(data.price)}</span>
            ),
            align: "right",
            sorting: {
              type: "number"
            }
          },
          {
            column: "status",
            headerTitle: "Status",
            customCellRenderer: (data) => {
              if (data.status === "in progress") {
                return <Badge variant="success" label={data.status} />
              }
              if (data.status === "on hold") {
                return <Badge variant="error" label={data.status} />
              }

              return <Badge variant="warning" label={data.status} />
            },
            sorting: {
              type: "string"
            },
          }
        ]}
        stickyHeader
      />
    </div>
  )
}