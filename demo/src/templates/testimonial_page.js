import React from "react"

const PageTemplate = ({ pageContext }) => (
  <>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </>
)

export default PageTemplate
