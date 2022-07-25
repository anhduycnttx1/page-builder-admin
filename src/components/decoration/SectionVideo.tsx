import { Row, Space } from 'antd'
import { BsPlayCircleFill } from 'react-icons/bs'
export default function SectionVideo() {
  return (
    <div className="h-24 p-2 bg-gray-100 border border-blue-500 cursor-move group hover:border-solid hover:bg-blue-100">
      <Row
        className="h-full border border-gray-300 border-dashed group-hover:border-blue-500"
        justify="center"
        align="middle"
      >
        <BsPlayCircleFill className="w-6 h-6 text-gray-300 group-hover:text-blue-500" />
      </Row>
    </div>
  )
}
