import { Row, Space } from 'antd'
import { useDrag } from 'react-dnd'
import { BsImageAlt } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
export default function SectionBannerSpinImage() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'section',
    item: { id: uuidv4(), element: <SectionBannerSpinImage /> },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div
      ref={drag}
      className="h-24 p-2 bg-gray-100 border border-blue-500 cursor-move group hover:border-solid hover:bg-blue-100"
    >
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
