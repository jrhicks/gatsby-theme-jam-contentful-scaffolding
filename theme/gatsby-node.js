const settings = require('./src/settings.js');

exports.createPages = ({ actions, reporter }) => {
  const gatsby_node_path = settings.gatsby_nodes;

  reporter.warn(`gatsby_node_path ` + gatsby_node_path);

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: "Your Theme Here",
      content: `
        <p>
          Use this handy theme example as the basis for your own amazing theme!
        </p>
        <p>
          For more information, see 
          <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
        </p>
      `,
    },
  })
}
