import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ProfilePage() {
  const [accountSettings, setAccountSettings] = useState(true);
  return (
    <div className="w-full flex gap-6 p-6 md:p-10 items-center justify-center">
      <div className="w-1/3 flex flex-col gap-4">
        <div className="bg-muted rounded-lg overflow-hidden">
          <img
            src="src/assets/profile.jpg"
            width={100}
            height={100}
            alt="User Profile"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="justify-start gap-2 px-4 py-2 text-left 
                       disabled:bg-teal-200 disabled:text-gray-600 bg-teal-800 text-white hover:bg-teal-900 hover:text-white
                       "
            onClick={() => setAccountSettings(true)}
            disabled={accountSettings}
          >
            <UserIcon className="w-5 h-5" />
            Account
          </Button>
          <Button
            variant="outline"
            className="justify-start gap-2 px-4 py-2 text-left
                       disabled:bg-teal-200 disabled:text-gray-600 bg-teal-800 text-white hover:bg-teal-900 hover:text-white
                       "
            onClick={() => setAccountSettings(false)}
            disabled={!accountSettings}
          >
            <LockIcon className="w-5 h-5" />
            Security
          </Button>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-4">
        {accountSettings ? (
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your profile information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto text-white bg-teal-800 hover:bg-teal-900">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Update your password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder="Enter your current password"
                  className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Enter your new password"
                  className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  className="border border-teal-700 rounded-md focus-within:border-teal-800 focus-within:ring-teal-800"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto text-white bg-teal-800 hover:bg-teal-900">
                Update Password
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
