import { type NextRequest } from 'next/server';
import { RepoLanguage } from '@/lib/mock-data';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url') ?? '';
    const mock = searchParams.get('mock') ?? '0';

    if (mock === '1') {
        return Response.json(JSON.parse(RepoLanguage));
    } else {
        const res = await fetch(url);
        const data = await res.json();
        return Response.json(data, {status: res.status, statusText: res.statusText});
    }
}
