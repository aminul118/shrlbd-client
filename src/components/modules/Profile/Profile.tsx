'use client';

import DateFormat from '@/components/common/date-format';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AppDataContext } from '@/context/auth-context';
import { BadgeCheck, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const Profile = () => {
  const context = useContext(AppDataContext);
  const user = context?.userData;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="mt-8 w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center">
          <img
            src={user.picture || '/profile.jpg'}
            alt={user.fullName || 'User'}
            className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Name and Verified Badge */}
          <CardTitle className="mt-4 flex items-center text-2xl font-semibold">
            {user.fullName}
            {user.isVerified ? (
              <Badge
                variant="default"
                className="ml-2 flex items-center gap-1 bg-green-700 text-white hover:bg-green-600"
              >
                <BadgeCheck className="h-4 w-4" />
                Verified
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="ml-2 flex items-center gap-1 bg-red-500 text-white hover:bg-red-600"
              >
                <XCircle className="h-4 w-4" />
                Unverified
              </Badge>
            )}
          </CardTitle>

          <CardDescription className="">
            <div className="space-y-2 text-center text-sm text-slate-400">
              <p className="font-medium">{user.email}</p>
              <p> {user.role}</p>
              <p>
                <span className="font-medium">Join Date :</span>{' '}
                <DateFormat date={user.createdAt} />
              </p>
              <p>User status : {user.isActive ? 'Active' : 'Inactive'}</p>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-4 space-y-3 text-sm text-gray-700">
          <div></div>
        </CardContent>

        <CardFooter className="flex justify-center pt-4">
          <Button variant="outline" onClick={handleBack}>
            Back to previous page
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
