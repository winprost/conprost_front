import React, { useEffect, useState } from 'react';
import bookmark from '../images/bookmark.png';
import './projectList.scss';
// import getProjectList from '../service/apiService';
import {environment} from '../environments/environments.prod'
import axios from 'axios'


const ProjectList = () => {

    const [data, setData] = useState([]);


    useEffect(()=>{
        let completed = false;
        const showProjectList = async ()=>{
            try{
                setData(null);
                const res = await axios.get(`${environment.apiUrl}/projects/projectList`);
                console.log(res.data);
                if(!completed) {
                    setData(data => res.data)
                }
                completed = true;
            }
            catch(e){
                console.log(e);
            }
        }
        
        showProjectList();
        return ()=>{
            completed = true;
        }
    },[])

    return (

<div className="projectPage">

    <div className="projectPageList">
        
        <h2 className="projectPageTitle">프로젝트</h2>

        <div className="projectPageList">
            <div className="projectPageCell">
                <div className="topProject">
                    <div className="boxTitle">프로젝트 팀원 구합니다</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="project-bottom ">
                    <div className="project-bottomRight">
                        <div className="project-item"> 승발자</div>
                        <div className="project-item"> 15시간 전</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="projectPageList">
            <div className="projectPageCell">
                <div className="topProject">
                    <div className="boxTitle">프로젝트 팀원 구합니다</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="project-bottom ">
                    <div className="project-bottomRight">
                        <div className="project-item"> 승발자</div>
                        <div className="project-item"> 15시간 전</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="projectPageList">
            <div className="projectPageCell">
                <div className="topProject">
                    <div className="boxTitle">프로젝트 팀원 구합니다</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="project-bottom ">
                    <div className="project-bottomRight">
                        <div className="project-item"> 승발자</div>
                        <div className="project-item"> 15시간 전</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}



export default ProjectList;
