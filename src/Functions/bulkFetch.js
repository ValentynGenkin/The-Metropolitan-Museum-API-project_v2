export const bulkFetch = async (IDs, setFetchedData, setBulkLoading) => {
  setBulkLoading(true);
  try {
    const promises = IDs.map(async (id) => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
      );

      return response.json();
    });

    const responseDataArray = await Promise.all(promises);

    setFetchedData(responseDataArray);
    setBulkLoading(false);
  } catch (error) {
    console.error(error);
  }
};
