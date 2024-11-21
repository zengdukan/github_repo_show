import { Account } from '@/lib/data-struct';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPinIcon, UsersRoundIcon, LinkIcon, HouseIcon, ChevronsUpDown } from 'lucide-react';
import { formatNumberWithSuffix } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  account?: Account;
}

export function AccountBar(props: Props) {
  const { account } = props;

  if (account == null) {
    return (<div></div>);
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <Avatar >
                  <AvatarImage src={account.avatar_url} />
                  <AvatarFallback>{account.login}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">{account.login}</span>             
                <span className=""></span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            <div className="flex items-center pt-2">
              <MapPinIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {account.location}
              </span>
            </div>
            <div className="flex items-center pt-2">
              <UsersRoundIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {formatNumberWithSuffix(account.followers)} followers
              </span>
            </div>
            <div className="flex items-center pt-2">
              <LinkIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <a className="text-xs text-muted-foreground" href={account.blog} target="_blank" >
                {account.blog}
              </a>
            </div>
            <div className="flex items-center pt-2">
              <HouseIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <a className="text-xs text-muted-foreground" href={account.html_url} target="_blank" >
                {account.html_url}
              </a>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}