import { Row } from 'antd'
import { useDrag } from 'react-dnd'
import { BsPlayCircleFill } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

export default function SectionVideo() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'section',
    item: { id: uuidv4(), element: <SectionVideo /> },
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
        <BsPlayCircleFill className="w-6 h-6 text-gray-300 group-hover:text-blue-500" />
      </Row>
    </div>
  )
}
