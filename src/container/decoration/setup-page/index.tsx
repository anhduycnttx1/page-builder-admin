import { Button, Row, Space, Typography } from 'antd'
import SiderLeftSetupPage from './sider-setup/sider-left'
import SiderRightSetupPage from './sider-setup/sider-right'

export default function DecorationSetupContainer() {
  return (
    <>
      <Row
        className="bg-white h-[64px] px-6 shadow-sm"
        align="middle"
        justify="space-between"
        style={{ borderBottom: '1px solid rgb(203 213 225)', position: 'fixed', right: 0, width: 'calc(100% - 200px)' }}
      >
        <Typography.Title level={4}>Thiết Kế Trang Mới</Typography.Title>
        <Space>
          <Button>Xem trước</Button>
          <Button type="primary">Áp dụng</Button>
        </Space>
      </Row>
      <Row className="mt-[64px]">
        {/* Sibar-left */}
        <Space
          direction="vertical"
          className="bg-white min-h-[260px] min-w-[200px]"
          style={{ height: 'calc(100% - 128px)', overflow: 'auto', position: 'fixed' }}
        >
          <SiderLeftSetupPage />
        </Space>
        {/* Content */}
        <Row justify="center" className="mx-[200px] w-full mt-5">
          <Space direction="vertical" className="w-[375px] shadow-lg">
            {new Array(34).fill(0).map((v, i) => (
              <div key={i}>test</div>
            ))}
          </Space>
        </Row>
        {/* Sibar-left */}
        <Space
          direction="vertical"
          className="bg-white min-h-[260px] min-w-[200px]"
          style={{ height: 'calc(100% - 128px)', overflow: 'auto', position: 'fixed', right: 0 }}
        >
          <SiderRightSetupPage />
        </Space>
      </Row>
    </>
  )
}
