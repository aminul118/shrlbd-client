'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetTeamStatsQuery } from '@/redux/features/stats/stats.api';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const TeamStats = () => {
  const { data, isLoading, isError } = useGetTeamStatsQuery(undefined);
  const stats = data?.data;

  if (isLoading) return <p>Loading...</p>;
  if (isError || !stats) return <p>Unable to load stats.</p>;

  // Bar chart data: New members over time
  const newMembersData = [
    { period: 'Today', value: stats.totalNewMembersToday },
    { period: 'Last 7 Days', value: stats.totalNewMembers7Days },
    { period: 'Last 30 Days', value: stats.totalNewMembers30Days },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {/* Total Members Card */}
      <Card>
        <CardHeader>
          <CardTitle>Total Members</CardTitle>
        </CardHeader>
        <CardContent className="flex h-40 flex-col">
          <p className="text-3xl font-bold">{stats.totalMembers}</p>
          <p className="mt-auto text-sm text-gray-500">
            Members with Photo: {stats.membersWithPhoto}
          </p>
        </CardContent>
      </Card>

      {/* New Members Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>New Members</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={newMembersData}>
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

export default TeamStats;
