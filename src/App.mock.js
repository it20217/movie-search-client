// HTTP get request
// This function is used to test components, which use async API requests 
export const TestFetch = async (path) => {
  // In case of an error, the control jumps to the catch block
  try {
    // The keyword await makes JavaScript wait until that promise settles and returns its result 
    const response = await fetch(path);
    // The ok read-only property of the Response interface contains a Boolean
    // stating whether the response was successful (status in the range 200-299) or not.
    if (response.ok) {
      // returns a promise to a component */
      return response.json();
    } else {
      // returns a promise to a component. Returns a standard message in case if there is no error object in the response.json() */
      return { error: { code: response.status, message: "This operation is currently not possible. Please try again later" }};
    }
  } catch {
    // Catches errors both in fetch and response.json */
    return { error: { code: response.status, message: "This operation is currently not possible. Please try again later" }};
  }
};