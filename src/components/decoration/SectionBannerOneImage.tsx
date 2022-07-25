import { Button, Popover, Row, Space, Typography, Image } from 'antd'
import { useDrag } from 'react-dnd'
import { BsImageAlt } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useState } from 'react'
import { UploadOutlined, PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

export default function SectionBannerOneImage() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'section',
    item: { id: uuidv4(), element: <SectionBMOBeforDrop /> },
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
        <BsImageAlt className="w-6 h-6 text-gray-300 group-hover:text-blue-500" />
      </Row>
    </div>
  )
}

function SectionBMOBeforDrop() {
  const [image, setImage] = useState('')
  return (
    <Popover
      placement="rightTop"
      title="Banner - 1 hình ảnh"
      content={<ContectPopover setImage={setImage} image={image} />}
      trigger="click"
    >
      <div className="p-2 bg-gray-100 border-2 border-blue-500 cursor-pointer group hover:border-solid ">
        {image ? (
          <Image alt="image" preview={false} src={image} />
        ) : (
          <Row className="h-full border border-gray-300 border-dashed min-h-[96px]" justify="center" align="middle">
            <BsImageAlt className="w-6 h-6 text-gray-300 " />
          </Row>
        )}
      </div>
    </Popover>
  )
}

function ContectPopover({ setImage, image }: any) {
  const [currentListFile, setCurrentListFile] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ file, fileList }) => {
    const url = URL.createObjectURL(file.originFileObj)
    setImage(url)
  }
  return (
    <Space direction="vertical" className="max-w-[18rem] mb-5">
      <Typography.Text>Tải hình ảnh</Typography.Text>
      <Space direction="vertical" className="mb-5 text-xs opacity-80">
        <Typography.Text>• Chiều ngang: 1200px;</Typography.Text>
        <Typography.Text>• Chiều dọc: 100-2200px Tối đa 2.0 MB mỗi hình</Typography.Text>
        <Typography.Text>• Định dạng hình ảnh: JPG, JPEG, PNG, GIF</Typography.Text>
      </Space>
      <Space direction="vertical" className="w-full text-center">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={currentListFile}
          onChange={onChange}
        >
          {image ? (
            <Image alt="image" preview={false} src={image} />
          ) : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Space>
    </Space>
  )
}
