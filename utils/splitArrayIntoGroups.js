export default function createGroups(arr, numGroups) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(perGroup)
    .fill("")
    .map((_, i) => arr.slice(i * numGroups, (i + 1) * numGroups));
}
