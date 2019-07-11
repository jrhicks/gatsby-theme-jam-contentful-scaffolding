exports.createPages = ({ actions, reporter }) => {
    reporter.warn("make sure to load data from somewhere!")
  
    // TODO replace this with data from somewhere
    actions.createPage({
      path: "/",
      component: require.resolve("../templates/testimonial_page.js"),
      context: {
        heading: "CONTENT ONE",
        content: `
          <p>
            Content is here.  More Content will come.
          </p>
        `,
      },
    })
  };
