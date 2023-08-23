export function getFromLocalStorage(key, data) {
  if (data === Object(data))
    return JSON.parse(localStorage.getItem(key) || "{}");

  if (data === Array.isArray(data))
    return JSON.parse(localStorage.getItem(key) || "[]");

  return JSON.parse(localStorage.getItem(key) || "");
}

export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
