This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Github API

### get user/orgs profile
- name
- description
- avatar
- followers
- location
- Social accounts

user
```
req: https://api.github.com/users/zengdukan
rsp: {
    "login": "zengdukan",
    "id": 11606197,
    "node_id": "MDQ6VXNlcjExNjA2MTk3",
    "avatar_url": "https://avatars.githubusercontent.com/u/11606197?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zengdukan",
    "html_url": "https://github.com/zengdukan",
    "followers_url": "https://api.github.com/users/zengdukan/followers",
    "following_url": "https://api.github.com/users/zengdukan/following{/other_user}",
    "gists_url": "https://api.github.com/users/zengdukan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zengdukan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zengdukan/subscriptions",
    "organizations_url": "https://api.github.com/users/zengdukan/orgs",
    "repos_url": "https://api.github.com/users/zengdukan/repos",
    "events_url": "https://api.github.com/users/zengdukan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zengdukan/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 58,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2015-03-23T03:09:22Z",
    "updated_at": "2024-11-08T07:26:59Z"
}
```

organization:
```
https://api.github.com/orgs/spring-projects
{
    "login": "spring-projects",
    "id": 317776,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjMxNzc3Ng==",
    "url": "https://api.github.com/orgs/spring-projects",
    "repos_url": "https://api.github.com/orgs/spring-projects/repos",
    "events_url": "https://api.github.com/orgs/spring-projects/events",
    "hooks_url": "https://api.github.com/orgs/spring-projects/hooks",
    "issues_url": "https://api.github.com/orgs/spring-projects/issues",
    "members_url": "https://api.github.com/orgs/spring-projects/members{/member}",
    "public_members_url": "https://api.github.com/orgs/spring-projects/public_members{/member}",
    "avatar_url": "https://avatars.githubusercontent.com/u/317776?v=4",
    "description": "Spring Projects",
    "name": "Spring",
    "company": null,
    "blog": "https://spring.io/projects",
    "location": "United States of America",
    "email": null,
    "twitter_username": "springcentral",
    "is_verified": true,
    "has_organization_projects": true,
    "has_repository_projects": true,
    "public_repos": 85,
    "public_gists": 0,
    "followers": 12267,
    "following": 0,
    "html_url": "https://github.com/spring-projects",
    "created_at": "2010-06-29T18:58:02Z",
    "updated_at": "2024-08-19T21:29:44Z",
    "archived_at": null,
    "type": "Organization"
}
```

### list repos

