function rentContainers(neededContainer, listings) {
  if (
    neededContainer <= 0 ||
    !Array.isArray(listings) ||
    listings.length === 0
  ) {
    return "Invalid input";
  }

  listings.sort(
    (a, b) => a.totalCost / a.container - b.totalCost / b.container
  );

  let totalCost = 0;
  const contracts = [];
  let containersRented = 0;

  for (const listing of listings) {
    if (containersRented >= neededContainer) break;
    const containersToRent = Math.min(
      listing.container,
      neededContainer - containersRented
    );
    if (containersToRent > 0) {
      const costPerContainer = listing.totalCost / listing.container;
      const actualCost = parseFloat(
        (containersToRent * costPerContainer).toFixed(2)
      );
      contracts.push(
        `[Contract with] ${listing.name} ${containersToRent} container, price: ${actualCost}`
      );
      totalCost += actualCost;
      containersRented += containersToRent;
    }
  }
  if (containersRented < neededContainer) {
    contracts.push("Not enough containers");
  }
  if (!Number.isInteger(totalCost)) {
    totalCost = parseFloat(totalCost.toFixed(2));
  }
  contracts.push(`[Summary] total cost ${totalCost}`);
  return contracts.join("\n");
}
module.exports = rentContainers;
