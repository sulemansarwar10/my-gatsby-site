
  
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