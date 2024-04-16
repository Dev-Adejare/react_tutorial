import { createContext, useState, useEffect, Children } from "react";
import { format } from "date-fns";
import useWindowSize from "../../hooks/useWindowSize";
import useAxiosFetch from "../../hooks/useAxiosFetch";


const DataContext = createContext({})

export const DataProvider = ({children}) => {
//     const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");
//   const [editPostTitle, setEditPostTitle] = useState("");
//   const [editPostBody, setEditPostBody] = useState("");
//   const { width } = useWindowSize();
//   const { data, fetchError, isLoading } = useAxiosFetch("http://localhost::4000/posts")

  //STEP 1
  // useEffect(() => {
  //   //we are using useEffect hooks so that the function will take effect as soon as the page loads
  //   const fetchPosts = async () => {
  //     try {
  //       // const response = await axios.get("/endpoint")
  //       const response = await api.get("/posts"); //axios returns results in json format automatically, so we don't need to convert the response to json format
  //       // {response = {
  //       // data : {}
  //       // }}
  //       setPosts(response.data); //setPosts array updated
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  // }, []);
//   useEffect(() => {
//     setPosts (data);
//   }, [data])

//   useEffect(() => {
//     const filteredResults = posts.filter(
//       (post) =>
//         post.body.toLowerCase().includes(search.toLowerCase()) ||
//         post.title.toLowerCase().includes(search.toLowerCase())
//     );

//     setSearchResults(filteredResults.reverse());
//   }, [posts, search]);
    return (
        <DataContext.Provider value= {{


        }}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext
