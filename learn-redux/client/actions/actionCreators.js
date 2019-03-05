export function increment(index) {
  return {
    type: 'INCREDMENT_LIKES', index
  }
}

export function addComment(PostId, author, comment) {
  return {
    type: 'ADD_COMMENT', PostId, author, comment
  }
}

export function removeComment(postId, i) {
  return {
    type: 'REMOVE COMMENT', postId, i
  }
}