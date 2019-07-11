gatsby-theme-contentful
=======================

What
----

Scaffold page-creators to index and show many different types of content.

* Scaffold CLI - Scaffold front-end index.js and show.js components and back-end page-creators.

* Node Conventions - Page Creators scaffolded into the correct folder `src/page-creators` get auto-magicly wired into build.

* Component Conventions - Layouts, Show, and Indexes are reminiscent of Ruby-On-Rails view conventions.

* Dependencies - The theme manages all gatsby-plugins necessary for working with Contentful and image best practices.


How
---

**Gatsby Themes**

Gatsby's release of gatsby-themes makes it easy to package up multiple plugins into a cohisive shippable unit allowing for 1 stop shop of all necessary plugins to successfully work with contentful

**Gatsby Theme Shadowing**

By convention the theme creates pages for each export in `/src/page-creators`.  Thanks to shadowing feture of gatsby-themes the theme uses `/src/gatsby-theme-contentful/settings.js` instead of the actual settings.js within the module.  Since this local settings.js's path is fixed relative to the page-creators folder,it can easily furnish the page-creators path.  This allows the theme to correctly locate the page-creators folder regardless of where the themes source code actually resides (node_modules, yarn workspace, or other),

**Contentful API**

Contentful is cool and lets us introspect types.

**Sails.js Generators**

No need to write a generator froms scratch.  Let's use Sails.js

