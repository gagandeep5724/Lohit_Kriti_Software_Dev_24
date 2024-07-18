import axios from "axios";

const fetchProfilesBySearch = async (searchTerm) => {
    axios.defaults.headers.common[
        "authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
        console.log("fetching profiles by search");
        const response = await axios.post(
            process.env.REACT_APP_BACKEND_URL+`profile/search/`,
        {searchTerm},
        { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching profiles by search:", error);
        throw error;
    }
};

export default fetchProfilesBySearch;