import { createContext, useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/post";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";


const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:4000/posts");

  useEffect(() => {
    setPosts (data);
  }, [data])

  

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

 
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editPostTitle,
      dateTime,
      body: editPostBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditPostTitle("");
      setEditPostBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

    return (
        <DataContext.Provider value= {{
            search, setSearch, searchResults, fetchError, isLoading,
            posts, setPosts,handleEdit,editPostBody,setEditPostBody, editPostTitle, 
            setEditPostTitle, handleDelete
            


        }}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext
