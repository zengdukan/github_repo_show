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
import { Building2Icon, UserIcon, Loader2Icon } from 'lucide-react';
import { Account, AccountType, Repo } from "@/lib/data-struct"
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { GitContext } from "@/lib/context"

export default function Home() {
  const [ownerType, setOwnerType] = React.useState(AccountType.ORGS);
  const [accountName, setAccountName] = React.useState('');
  const [mock, setMock] = React.useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = React.useState(false);
  const {setAccount, setRepos} = React.useContext(GitContext);

  const handleGoClick = async () => {
    if (accountName.trim().length === 0) {
      console.log('empty');
      toast({
        variant: "destructive",
        title: "Error",
        description: 'Github owner name is required!',
      })
      return;
    }

    setLoading(true);

    try {
      const params = {
        account_type: ownerType,
        account: accountName,
        mock: mock ? '1' : '0',
      };
      const param = new URLSearchParams(params).toString();
      const [accountRsp, reposRsp] = await Promise.all([
        fetch(`/api/account?${param}`),
        fetch(`/api/repos?${param}`)
      ]);

      if (!accountRsp.ok || !reposRsp.ok) {
        throw new Error('One or both network responses were not ok');
      }

      const accountJson = await accountRsp.json();
      const reposJson = await reposRsp.json();

      setAccount(accountJson);
      setRepos(reposJson);
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || 'There was a problem with one or both fetch operations.',
      })
    } finally {
      setLoading(false);
    }
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
                <RadioGroup defaultValue={AccountType.ORGS} className="grid grid-cols-2 gap-4" value={ownerType} onValueChange={(value) => { console.log(value); setOwnerType(value as AccountType); }}>
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
                <Input id="account" placeholder="Name of owner" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
              </div>
              <div className="flex items-center space-y-1.5">
                <Label htmlFor="mock" className="mr-1.5">Mock:</Label>
                <Checkbox id="mock" className="mr-1.5" defaultChecked checked={mock} onCheckedChange={(value) => setMock(value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          {loading ? 
            (<Button disabled>
              <Loader2Icon className="animate-spin" />
              Please wait
             </Button>) : (<Button className="w-full" onClick={() => handleGoClick() }>Go</Button>)}
        </CardFooter>
      </Card>
    </div>
  );
}
