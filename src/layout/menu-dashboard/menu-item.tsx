import Link from 'next/link'
import { MenuProps } from 'antd'
import { ReactNode } from 'react'
import { FiPackage } from 'react-icons/fi'
import {
  HiOutlineHome,
  HiTag,
  HiViewGrid,
  HiOutlineClipboardCheck,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiSaveAs,
  HiRefresh,
  HiOutlineBriefcase,
  HiOutlinePresentationChartLine,
  HiOutlineChartPie,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineColorSwatch,
} from 'react-icons/hi'

export const menuPages: MenuProps['items'] = [
  {
    label: setLabel('Tổng quan', '/'),
    key: 'home',
    icon: <HiOutlineHome />,
  },
  {
    label: setLabel('Giao diện', '/portal/decoration'),
    key: 'decoration',
    icon: <HiOutlineColorSwatch />,
  },
  {
    label: 'Quản lý sản phẩm',
    key: 'item-0',
    icon: <FiPackage />,
    children: [
      {
        label: setLabel('Tất cả sản phẩm', '/portal/product/list'),
        key: 'item-0a',
        icon: <HiViewGrid />,
      },
      {
        label: 'Thiết lập giá',
        key: 'item-0b',
        icon: <HiTag />,
      },
      {
        label: 'Kiểm kho',
        key: 'item-0c',
        icon: <HiOutlineClipboardCheck />,
      },
    ],
  },
  {
    label: 'Quản lý đơn hàng',
    key: 'item-1',
    icon: <HiOutlineShoppingCart />,
    children: [
      {
        label: setLabel('Đơn bán', '/portal/sale/order'),
        key: 'item-1a',
        icon: <HiViewGrid />,
      },
      {
        label: setLabel('Đơn sàn TMĐT', '/portal/sale/ecom'),
        key: 'item-1b',
        icon: <HiOutlineCube />,
      },
      {
        label: 'Nhập hàng',
        key: 'item-1c',
        icon: <HiSaveAs />,
      },
      {
        label: 'Trả hàng nhập',
        key: 'item-1d',
        icon: <HiRefresh />,
      },
    ],
  },
  {
    label: setLabel('Đối tác', '/'),
    key: 'item-2',
    icon: <HiOutlineBriefcase />,
  },
  {
    label: setLabel('Sổ quỷ', '/'),
    key: 'item-3',
    icon: <HiOutlineChartPie />,
  },
  {
    label: setLabel('Báo cáo', '/'),
    key: 'item-4',
    icon: <HiOutlinePresentationChartLine />,
  },
]

function setLabel(label: string, url: string): ReactNode {
  return (
    <Link href={url}>
      <a>{label}</a>
    </Link>
  )
}

export const menuLanguage: MenuProps['items'] = [
  {
    label: 'Vietnam',
    key: 'vn',
    icon: <span>🇻🇳</span>,
  },
  {
    label: 'English',
    key: 'en',
    icon: <span>🇺🇸</span>,
  },
]
export const menuAccount: MenuProps['items'] = [
  {
    label: 'Thông tin',
    key: 'account-center',
    icon: <HiOutlineUser />,
  },
  {
    label: 'Cài đặt',
    key: 'account-setting',
    icon: <HiOutlineCog />,
  },
  {
    label: 'Đăng xuất',
    key: 'logout',
    icon: <HiOutlineLogout />,
  },
]
