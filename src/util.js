export const chunk = (arr, size) =>
    Array.from({ length:Math.ceil(arr.length / size)}, (v, i)=>
        arr.slice(i * size, i * size + size)
    );

export const isEmptyObject = (obj) =>
  obj.constructor === Object && Object.keys(obj).length === 0;