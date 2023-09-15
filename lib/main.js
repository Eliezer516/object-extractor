/**
 * Extracts specific properties from an object.
 * @param {Object} params - The parameters for extraction.
 * @param {Array} params.extract - An array specifying the properties to extract.
 * @param {Object} params.ob - The object from which the properties are to be extracted.
 * @returns {Object|string} - The extracted properties as an object, or an error message.
 */
const extract = (params) => {
  if (!params.extract) {
    return 'Adds an array with the properties to extract';
  }

  if (!params.ob) {
    return 'Add a valid object';
  }

  if (Array.isArray(params.ob) || typeof params.ob !== "object") {
    return 'Add a valid object';
  }

  const flattenedResult = flattenObject(params.ob);
  const filteredResult = filterObject(flattenedResult);
  return filteredResult;

  /**
   * Flattens an object by recursively flattening nested objects.
   * @param {Object} obj - The object to flatten.
   * @returns {Object} - The flattened object.
   */
  function flattenObject(obj) {
    const result = {};

    for (const property in obj) {
      if (typeof obj[property] === 'object') {
        const nestedObject = flattenObject(obj[property]);
        for (const nestedProperty in nestedObject) {
          if (result[nestedProperty]) {
            result[property + '.' + nestedProperty] = nestedObject[nestedProperty];
          } else {
            result[nestedProperty] = nestedObject[nestedProperty];
          }
        }
      } else {
        result[property] = obj[property];
      }
    }

    return result;
  }

  /**
   * Filters an object by including only the specified properties.
   * @param {Object} obj - The object to filter.
   * @returns {Object} - The filtered object.
   */
  function filterObject(obj) {
    return Object.keys(obj)
      .filter(property => params.extract.includes(property))
      .reduce((object, property) => {
        object[property] = obj[property];
        return object;
      }, {});
  }
}

export default extract;
