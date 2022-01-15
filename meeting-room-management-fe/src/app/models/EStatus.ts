export enum EStatus{
  FIXING = 'Đang sửa',
  AVAILABLE = 'Sẵn sàng',
  USING = 'Đang sử dụng'
}

export function getEStatusKey(label: string) {
  for (let eStatusKey in EStatus) {
    if (eStatusKey === label) {
      return eStatusKey;
    }
  }
  return null;
}
