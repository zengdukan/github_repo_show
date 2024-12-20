'use client';
import { AppSidebar } from "@/components/app-sidebar";
import { RepoContributors } from "@/components/repo-contributors";
import { RepoCount } from "@/components/repo-count";
import { RepoInfo } from "@/components/repo-info";
import { RepoLanguages } from "@/components/repo-languages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Account, Repo } from "@/lib/data-struct";
import { Repos, Account as MockAccount } from "@/lib/mock-data";
import React, { useContext, useMemo, useState } from "react";
import Link from 'next/link';
import { Ghost, LogOutIcon } from 'lucide-react';
import { GitContext } from "@/lib/context";

function findRepoById(repos: Repo[], id: number | undefined) {
  return repos.find((item) => item.id === id);
}

export default function Page() {
  const {account, repos, mock} = useContext(GitContext);// as {account: Account; repos: Repo[], mock: boolean} ;
  const [activeRepoId, setActiveRepoId] = useState<number | undefined>(repos!.length > 0 ? repos![0].id : undefined);
  const activeRepo = useMemo(() => findRepoById(repos!, activeRepoId), [activeRepoId, repos]);

  return (
    <SidebarProvider>
      <AppSidebar repos={repos!} activeRepoId={activeRepoId} setActiveRepoId={setActiveRepoId} account={account} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{activeRepo?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto px-3">
            <Button asChild variant="ghost" size="icon">
              <Link href="/"><LogOutIcon /></Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <RepoInfo repo={activeRepo} />
          <RepoCount repo={activeRepo} />
          <RepoLanguages repo={activeRepo} mock={mock ? '1' : '0'} />
          <RepoContributors repo={activeRepo}  mock={mock ? '1' : '0'} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
