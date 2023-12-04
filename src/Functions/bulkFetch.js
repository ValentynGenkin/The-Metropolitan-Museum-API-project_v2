export const bulkFetch = async (IDs, setFetchedData) => {
  try {
    const promises = IDs.map(async (id) => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
      );

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      return response.json();
    });

    const responseDataArray = await Promise.all(promises);

    setFetchedData(responseDataArray);
  } catch (error) {
    console.error(error);
  }
};
