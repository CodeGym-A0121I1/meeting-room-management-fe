export enum Status {
  FIXING = "Đang sửa",
  AVAILABLE = "Sẵn sàng",
  USING = "Đang sử dụng"
}

export function getEStatusKey(label: string) {
  for (let eStatusKey in Status) {
    if (eStatusKey === label) {
      return eStatusKey;
    }
  }
  return null;
}
