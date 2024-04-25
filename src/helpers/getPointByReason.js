const getMidpoint = (a, b, reason) => (a + b * reason) / (1 + reason);

export const getPointByReason = (point1, point2, reason) => {
  if (!reason) return { error: "Need to pass a reason" };
  if (!point1 || !point2) {
    return { error: "Must provide two points" };
  }

  return {
    x: getMidpoint(point1.x, point2.x, reason),
    y: getMidpoint(point1.y, point2.y, reason),
  };
};
