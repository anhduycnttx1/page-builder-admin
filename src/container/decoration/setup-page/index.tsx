import { Button, Empty, Row, Space, Typography } from 'antd'
import SiderInformationSetupPage from './sider-setup/sider-information'
import SiderSectionSetupPage from './sider-setup/sider-section'
import { useDrop } from 'react-dnd'
import { useState } from 'react'

type BoardItemType = {
  id: string
  element: any
}

export default function DecorationSetupContainer() {
  const [board, setBoard] = useState<BoardItemType[]>([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'section',
    drop: (item: BoardItemType) => addSectionToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addSectionToBoard = (item: BoardItemType) => {
    setBoard((board) => [...board, item])
    console.log(board)
  }

  return (
    <>
      <Row
        className="bg-white h-[64px] px-6 shadow-sm"
        align="middle"
        justify="space-between"
        style={{
          borderBottom: '1px solid rgb(203 213 225)',
          position: 'fixed',
          right: 0,
          width: 'calc(100%)',
          zIndex: 50,
        }}
      >
        <Typography.Title level={4} className="mx-[200px]">
          Thiết kế trang mới
        </Typography.Title>
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

        <div ref={drop} className="mx-[200px] w-full mt-5 flex justify-center">
          <Space className="w-[375px] min-h-[460px] shadow-lg" direction="vertical">
            {board[0] ? (
              board.map((item: any, index: any) => {
                return <div key={index}>{item.element}</div>
              })
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="mt-40" />
            )}
          </Space>
        </div>

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
