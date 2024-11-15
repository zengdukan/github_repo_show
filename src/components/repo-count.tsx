import { Repo } from "@/lib/data-struct";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, GitForkIcon, StarIcon } from 'lucide-react';
import { formatNumberWithSuffix } from "@/lib/utils";

type RepoCount = {
  title: string;
  count: number;
  icon: React.ReactNode;
}

function createRepoCount(repo: Repo) {
  const ret: RepoCount[] = [{
    title: `Watch`,
    count: repo.watchers_count,
    icon: <EyeIcon className="h-4 w-4 text-muted-foreground"/>
  }, {
    title: `Fork`,
    count: repo.forks_count,
    icon: <GitForkIcon className="h-4 w-4 text-muted-foreground"/>
  }, {
    title: 'Star',
    count: repo.stargazers_count,
    icon: <StarIcon className="h-4 w-4 text-muted-foreground"/>
  }
  ];

  return ret;
}

type Props = {
  repo?: Repo;
}

export function RepoCount(props: Props) {
  const { repo } = props;
  const repoCounts = repo == null ? [] : createRepoCount(repo);

  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {repoCounts.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{formatNumberWithSuffix(item.count)}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}