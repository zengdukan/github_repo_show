import { AccountType } from "@/lib/data-struct";
import { Account } from "@/lib/mock-data";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const account_type = searchParams.get('account_type') ?? AccountType.USERS;
    const account = searchParams.get('account') ?? '';
    const mock = searchParams.get('mock') ?? '0';

    if (mock == '1') {
        return Response.json(JSON.parse(Account));
    } else {
        const url = `https://api.github.com/${account_type}/${account}`;
        const res = await fetch(url);
        return res;
    }
}