import { Button, Row, Space, Typography } from 'antd'
import BannerManyImage from '../../../components/decoration/SectionBannerManyImage'
import BannerOneImage from '../../../components/decoration/SectionBannerOneImage'
import BannerSpinImage from '../../../components/decoration/SectionBannerSpin'
import SectionTesxt from '../../../components/decoration/SectionText'
import SectionVideo from '../../../components/decoration/SectionVideo'
import SiderInformationSetupPage from './sider-setup/sider-information'
import SiderSectionSetupPage from './sider-setup/sider-section'

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
          className="bg-white min-h-[260px] min-w-[233px]"
          style={{ height: 'calc(100% - 128px)', overflow: 'auto', position: 'fixed' }}
        >
          <SiderInformationSetupPage />
        </Space>
        {/* Content */}
        <Row justify="center" className="mx-[200px] w-full mt-5">
          <Space direction="vertical" className="w-[375px] shadow-lg">
            <SectionTesxt />
            <BannerSpinImage />
            <SectionVideo />
            {new Array(4).fill(0).map((v, i) => (
              <>
                <BannerOneImage key={i} />
                <SectionTesxt />
                <BannerManyImage />
              </>
            ))}
          </Space>
        </Row>
        {/* Sibar-left */}
        <Space
          direction="vertical"
          className="bg-white min-h-[260px] min-w-[200px]"
          style={{ height: 'calc(100% - 128px)', overflow: 'auto', position: 'fixed', right: 0 }}
        >
          <SiderSectionSetupPage />
        </Space>
      </Row>
    </>
  )
}
