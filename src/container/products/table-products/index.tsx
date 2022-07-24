import { Row, Space, Table, Image, Button } from 'antd'
import React from 'react'
import { BsEye, BsSuitHeart } from 'react-icons/bs'
import { formatCurrentVND } from '../../../common/helper/formatCurrencyVND'
import { formatNumBig } from '../../../common/helper/formatNumberBig'

import { listProduct } from '../../../common/mocks/product/list-product'

interface DataProductType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns = [
  {
    title: 'Sản phẩm',
    dataIndex: 'name',
    key: 'name',
    width: 450,
    render: (text: any, record: any) => {
      return (
        <Space align="start" size="large">
          <Image width={70} preview={false} src={record.image} alt={record.itemid} />
          <Space direction="vertical" size={2}>
            <span className="font-medium">{text}</span>
            <Space size="large" className=" opacity-60">
              <Space align="baseline">
                <BsEye className="block" />
                <span>{record.liked_count}</span>
              </Space>
              <Space align="baseline">
                <BsSuitHeart className="block" />
                <span>{record.sold}</span>
              </Space>
            </Space>
          </Space>
        </Space>
      )
    },
  },
  {
    title: 'Giá gốc',
    dataIndex: 'price_max_before_discount',
    key: 'price_max_before_discount',
    render: (text: string) => <span>{formatCurrentVND(text)}</span>,
  },
  {
    title: 'Giá bán',
    dataIndex: 'price_max',
    key: 'price_max',
    render: (text: string) => <span>{formatCurrentVND(text)}</span>,
  },
  {
    title: 'Tồn kho',
    dataIndex: 'stock',
    key: 'stock',
    render: (text: string) => <span>{formatNumBig(text, 1)}</span>,
  },
  {
    title: 'Đã bán',
    dataIndex: 'cmt_count',
    key: 'cmt_count',
    render: (text: string) => <span>{formatNumBig(text, 1)}</span>,
  },
  {
    title: 'Hành động',
    key: 'action',
    width: 200,
    render: (_: any, record: any) => (
      <Space size={1}>
        <Button type="link" className="inline">
          Cập nhật
        </Button>
        <Button type="link" className="inline">
          Sao chép
        </Button>
        {/* <Button type="link" className="inline">
          Xem thêm
        </Button> */}
      </Space>
    ),
  },
]

function TableProduct() {
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
      dataSource={listProduct}
    />
  )
}

export default TableProduct
