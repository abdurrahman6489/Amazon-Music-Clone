export function getFromLocalStorage(key, data) {
  if (data === Object(data)) {
    return JSON.parse(localStorage.getItem(key) || "{}");
  }

  if (data === Array.isArray(data))
    return JSON.parse(localStorage.getItem(key) || "[]");

  return JSON.parse(localStorage.getItem(key) || "");
}

export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function shareOnTwitter(title, pageUrl) {
  let twitterUrl = `https://twitter.com/intent/tweet?text=`;
  let text = `Check out the ${title}
              ${pageUrl}`;
  window.open(`${twitterUrl}${text}`, "_blank");
}

export function shareOnFacebook(title, pageUrl) {
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=`;
  let text = `Check out the ${title}
              ${pageUrl}`;
  window.open(`${facebookUrl}${text}`, "_blank");
}

export function copyToClipboard(data) {
  navigator.clipboard.writeText(data);
}
