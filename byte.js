
/**
 * Byte utility for data processing
 */
export const encodeBytes = (data) => {
  return btoa(unescape(encodeURIComponent(data)));
};

export const decodeBytes = (data) => {
  try {
    return decodeURIComponent(escape(atob(data)));
  } catch (e) {
    return null;
  }
};
