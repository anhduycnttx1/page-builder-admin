import { Row, Space } from 'antd'
import { useDrag } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid'
export default function SectionText() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'section',
    item: { id: uuidv4(), element: <SectionText /> },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div
      ref={drag}
      className="h-24 p-2 bg-gray-100 border border-blue-500 cursor-move group hover:border-solid hover:bg-blue-100"
    >
      <Row className="h-full px-2 border border-gray-300 border-dashed group-hover:border-blue-500">
        <Space direction="vertical" className="w-full">
          <div className="text-xl font-black text-gray-300 group-hover:text-blue-500">Aa</div>
          <div className="h-3 bg-gray-200 group-hover:bg-blue-400"></div>
          <div className="w-3/4 h-3 bg-gray-200 group-hover:bg-blue-400"></div>
        </Space>
      </Row>
    </div>
  )
}
