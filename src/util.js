export const isEmptyObject = (obj) =>
  obj.constructor === Object && Object.keys(obj).length === 0;