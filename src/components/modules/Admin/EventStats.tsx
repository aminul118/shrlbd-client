'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetEventStatsQuery } from '@/redux/features/stats/stats.api';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const EventStats = () => {
  const { data, isLoading, isError } = useGetEventStatsQuery(undefined);
  const stats = data?.data;
  console.log(data?.data);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !stats) return <p>Unable to load stats.</p>;

  // Bar chart: New events over time
  const newEventsData = [
    { period: 'Today', value: stats.totalNewEventToday },
    { period: 'Last 7 Days', value: stats.totalNewEvent7Days },
    { period: 'Last 30 Days', value: stats.totalNewEvent30Days },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {/* Total Events Card */}
      <Card>
        <CardHeader>
          <CardTitle>Total Events</CardTitle>
        </CardHeader>
        <CardContent className="flex h-40 flex-col">
          <p className="text-3xl font-bold">{stats.totalEvents}</p>
          <p className="mt-auto text-sm text-gray-500">
            Events with Photo: {stats.eventsWithPhotos}
          </p>
        </CardContent>
      </Card>

      {/* New Events Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>New Events</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={newEventsData}>
              <XAxis dataKey="period" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventStats;
