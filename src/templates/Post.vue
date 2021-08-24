<template></template>

<page-query>
query Post ($id: ID!) {
  tag (id: $id) {
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            content
          }
        }
      }
    }
  }
}
</page-query>