import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Account, Repo } from "@/lib/data-struct";
import { AccountBar } from "./account-bar";

type Props = {
  repos: Repo[];
  activeRepoId?: number;
  setActiveRepoId: (id: number) => void;
  account: Account;
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar> & Props) {
  const { repos, activeRepoId, setActiveRepoId, account, ...rest } = props;
  
  return (
    <Sidebar {...rest}>
      <SidebarHeader>
        <AccountBar account={account} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <SidebarGroup>
          <SidebarGroupLabel>Repository</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {repos.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={item.id === activeRepoId} onClick={() => setActiveRepoId(item.id)}>
                    <a href={'#'}>{item.name}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
