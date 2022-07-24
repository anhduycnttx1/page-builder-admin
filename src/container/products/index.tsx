import { Space, Row, Button, Popover, Tooltip, Breadcrumb, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { PlusOutlined, SettingOutlined, ReloadOutlined } from '@ant-design/icons'

import Link from 'next/link'
import TableProduct from './table-products'

export default function ProductContainer() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])
  const handelRefresh = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }
  return (
    <>
      {isLoading ? (
        <Row style={{ minHeight: 300, width: '100%' }} align="middle" justify="center">
          <Spin size="large" tip="loading..." />
        </Row>
      ) : (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Row className="px-5 py-3">
            <Breadcrumb className="cursor-pointer ">
              <Breadcrumb.Item>
                <Link href="/">
                  <a>
                    <HomeOutlined />
                  </a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href="/portal/product/list">
                  <a>Sản phẩm</a>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Space size="large" direction="vertical" className="w-full p-5 bg-white shadow-sm">
            <Row justify="space-between" align="middle">
              <span className="text-xl font-medium">Danh sách sản phẩm</span>
              <Space size="small">
                <Button type="primary" icon={<PlusOutlined />}>
                  Thêm Mới
                </Button>
                <Button type="primary" danger>
                  Xoá
                </Button>
                <Row>
                  {/* Button Refresh */}
                  <Tooltip placement="topLeft" title="Refresh">
                    <Button type="text" onClick={handelRefresh}>
                      <ReloadOutlined />
                    </Button>
                  </Tooltip>
                  <Popover content={contentPopover} title="Title" placement="bottomRight" trigger={'click'}>
                    <Tooltip placement="topLeft" title="Setting">
                      <Button type="text">
                        <SettingOutlined />
                      </Button>
                    </Tooltip>
                  </Popover>
                </Row>
              </Space>
            </Row>
            <TableProduct />
          </Space>
        </Space>
      )}
    </>
  )
}

function contentPopover() {
  return (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
}
