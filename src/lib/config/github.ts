export const GITHUB_CONFIG = {
    API_BASE_URL: process.env.GITHUB_API_BASE_URL!,
    RAW_BASE_URL: process.env.GITHUB_RAW_BASE_URL!,
    TOKEN: process.env.GITHUB_TOKEN!
}

export const githubHeaders = {
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "Next-TIL-App",
    "Authorization": `token ${process.env.GITHUB_TOKEN}`
};