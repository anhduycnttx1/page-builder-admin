import { Button, Row, Modal, Space, Typography, Tabs } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableDecoration from './table-decoration'
import { useState } from 'react'
import Link from 'next/link'

export default function DecorationContainer() {
  const columns = [
    {
      title: 'Tên Trang',
      dataIndex: 'title',
      key: 'title',
      width: 450,
    },
    {
      title: 'Đường dẫn',
      dataIndex: 'slug',
      key: 'slug',
      render: (text: string) => (
        <span className="cursor-default px-2 py-0.5 bg-blue-100 rounded-md font-medium">{text}</span>
      ),
    },
    {
      title: 'trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (item: boolean) => (
        <span
          className={`px-2 py-0.5  rounded-md font-medium text-xs cursor-default ${
            item ? 'bg-green-100 text-green-500' : 'bg-rose-100 text-rose-500'
          }`}
        >
          {item ? 'Hoạt động' : 'Tạm dừng'}
        </span>
      ),
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
          <ButtonModalPreviewPage disabled={!record.status} />
        </Space>
      ),
    },
  ]

  return (
    <div className="p-8">
      <Space style={{ minHeight: 320 }} className="w-full p-5 bg-white" direction="vertical">
        <Row justify="space-between" align="middle" className="my-3">
          <Typography.Title level={4}>Danh sách các trang</Typography.Title>
          <Space size="small">
            <Link href="/portal/decoration/setup/new?tag=page-mb">
              <a>
                <Button htmlType="button" type="primary" icon={<PlusOutlined />}>
                  Trang mới
                </Button>
              </a>
            </Link>

            <Button type="primary" danger>
              Xoá
            </Button>
          </Space>
        </Row>
        <TableDecoration columns={columns} />
      </Space>
    </div>
  )
}

function ButtonModalPreviewPage({ disabled }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const urlWebPreview = 'https://www.allbirds.com/'
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Button type="link" className="inline" onClick={showModal} disabled={disabled}>
        Xem mẫu
      </Button>
      <Modal
        title="Preview Page"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ minWidth: 1200 }}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Phiên bản di động" key="page" className="px-32">
            <Space style={{ minHeight: 350, marginTop: 30, marginBottom: 30 }} size={50}>
              <div className="preview-app-mobile">
                <iframe
                  src={urlWebPreview}
                  className="absolute left-[50px] top-[6px] "
                  style={{
                    transform: 'translate(-17.6%, -17.6027%) scale(0.648, 0.647945)',
                    width: 375,
                    height: 730,
                    borderRadius: 50,
                    zIndex: 10,
                  }}
                />
              </div>
              <Space direction="vertical">
                <Typography.Title level={3}>Giao diện (phiên bản di động) hiện tại</Typography.Title>
                <Space direction="vertical" className="px-5 py-5 bg-gray-50" size="large">
                  <div>
                    <span className=" opacity-60">Thời gian lưu lần cuối:</span> <span>02:00 01-07-2022</span>
                  </div>
                  <div>
                    <span className=" opacity-60">Người lưu lần cuối:</span> <span>Serati Maf</span>
                  </div>
                </Space>
                <Button type="primary" className="mt-7">
                  Chỉnh sửa giao diện
                </Button>
              </Space>
            </Space>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Phiên bản máy tính" key="pcpage" className="px-16">
            <Space style={{ minHeight: 350, marginTop: 30, marginBottom: 30 }} size={50}>
              <div className="preview-app-pc">
                <iframe
                  src={urlWebPreview}
                  className="absolute left-[49px] top-[10px] "
                  style={{
                    transform: 'translate(-35.7639%, -34.4731%) scale(0.284722, 0.310538)',
                    width: 1514,
                    height: 938,
                    borderRadius: 10,
                    zIndex: 8,
                  }}
                />
              </div>
              <Space direction="vertical">
                <Typography.Title level={3}>Giao diện (phiên bản máy tính) hiện tại</Typography.Title>
                <Space direction="vertical" className="px-5 py-5 bg-gray-50" size="large">
                  <div>
                    <span className=" opacity-60">Thời gian lưu lần cuối:</span> <span>02:00 01-07-2022</span>
                  </div>
                  <div>
                    <span className=" opacity-60">Người lưu lần cuối:</span> <span>Serati Maf</span>
                  </div>
                </Space>
                <Button type="primary" className="mt-7">
                  Chỉnh sửa giao diện
                </Button>
              </Space>
            </Space>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  )
}
