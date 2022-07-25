import { Input, Space, Switch, Typography } from 'antd'

export default function SiderInformationSetupPage() {
  return (
    <Space className="w-full px-4 py-3" direction="vertical">
      <Typography.Text className="text-lg">Thông tin cơ bản:</Typography.Text>
      <Space direction="vertical" className="w-full mt-5" size="large">
        <Space direction="vertical">
          <label>Tên trang:</label>
          <Input placeholder="Tên trang cần tạo ..." />
        </Space>
        <Space direction="vertical">
          <label>Đường dẫn:</label>
          <Input placeholder="Đường dẫn của trang ..." />
        </Space>
        <Space>
          <label>Trạng thái trang: </label>
          <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
        </Space>
      </Space>
    </Space>
  )
}
