import { Space, Typography } from 'antd'
import SectionBannerManyImage from '../../../../components/decoration/SectionBannerManyImage'
import SectionBannerOneImage from '../../../../components/decoration/SectionBannerOneImage'
import SectionBannerSpinImage from '../../../../components/decoration/SectionBannerSpin'
import SectionText from '../../../../components/decoration/SectionText'
import SectionVideo from '../../../../components/decoration/SectionVideo'

export default function SiderSectionSetupPage() {
  return (
    <Space className="w-full px-4 py-3" direction="vertical">
      <Typography.Text className="text-lg">Hình ảnh và Văn bản</Typography.Text>
      <Space direction="vertical" className="w-full mt-2" size="large">
        <Space direction="vertical" className="w-full">
          <label className="opacity-80">Banner xoay vòng</label>
          <SectionBannerSpinImage />
        </Space>
        <Space direction="vertical" className="w-full">
          <label className="opacity-80">Banner - nhiều hình ảnh</label>
          <SectionBannerManyImage />
        </Space>
        <Space direction="vertical" className="w-full">
          <label className="opacity-80">Banner - 1 hình ảnh</label>
          <SectionBannerOneImage />
        </Space>
        <Space direction="vertical" className="w-full">
          <label className="opacity-80">Video</label>
          <SectionVideo />
        </Space>
        <Space direction="vertical" className="w-full">
          <label className="opacity-80">Văn bản</label>
          <SectionText />
        </Space>
      </Space>
    </Space>
  )
}
