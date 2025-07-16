const BASE_URL=import.meta.env.VITE_REACT_APP_BASE_URL;

 export const userApi={
    getUserDetail:BASE_URL+"/getUserDetails",
    createUser:BASE_URL+"/createUser",
     claimPoints: BASE_URL + "/claim",
}


export  const historyUrl={
        //  createHistory: BASE_URL + "/createHistory",
           getAllHistory: BASE_URL + "/getAllHistory",
}