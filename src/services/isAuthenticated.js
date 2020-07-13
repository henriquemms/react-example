
export function isAuthenticated(props){
    

    var token = localStorage.getItem("token");  

    return !!token;
}