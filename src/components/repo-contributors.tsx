import { Contributor, Repo } from "@/lib/data-struct";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import useSWR from 'swr';

export function Overview({ contributors }: { contributors: Contributor[] }) {

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={contributors}>
        <XAxis
          dataKey="login"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey="contributions"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
          maxBarSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function RecentSales({ contributors }: { contributors: Contributor[] }) {
  return (
    <div className="space-y-8">
      {
        contributors.map((item) => (
          <div className="flex items-center" key={item.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={item.avatar_url} alt="Avatar" />
              <AvatarFallback>{item.login.length > 0 ? item.login[0] : ''}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.login}</p>
              <p className="text-sm text-muted-foreground">
              </p>
            </div>
            <div className="ml-auto font-medium">{item.contributions}</div>
          </div>
        ))
      }
    </div>
  );
}

type Props = {
  repo?: Repo;
  mock: string;
}

const fetcher = url => fetch(url).then(r => r.json())

export function RepoContributors(props: Props) {
  const { repo, mock } = props;
  const { data, error, isLoading } = useSWR(`/api/contributors?mock=${mock}&url=${repo?.contributors_url}`, fetcher);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  const contributors: Contributor[] = error ? [] : (data ?? []);
  const top10 = contributors.slice(0, 10);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Contributor Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview contributors={top10} />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Contributor Summary</CardTitle>
          <CardDescription>
            Top 10 Contributors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales contributors={top10} />
        </CardContent>
      </Card>
    </div>
  );
}