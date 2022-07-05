import request from "request-promise";

export const getPost = () => async (dispatch, state) => {
  try {
    console.log("call");
    const getPostData = await request.get("/posts", {
      headers: { username: sessionStorage.getItem("name") },
    });
    dispatch({ type: "postSuccess", post: getPostData.data });
    console.log("end");
    console.log(state);
  } catch (err) {}
};
export const getComment = () => async (dispatch, state) => {
  try {
    console.log("call");
    const getPostData = await request.get("/comments");
    dispatch({ type: "commentSuccess", comment: getPostData.data });
    console.log("end");
    console.log(state);
  } catch (err) {}
};
