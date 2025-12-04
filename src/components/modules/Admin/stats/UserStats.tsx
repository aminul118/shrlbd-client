/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetUserStatsQuery } from '@/redux/features/stats/stats.api';
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const COLORS = ['#4f46e5', '#22c55e', '#f59e0b', '#ef4444', '#14b8a6'];

const UserStats = () => {
  const { data, isLoading } = useGetUserStatsQuery(undefined);
  const stats = data?.data;

  // Skeleton for cards and charts
  const CardSkeleton = ({ height = 52 }: { height?: number }) => (
    <Card>
      <CardHeader>
        <Skeleton className="mb-2 h-5 w-32" />
      </CardHeader>
      <CardContent className={`flex flex-col h-${height}`}>
        <Skeleton className="mb-2 h-10 w-20" />
        <Skeleton className="mt-auto h-4 w-full" />
      </CardContent>
    </Card>
  );

  // Prepare chart data if loaded
  const roleData =
    stats?.userByRole.map((role: any) => ({
      name: role._id,
      value: role.count,
    })) || [];

  const totalUsersData = stats
    ? [
        { name: 'Active', value: stats.totalActiveUsers },
        { name: 'Inactive', value: stats.totalInactiveUsers },
        { name: 'Blocked', value: stats.totalBlockedUsers },
      ]
    : [];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {/* Total Users Card */}
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
            <p>
              Today: {stats.totalNewUserToday} | Last 7 days:{' '}
              {stats.totalNewUser7Days} | Last 30 days:{' '}
              {stats.totalNewUser30Days}
            </p>
          </CardContent>
        </Card>
      )}

      {/* User Status Bar Chart */}
      {isLoading ? (
        <CardSkeleton height={64} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>User Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={totalUsersData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* User Role Pie Chart */}
      {isLoading ? (
        <CardSkeleton height={64} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>User Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={roleData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {roleData.map((entry: any, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Verified vs Unverified Pie Chart */}
      {isLoading ? (
        <CardSkeleton height={64} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Verified', value: stats.totalVerifiedUsers },
                    { name: 'Unverified', value: stats.totalUnverifiedUsers },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  <Cell fill="#22c55e" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserStats;
