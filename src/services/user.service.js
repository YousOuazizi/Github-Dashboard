
const urlApi = 'https://api.github.com/';


export  const getUserByName = (username)=>{
    return fetch(urlApi+'users/'+username).then(res=>{
        return res.json();
    });
}
export const getReposByUserName  = (username)=>{
    return fetch(urlApi+'users/'+username+'/repos').then(res=>{
        return res.json();
    })
}

export const getRepoInfo = (userName,repoName)=>{
    return fetch(urlApi+'repos/'+userName+'/'+repoName).then(res=>{
        return res.json();
    })
}