- organization:
```
req: https://api.github.com/orgs/spring-projects/repos
[
    {
        "id": 1072614,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMDcyNjE0",
        "name": "spring-data-commons",
        "full_name": "spring-projects/spring-data-commons",
        "private": false,
        "owner": {
            "login": "spring-projects",
            "id": 317776,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjMxNzc3Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/317776?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/spring-projects",
            "html_url": "https://github.com/spring-projects",
            "followers_url": "https://api.github.com/users/spring-projects/followers",
            "following_url": "https://api.github.com/users/spring-projects/following{/other_user}",
            "gists_url": "https://api.github.com/users/spring-projects/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/spring-projects/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/spring-projects/subscriptions",
            "organizations_url": "https://api.github.com/users/spring-projects/orgs",
            "repos_url": "https://api.github.com/users/spring-projects/repos",
            "events_url": "https://api.github.com/users/spring-projects/events{/privacy}",
            "received_events_url": "https://api.github.com/users/spring-projects/received_events",
            "type": "Organization",
            "user_view_type": "public",
            "site_admin": false
        },
        "html_url": "https://github.com/spring-projects/spring-data-commons",
        "description": "Spring Data Commons. Interfaces and code shared between the various datastore specific implementations.",
        "fork": false,
        "url": "https://api.github.com/repos/spring-projects/spring-data-commons",
        "forks_url": "https://api.github.com/repos/spring-projects/spring-data-commons/forks",
        "keys_url": "https://api.github.com/repos/spring-projects/spring-data-commons/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/spring-projects/spring-data-commons/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/spring-projects/spring-data-commons/teams",
        "hooks_url": "https://api.github.com/repos/spring-projects/spring-data-commons/hooks",
        "issue_events_url": "https://api.github.com/repos/spring-projects/spring-data-commons/issues/events{/number}",
        "events_url": "https://api.github.com/repos/spring-projects/spring-data-commons/events",
        "assignees_url": "https://api.github.com/repos/spring-projects/spring-data-commons/assignees{/user}",
        "branches_url": "https://api.github.com/repos/spring-projects/spring-data-commons/branches{/branch}",
        "tags_url": "https://api.github.com/repos/spring-projects/spring-data-commons/tags",
        "blobs_url": "https://api.github.com/repos/spring-projects/spring-data-commons/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/spring-projects/spring-data-commons/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/spring-projects/spring-data-commons/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/spring-projects/spring-data-commons/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/spring-projects/spring-data-commons/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/spring-projects/spring-data-commons/languages",
        "stargazers_url": "https://api.github.com/repos/spring-projects/spring-data-commons/stargazers",
        "contributors_url": "https://api.github.com/repos/spring-projects/spring-data-commons/contributors",
        "subscribers_url": "https://api.github.com/repos/spring-projects/spring-data-commons/subscribers",
        "subscription_url": "https://api.github.com/repos/spring-projects/spring-data-commons/subscription",
        "commits_url": "https://api.github.com/repos/spring-projects/spring-data-commons/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/spring-projects/spring-data-commons/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/spring-projects/spring-data-commons/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/spring-projects/spring-data-commons/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/spring-projects/spring-data-commons/contents/{+path}",
        "compare_url": "https://api.github.com/repos/spring-projects/spring-data-commons/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/spring-projects/spring-data-commons/merges",
        "archive_url": "https://api.github.com/repos/spring-projects/spring-data-commons/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/spring-projects/spring-data-commons/downloads",
        "issues_url": "https://api.github.com/repos/spring-projects/spring-data-commons/issues{/number}",
        "pulls_url": "https://api.github.com/repos/spring-projects/spring-data-commons/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/spring-projects/spring-data-commons/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/spring-projects/spring-data-commons/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/spring-projects/spring-data-commons/labels{/name}",
        "releases_url": "https://api.github.com/repos/spring-projects/spring-data-commons/releases{/id}",
        "deployments_url": "https://api.github.com/repos/spring-projects/spring-data-commons/deployments",
        "created_at": "2010-11-11T20:19:31Z",
        "updated_at": "2024-11-07T08:57:40Z",
        "pushed_at": "2024-11-07T08:59:26Z",
        "git_url": "git://github.com/spring-projects/spring-data-commons.git",
        "ssh_url": "git@github.com:spring-projects/spring-data-commons.git",
        "clone_url": "https://github.com/spring-projects/spring-data-commons.git",
        "svn_url": "https://github.com/spring-projects/spring-data-commons",
        "homepage": "https://spring.io/projects/spring-data",
        "size": 17454,
        "stargazers_count": 778,
        "watchers_count": 778,
        "language": "Java",
        "has_issues": true,
        "has_projects": false,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 675,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 194,
        "license": {
            "key": "apache-2.0",
            "name": "Apache License 2.0",
            "spdx_id": "Apache-2.0",
            "url": "https://api.github.com/licenses/apache-2.0",
            "node_id": "MDc6TGljZW5zZTI="
        },
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
            "data-access",
            "ddd",
            "framework",
            "java",
            "spring",
            "spring-data"
        ],
        "visibility": "public",
        "forks": 675,
        "open_issues": 194,
        "watchers": 778,
        "default_branch": "main",
        "permissions": {
            "admin": false,
            "maintain": false,
            "push": false,
            "triage": false,
            "pull": true
        }
    },
]
```
- user


