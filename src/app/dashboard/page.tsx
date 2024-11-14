'use client';
import { AppSidebar } from "@/components/app-sidebar";
import { ProjectContributor } from "@/components/project-contributor";
import { ProjectInfo } from "@/components/project-info";
import { ProjectLanguages } from "@/components/project-languages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Account, Repo } from "@/lib/data-struct";
import { Repos, Account as MockAccount } from "@/lib/mock-data";
import { useMemo, useState } from "react";


function findRepoById(repos: Repo[], id: number | undefined) {
  return repos.find((item) => item.id === id);
}

export default function Page() {
  const repos = JSON.parse(Repos) as Repo[];
  const account = JSON.parse(MockAccount) as Account;
  const [activeRepoId, setActiveRepoId] = useState<number | undefined>(repos.length > 0 ? repos[0].id : undefined);
  const activeRepo = useMemo(() => findRepoById(repos, activeRepoId), [activeRepoId, repos]);

  return (
    <SidebarProvider>
      <AppSidebar repos={repos} activeRepoId={activeRepoId} setActiveRepoId={setActiveRepoId} account={account} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{findRepoById?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] rounded-xl bg-muted/50 md:min-h-min">
            <ProjectInfo repo={activeRepo}/>
          </div>
          <div className="min-h-[100vh] rounded-xl bg-muted/50 md:min-h-min">
            <ProjectLanguages repo={activeRepo}/>
          </div>
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div> */}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <ProjectContributor repo={activeRepo} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
