import { Row, Space, Table, Image, Button } from 'antd'
import React from 'react'
import type { ColumnsType } from 'antd/es/table'
import { listPage } from '../../../common/mocks/pages/list-pages'

type TableDecorationProp = {
  columns: ColumnsType<any>
}

function TableDecoration({ columns }: TableDecorationProp) {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record: any) => ({}),
  }
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={listPage}
    />
  )
}

export default TableDecoration
