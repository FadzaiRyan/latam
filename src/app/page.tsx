"use client";

import { StatCards } from "@/components/application/dashboard/stat-cards";
import { RevenueChartCard } from "@/components/application/dashboard/revenue-chart-card";
import { Table } from "@/components/base/table/table";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Level Card */}
        <div className="bg-surface-default p-4 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow">
          <div className="text-text-secondary text-body-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
            </svg>
            Current Level (M)
          </div>
          <div className="text-title-1-bold">{mockWeatherData.currentLevel}m</div>
          <div className="text-text-secondary text-body-small">Today: min 0.9 m - Max 1.33 m</div>
        </div>

        {/* Peak Level Card */}
        <div className="bg-surface-default p-4 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow">
          <div className="text-text-secondary text-body-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
              <path d="M2 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
            </svg>
            Peak Next Few Days (M)
          </div>
          <div className="text-title-1-bold">{mockWeatherData.peakLevel}m</div>
          <div className="text-text-secondary text-body-small">Sat, Oct 17</div>
        </div>

        {/* Temperature Card */}
        <div className="bg-surface-default p-4 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow">
          <div className="text-text-secondary text-body-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
            </svg>
            Temperature Now
          </div>
          <div className="text-title-1-bold">{mockWeatherData.temperature}</div>
          <div className="text-text-secondary text-body-small">{mockWeatherData.weatherNow.condition}</div>
        </div>

        {/* Rain Card */}
        <div className="bg-surface-default p-4 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow">
          <div className="text-text-secondary text-body-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6zM5.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
            </svg>
            Rain Today
          </div>
          <div className="text-title-1-bold">{mockWeatherData.rainToday}</div>
          <div className="text-text-secondary text-body-small">Accumulated: {mockWeatherData.accumulatedRain}</div>
        </div>
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
            <div className="bg-surface-default p-6 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="text-7xl font-bold">{mockWeatherData.weatherNow.temperature}</div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                    </svg>
                    <div className="text-text-secondary">{mockWeatherData.weatherNow.condition}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a6 6 0 00-6 6c0 1.5.5 2.9 1.3 4.0-.2.2-.4.4-.6.6l-1.8 3.6c-.2.4 0 .8.4.8h14.4c.4 0 .6-.4.4-.8l-1.8-3.6c-.2-.2-.4-.4-.6-.6A5.9 5.9 0 0016 8a6 6 0 00-6-6z" />
                    </svg>
                    <div className="text-text-secondary">Humidity {mockWeatherData.weatherNow.humidity}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.3 2.2c-1.2-1.2-3.1-1.2-4.2 0l-1.8 1.8c-1.2 1.2-1.2 3.1 0 4.2l6.3 6.3c1.2 1.2 3.1 1.2 4.2 0l1.8-1.8c1.2-1.2 1.2-3.1 0-4.2l-6.3-6.3zM10 12a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                    <div className="text-text-secondary">Wind {mockWeatherData.weatherNow.wind}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6zM5.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                    </svg>
                    <div className="text-text-secondary">Rain {mockWeatherData.weatherNow.rain}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-title-3-medium mb-4">Weather forecast — next few days</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockWeatherData.forecast.map((item, index) => (
                <div key={index} className="bg-surface-default p-4 rounded-2xl shadow-sm border border-border-default hover:shadow-md transition-shadow text-center">
                  <div className="text-text-secondary text-body-small">{item.day}</div>
                  <div className="text-title-2-bold">{item.temp}</div>
                  <div className="text-text-secondary text-body-small">{item.condition}</div>
                  <div className="text-text-secondary text-body-small">{item.rain}</div>
                  <div className="text-text-secondary text-body-small">{item.wind}</div>
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
          <div className="bg-surface-default rounded-2xl shadow-sm border border-border-default p-4">
            <Table
              columns={["Day", "Speed (km/h)", "Direction"]}
              rows={mockWeatherData.windData.map((item) => [
                item.day,
                item.speed.toString(),
                item.direction,
              ])}
            />
          </div>
        </div>
      </div>
    </div>
  );
}