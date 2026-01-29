const repository = {
  name: "infnet",
  owner: "mattolivr",
};

const baseUrl = {
  github: `https://github.com/${repository.owner}/${repository.name}/tree/main/`,
  codesandbox: `https://codesandbox.io/s/github/${repository.owner}/${repository.name}/tree/main/`,
  apps: "public/apps/",
};

export default function useExternal() {
  function encodeFileName(fileName: string): string {
    return fileName
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");
  }

  return {
    github: baseUrl.github,

    getGithubUrl: (fileName: string) => {
      return `${baseUrl.github}${baseUrl.apps}${encodeFileName(fileName)}`;
    },

    getCodesandboxUrl: (fileName: string) => {
      return `${baseUrl.codesandbox}${baseUrl.apps}${fileName}`;
    },
  };
}
