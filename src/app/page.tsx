"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Building2Icon, UserIcon } from 'lucide-react';
import { AccountType } from "@/lib/data-struct"
import { useRouter } from 'next/navigation';

export default function Home() {
  const [ownerType, setOwnerType] = React.useState(AccountType.ORGS);
  const [account, setAccount] = React.useState('');
  const [mock, setMock] = React.useState(true);
  const router = useRouter();

  const handleGoClick = () => {
    router.push('/dashboard'); // 跳转到 /about 页面
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Github repositories showcase</CardTitle>
          <CardDescription>Repositories infomation fetch by Github Rest API. Because <a href="https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api" target="_blank" className="underline">Github Rest API rate limit</a>, can select 'Mock' to see mock repositories</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="type">Github owner type</Label>
                <RadioGroup defaultValue={AccountType.ORGS} className="grid grid-cols-2 gap-4" value={ownerType} onValueChange={(value) => {console.log(value); setOwnerType(value as AccountType);}}>
                  <div>
                    <RadioGroupItem
                      value={AccountType.ORGS}
                      id="orgs"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="orgs"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Building2Icon className="mb-3 h-6 w-6" />
                      Organization
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value={AccountType.USERS} id="users" className="peer sr-only" />
                    <Label
                      htmlFor="users"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <UserIcon className="mb-3 h-6 w-6" />
                      Personal user
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="account">Github owner (like: spring-projects, shadcn-ui)</Label>
                <Input id="account" placeholder="Name of owner" value={account} onChange={(e) => setAccount(e.target.value)}/>
              </div>
              <div className="flex items-center space-y-1.5">
                <Label htmlFor="mock" className="mr-1.5">Mock:</Label>
                <Checkbox id="mock" className="mr-1.5" defaultChecked checked={mock} onCheckedChange={(value) => setMock(value)}/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full" onClick={() => handleGoClick()}>Go</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
