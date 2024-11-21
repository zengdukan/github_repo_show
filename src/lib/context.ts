import React from "react";
import { Account, Repo } from "./data-struct";

type Props = {
  account?: Account;
  setAccount?: (account: Account | undefined) => void;
  repos?: Repo[];
  setRepos?: (repos: Repo[]) => void;
  mock?: boolean;
  setMock?: (value: boolean) => void;
}

export const GitContext = React.createContext<Props>({});