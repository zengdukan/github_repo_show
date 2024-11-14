import { Repo } from "@/lib/data-struct";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLinkIcon } from 'lucide-react';

type Props = {
  repo?: Repo;
}

export function RepoInfo(props: Props) {
  const { repo } = props;

  if (repo == null) {
    return (
      <div></div>
    )
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>
            {repo.name}
            <Button asChild variant="link" className="p-1">
              <a href={repo.html_url} target="_blank">
                <ExternalLinkIcon />
              </a>
            </Button>
          </span>
          <div>
            {
              repo.topics.map((item => (
                <code className="relative rounded-full bg-sky-100 px-[0.3rem] py-[0.2rem] font-thin text-sm m-1 text-muted-foreground" style={{fontSize: 12}}>
                  {item}
                </code>
              )))
            }
          </div>
        </CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>

  );
}

