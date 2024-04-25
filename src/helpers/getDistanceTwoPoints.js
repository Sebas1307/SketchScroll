export const getDistanceTwoPoints = (point1, point2) => {
  if (!point1 || !point2) return { error: "Must provide two points" };

  const distance = Math.sqrt(
    (point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2,
  )
    .toFixed(2)
    .toString();

  return distance;
};
