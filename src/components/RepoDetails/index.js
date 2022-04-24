import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getRepoInfo } from '../../services/user.service';

const  RepoDetails = ()=>{
    const {userName,repoName} = useParams();
    const [repo,setRepo] = useState();

    useEffect(()=>{
        getRepoInfo(userName,repoName).then(res=>{
            console.log(res);
            setRepo(res);
        })
    },[])
    return (<div>{
        repo && <div>{repo.name} + {repo.language}</div>
        }</div>)
}

export default RepoDetails;