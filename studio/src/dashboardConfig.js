export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a210e083ec5a69e20386f9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9baf3rym",
                  apiId: "10dbda92-c833-4aed-b636-f01bb64368c9",
                },
                {
                  buildHookId: "60a210e0255276596b52ccaf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qs1zngpy",
                  apiId: "0f5d9b57-867d-47fa-9af3-f184afbdcb3f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/froesecom/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qs1zngpy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