```
req: https://api.github.com/users/zengdukan/repos
response:
[
    {
        "id": 207284558,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMDcyODQ1NTg=",
        "name": "12306",
        "full_name": "zengdukan/12306",
        "private": false,
        "owner": {
            "login": "zengdukan",
            "id": 11606197,
            "node_id": "MDQ6VXNlcjExNjA2MTk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/11606197?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/zengdukan",
            "html_url": "https://github.com/zengdukan",
            "followers_url": "https://api.github.com/users/zengdukan/followers",
            "following_url": "https://api.github.com/users/zengdukan/following{/other_user}",
            "gists_url": "https://api.github.com/users/zengdukan/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/zengdukan/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/zengdukan/subscriptions",
            "organizations_url": "https://api.github.com/users/zengdukan/orgs",
            "repos_url": "https://api.github.com/users/zengdukan/repos",
            "events_url": "https://api.github.com/users/zengdukan/events{/privacy}",
            "received_events_url": "https://api.github.com/users/zengdukan/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
        },
        "html_url": "https://github.com/zengdukan/12306",
        "description": "12306智能刷票，订票",
        "fork": true,
        "url": "https://api.github.com/repos/zengdukan/12306",
        "forks_url": "https://api.github.com/repos/zengdukan/12306/forks",
        "keys_url": "https://api.github.com/repos/zengdukan/12306/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/zengdukan/12306/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/zengdukan/12306/teams",
        "hooks_url": "https://api.github.com/repos/zengdukan/12306/hooks",
        "issue_events_url": "https://api.github.com/repos/zengdukan/12306/issues/events{/number}",
        "events_url": "https://api.github.com/repos/zengdukan/12306/events",
        "assignees_url": "https://api.github.com/repos/zengdukan/12306/assignees{/user}",
        "branches_url": "https://api.github.com/repos/zengdukan/12306/branches{/branch}",
        "tags_url": "https://api.github.com/repos/zengdukan/12306/tags",
        "blobs_url": "https://api.github.com/repos/zengdukan/12306/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/zengdukan/12306/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/zengdukan/12306/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/zengdukan/12306/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/zengdukan/12306/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/zengdukan/12306/languages",
        "stargazers_url": "https://api.github.com/repos/zengdukan/12306/stargazers",
        "contributors_url": "https://api.github.com/repos/zengdukan/12306/contributors",
        "subscribers_url": "https://api.github.com/repos/zengdukan/12306/subscribers",
        "subscription_url": "https://api.github.com/repos/zengdukan/12306/subscription",
        "commits_url": "https://api.github.com/repos/zengdukan/12306/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/zengdukan/12306/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/zengdukan/12306/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/zengdukan/12306/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/zengdukan/12306/contents/{+path}",
        "compare_url": "https://api.github.com/repos/zengdukan/12306/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/zengdukan/12306/merges",
        "archive_url": "https://api.github.com/repos/zengdukan/12306/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/zengdukan/12306/downloads",
        "issues_url": "https://api.github.com/repos/zengdukan/12306/issues{/number}",
        "pulls_url": "https://api.github.com/repos/zengdukan/12306/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/zengdukan/12306/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/zengdukan/12306/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/zengdukan/12306/labels{/name}",
        "releases_url": "https://api.github.com/repos/zengdukan/12306/releases{/id}",
        "deployments_url": "https://api.github.com/repos/zengdukan/12306/deployments",
        "created_at": "2019-09-09T10:33:11Z",
        "updated_at": "2019-09-09T10:33:12Z",
        "pushed_at": "2019-09-09T08:23:30Z",
        "git_url": "git://github.com/zengdukan/12306.git",
        "ssh_url": "git@github.com:zengdukan/12306.git",
        "clone_url": "https://github.com/zengdukan/12306.git",
        "svn_url": "https://github.com/zengdukan/12306",
        "homepage": "",
        "size": 3230,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
]

```

### get repo profile
- name + link
- watch, fork, star count (chart)
- About, tag, license
- Languages (chart)
- Contributors and commit (chart + list)
- issues totol/open