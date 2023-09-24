const apiRequest = async (url = "", optionsObj = "", msg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("please reload the page");
  } catch (error) {
    msg = error.message;
  } finally {
    return msg;
  }
};
export default apiRequest;
