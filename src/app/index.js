import React from "react";
import { Canvas, Group, Line, Text, vec } from "@shopify/react-native-skia";
import { getPointByReason } from "../helpers/getPointByReason";
import { getDistanceTwoPoints } from "../helpers/getDistanceTwoPoints";
import { selection } from "../helpers/selection";

const App = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const p1 = new Point(100, 100);
  const p2 = new Point(250, 250);

  const midPoints = getPointByReason(p1, p2, 1);
  const distance = getDistanceTwoPoints(p1, p2);

  return (
    <Canvas style={{ flex: 1, backgroundColor: "#121212" }}>
      <Group>
        <Line
          p1={vec(100, 100)}
          p2={vec(250, 250)}
          color="red"
          strokeWidth={4}
        />

        {selection({ x: 100, y: 100 }, { x: 250, y: 250 })}

        <Text
          x={midPoints.x + 5}
          y={midPoints.y - 5}
          text={distance}
          color="white"
        />
      </Group>
    </Canvas>
  );
};

export default App;
