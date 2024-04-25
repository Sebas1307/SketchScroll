import { DashPathEffect, Line, vec } from "@shopify/react-native-skia";

export const selection = (startPoint, endPoint) => {
  const lines = [
    { start: startPoint, end: { x: endPoint.x, y: startPoint.y } },
    {
      start: { x: endPoint.x, y: startPoint.y },
      end: { x: endPoint.x, y: endPoint.y },
    },
    { start: startPoint, end: { x: startPoint.x, y: endPoint.y } },
    {
      start: { x: startPoint.x, y: endPoint.y },
      end: { x: endPoint.x, y: endPoint.y },
    },
  ];

  return lines.map((item, index) => {
    const [x1, y1] = Object.values(item.start);
    const [x2, y2] = Object.values(item.end);
    return (
      <Line
        index={index}
        p1={vec(x1, y1)}
        p2={vec(x2, y2)}
        color="gray"
        strokeWidth={1}
      >
        <DashPathEffect intervals={[2, 2]} />
      </Line>
    );
  });
};
