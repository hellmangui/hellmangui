import { writeFile } from "node:fs/promises";

const user = "hellmangui";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${user}-profile`,
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) throw new Error(`${path}: ${response.status}`);
  return response.json();
}

const [account, repos, pullRequests] = await Promise.all([
  github(`/users/${user}`),
  github(`/users/${user}/repos?type=owner&per_page=100&sort=pushed`),
  github(`/search/issues?q=author%3A${user}+type%3Apr+is%3Amerged&per_page=1`),
]);

const stars = repos.reduce((total, repo) => total + repo.stargazers_count, 0);
const updated = new Intl.DateTimeFormat("en", {
  month: "short", day: "2-digit", year: "numeric", timeZone: "America/Sao_Paulo",
}).format(new Date()).toUpperCase();
const metrics = [
  ["PUBLIC REPOS", account.public_repos],
  ["MERGED PRS", pullRequests.total_count],
  ["FOLLOWERS", account.followers],
  ["STARS", stars],
];
const cards = metrics.map(([label, value], index) => {
  const x = 40 + index * 208;
  return `<g transform="translate(${x} 58)">
    <rect width="184" height="86" rx="8" fill="#161b1f" stroke="#30363d"/>
    <text x="18" y="34" class="value">${value}</text>
    <text x="18" y="62" class="label">${label}</text>
  </g>`;
}).join("\n");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="182" viewBox="0 0 900 182" role="img" aria-label="GitHub activity">
  <style>
    text { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
    .title { fill: #f0f2f4; font-size: 15px; font-weight: 700; letter-spacing: 2px; }
    .sync { fill: #768078; font-size: 10px; letter-spacing: 1px; }
    .value { fill: #ff7a32; font-size: 26px; font-weight: 700; }
    .label { fill: #80b596; font-size: 10px; letter-spacing: 1px; }
  </style>
  <rect width="900" height="182" rx="12" fill="#0d1114"/>
  <rect width="6" height="182" rx="3" fill="#8e2f2b"/>
  <text x="40" y="33" class="title">FIELD STATUS</text>
  <circle cx="728" cy="27" r="4" fill="#80b596"/>
  <text x="741" y="31" class="sync">LIVE · ${updated}</text>
  ${cards}
  <path d="M40 160H860" stroke="#252b2f"/>
  <path d="M40 160H330" stroke="#8e2f2b" stroke-width="2"/>
</svg>`;

await writeFile(new URL("../profile-status.svg", import.meta.url), svg);
console.log(`profile-status.svg updated: ${metrics.map(([key, value]) => `${key}=${value}`).join(", ")}`);
