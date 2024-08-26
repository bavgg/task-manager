import { BarChart } from "@mui/x-charts";

export default function Barchart() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["High", "Medium", "Normal", "Low"],
            colorMap: {
              type: "piecewise",
              thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
              colors: ["#606C38"],
            },
          },
        ]}
        series={[{ data: [2400, 2210, 3210, 2290] }]}
        // width={500}
        height={300}
        className="w-full"
      />
    </div>
  );
}
