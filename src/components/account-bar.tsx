import { Account } from '@/lib/data-struct';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPinIcon, UsersRoundIcon, LinkIcon } from 'lucide-react';
import { Separator } from '@/components//ui/separator';

type Props = {
  account: Account;
}

export function AccountBar(props: Props) {
  const { account } = props;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col justify-center space-x-4">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={account.avatar_url} />
              <AvatarFallback>{account.login}</AvatarFallback>
            </Avatar>
            <div><h4 className="text-sm font-semibold">{account.login}</h4></div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center pt-2">
              <MapPinIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {account.location}
              </span>
            </div>
            <div className="flex items-center pt-2">
              <UsersRoundIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {account.followers}
              </span>
            </div>
            <div className="flex items-center pt-2">
              <LinkIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <a className="text-xs text-muted-foreground" href={account.blog} target="_blank" >
                {account.blog}
              </a>
            </div>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}