export default async function(args) {
  return Promise.all(Array.from(args))
}
