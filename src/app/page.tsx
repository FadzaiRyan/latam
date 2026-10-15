"use client";

import { StatCards } from "@/components/application/dashboard/stat-cards";
import { RevenueChartCard } from "@/components/application/dashboard/revenue-chart-card";
import { Table } from "@/components/base/table/table";
import { DataTable } from "@/components/application/data-table/data-table";

// Mock data for the POC
const mockWeatherData = {
  currentLevel: "0.95",
  peakLevel: "1.72",
  temperature: "13.9°",
  rainToday: "90%",
  accumulatedRain: "12.3 mm",
  weatherNow: {
    temperature: "13.9°",
    condition: "Cloudy",
    humidity: "98%",
    wind: "12.1 km/h (SSE)",
    rain: "0 mm",
  },
  forecast: [
    { day: "Thu, 15 Oct", temp: "19.1°", condition: "Moderate showers", rain: "90% - 12.3 mm", wind: "SSE 16.2 km/h" },
    { day: "Fri, 16 Oct", temp: "17°", condition: "Light drizzle", rain: "25% - 0.9 mm", wind: "SSE 18.5 km/h" },
    { day: "Sat, 17 Oct", temp: "15°", condition: "Cloudy", rain: "2% - 0 mm", wind: "SSE 14.2 km/h" },
    { day: "Sun, 18 Oct", temp: "15.1°", condition: "Cloudy", rain: "0% - 0 mm", wind: "SSE 10.8 km/h" },
  ],
  riverLevelData: [
    { date: "14/10, 12:00 a.m.", level: 0.6 },
    { date: "14/10, 06:00 a.m.", level: 0.8 },
    { date: "14/10, 12:00 p.m.", level: 0.9 },
    { date: "14/10, 06:00 p.m.", level: 1.0 },
    { date: "15/10, 12:00 a.m.", level: 1.2 },
    { date: "15/10, 06:00 a.m.", level: 1.4 },
    { date: "15/10, 12:00 p.m.", level: 1.6 },
    { date: "15/10, 06:00 p.m.", level: 1.5 },
    { date: "16/10, 12:00 a.m.", level: 1.4 },
    { date: "16/10, 06:00 a.m.", level: 1.3 },
  ],
  dailySummary: [
    { day: "Thu, 15 Oct - Today", min: "0.9", max: "1.33", lastValue: "1.33" },
    { day: "Fri, 16 Oct", min: "1.29", max: "1.58", lastValue: "1.44" },
    { day: "Sat, 17 Oct", min: "1.24", max: "1.72", lastValue: "1.28" },
    { day: "Sun, 18 Oct", min: "1.01", max: "1.45", lastValue: "1.01" },
  ],
  windData: [
    { day: "Thu, 15 Oct", speed: 15, direction: "SSE" },
    { day: "Fri, 16 Oct", speed: 18, direction: "SSE" },
    { day: "Sat, 17 Oct", speed: 12, direction: "SSE" },
    { day: "Sun, 18 Oct", speed: 10, direction: "SSE" },
  ],
};

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-title-2-medium">PERMAN</h1>
        <div className="flex space-x-4">
          <button className="text-text-secondary hover:text-text-primary">Refresh</button>
          <button className="bg-background-accent-default text-white px-4 py-2 rounded-md">Download PDF</button>
          <button className="bg-background-accent-default text-white px-4 py-2 rounded-md">Send by mail</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCards
          items={[{
            label: "Current Level (M)",
            value: mockWeatherData.currentLevel,
            description: "Today: min 0.9 m - Max 1.33 m",
          },
          {
            label: "Peak Next Few Days (M)",
            value: mockWeatherData.peakLevel,
            description: "Sat, Oct 17",
          },
          {
            label: "Temperature Now",
            value: mockWeatherData.temperature,
            description: mockWeatherData.weatherNow.condition,
          },
          {
            label: "Rain Today",
            value: mockWeatherData.rainToday,
            description: `Accumulated: ${mockWeatherData.accumulatedRain}`,
          }]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChartCard
            title="Water Level Forecast — Paraná de las Palmas River in Campana"
            data={mockWeatherData.riverLevelData.map((item) => ({
              date: item.date,
              revenue: item.level,
              revenuePrev: item.level - 0.2,
            }))}
          />
          <Table
            columns={["Day", "Min (M)", "Max (M)", "Last Value (M)"]}
            rows={mockWeatherData.dailySummary.map((item) => [
              item.day,
              item.min,
              item.max,
              item.lastValue,
            ])}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-title-3-medium mb-4">Weather now in Campana</h2>
            <div className="bg-surface-default p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-6xl font-bold">{mockWeatherData.weatherNow.temperature}</div>
                <div>
                  <div className="text-text-secondary">{mockWeatherData.weatherNow.condition}</div>
                  <div className="text-text-secondary">Humidity {mockWeatherData.weatherNow.humidity}</div>
                  <div className="text-text-secondary">Wind {mockWeatherData.weatherNow.wind}</div>
                  <div className="text-text-secondary">Rain {mockWeatherData.weatherNow.rain}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-title-3-medium mb-4">Weather forecast — next few days</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockWeatherData.forecast.map((item, index) => (
                <div key={index} className="bg-surface-default p-4 rounded-lg text-center">
                  <div className="text-text-secondary">{item.day}</div>
                  <div className="text-2xl font-bold">{item.temp}</div>
                  <div className="text-text-secondary">{item.condition}</div>
                  <div className="text-text-secondary">{item.rain}</div>
                  <div className="text-text-secondary">{item.wind}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-title-3-medium mb-4">Temperature and chance of rain (48 h)</h2>
          <RevenueChartCard
            title=""
            data={mockWeatherData.riverLevelData.map((item) => ({
              date: item.date,
              revenue: 15 + Math.random() * 5,
              revenuePrev: 10 + Math.random() * 5,
            }))}
          />
        </div>

        <div>
          <h2 className="text-title-3-medium mb-4">Wind — maximum speed and dominant direction, day by day</h2>
          <DataTable
            columns={["Day", "Speed (km/h)", "Direction"]}
            data={mockWeatherData.windData.map((item) => ({
              day: item.day,
              speed: item.speed,
              direction: item.direction,
            }))}
          />
        </div>
      </div>
    </div>
  );
}