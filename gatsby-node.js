
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/product/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/product/*"
  
      // Update the page.
      createPage(page)
    }
  }










/*

  
exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "mypage",
        component: require.resolve(`./src/templates/mypage.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "suleman",
            desc:"this is bootcapm 2020",
         },
    });
    console.log("End of Gatsby Node File");
}
*/