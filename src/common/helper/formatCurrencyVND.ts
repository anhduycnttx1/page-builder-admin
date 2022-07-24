export function formatCurrentVND(text: string | number) {
  const num = Number(text)
  return num.toLocaleString('vi', { style: 'currency', currency: 'VND' })
}
