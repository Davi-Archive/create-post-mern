import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = () => async (dispatch) => {
  try {
    const { data } = await api.createPost();
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const updatedPost = (id, post) => async (dispatch)=>{
  try {
    const {data} = await api.updatePost(id,post);
    dispatch({type: 'UPDATE', payload: data})
  } catch (error) {
    console.log(error.message)
  }
}