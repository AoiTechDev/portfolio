"use server";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export const getStats = async () => {
  try {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/stats/commit_activity",
      {
        owner: "AoiTechDev",
        repo: "mealfulness",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );


    // console.log(res)
  } catch (e) {
    console.error(e);
  }
};
