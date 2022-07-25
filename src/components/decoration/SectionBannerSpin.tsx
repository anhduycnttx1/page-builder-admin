import { Row, Space } from 'antd'
import { BsImageAlt } from 'react-icons/bs'
export default function BannerSpinImage() {
  return (
    <div className="h-24 p-2 bg-gray-100 border border-blue-500 cursor-move group hover:border-solid hover:bg-blue-100">
      <Row
        className="h-full border border-gray-300 border-dashed group-hover:border-blue-500"
        justify="center"
        align="middle"
      >
        <div className="mt-3 text-center text-gray-300 group-hover:text-blue-500">
          <BsImageAlt className="w-6 h-6" />
          <div>• • •</div>
        </div>
      </Row>
    </div>
  )
}
