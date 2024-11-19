import { Repo } from "@/lib/data-struct";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, LabelList, Pie, PieChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton"
import useSWR from 'swr';

type Props = {
  repo?: Repo;
  mock: string;
}

type RepoLanguageObj = {
  language: string;
  size: number;
  fill: string;
}

const fetcher = url => fetch(url).then(r => r.json())

export function RepoLanguages(props: Props) {
  const { repo, mock } = props;
  const { data, error, isLoading } = useSWR(`/api/languages?mock=${mock}&url=${repo?.languages_url}`, fetcher);

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3 items-center">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const RepoLanguages = error ? {} : (data ?? {}) as { [key:string]: number};
  const langObjArray: RepoLanguageObj[] = [];
  Object.keys(RepoLanguages).forEach(key => {
    langObjArray.push({language: key.toLowerCase(), size: RepoLanguages[key], fill: ''});
  });
  langObjArray.sort((a, b) => b.size - a.size);
  const firstFive = langObjArray.slice(0, 5);

  const chartConfig = {

  } as ChartConfig;

  firstFive.map((item, index) => {
    chartConfig[item.language.toLowerCase()] = {
      label: item.language,
      color: `hsl(var(--chart-${index + 1}))`
    };
    item.fill = `var(--color-${item.language.toLowerCase()})`;
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground">
          <BarChart
            accessibilityLayer
            data={firstFive}
            maxBarSize={50}
          >
            <XAxis
              dataKey="language"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis dataKey="size" type="number" tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
            />
            <Bar dataKey="size" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}