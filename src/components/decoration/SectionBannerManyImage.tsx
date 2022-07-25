import { Row, Space } from 'antd'
import { BsImageAlt } from 'react-icons/bs'
export default function BannerManyImage() {
  return (
    <Space className="border border-blue-500 cursor-move group group-hover:bg-blue-100 hover:border-solid">
      {new Array(2).fill(0).map((v, index) => {
        return (
          <div key={index} className="w-24 h-24 p-2 bg-gray-100 ">
            <Row
              className="h-full border border-gray-300 border-dashed group-hover:border-blue-500"
              justify="center"
              align="middle"
            >
              <Space direction="vertical">
                <BsImageAlt className="text-gray-300 group-hover:text-blue-500" />
              </Space>
            </Row>
          </div>
        )
      })}
    </Space>
  )
}
