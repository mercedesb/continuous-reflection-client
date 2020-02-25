export async function useErrorHandler() {
  // TODO: Gracefully handle error? or just use ErrorBoundary?
  const handler = err => {
    console.log(err)
    throw err
  }

  return handler
}
