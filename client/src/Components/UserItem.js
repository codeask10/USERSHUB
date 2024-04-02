import React, { useContext} from 'react'
import WorkIcon from '@mui/icons-material/Work';
import UserState from '../Context/Users/UserContext';

const Useritem = (props) => {
    
    const {user, updateUser}=props;
    const {first_name,last_name,email,available,avatar,domain,gender,_id}=user;
    const context = useContext(UserState);
    const { deleteUser } = context;
    return (
        <>
            <div className="my-3">
                <div className="ui cards">
                    <div className="green card">
                        <div className="content">
                            <img className="right floated mini ui image" src={avatar} alt="profileImage" />
                            <div className="header mt-2">
                                {first_name} {last_name}
                            </div>
                            <div className="description" style={{ marginTop: '20px', fontSize: "16px" }}>
                                <p><i className="envelope icon"></i> {email} </p>
                                <p><i className={`${(gender === "Male" ? "male" : "female")} icon`}></i> {gender} </p>
                                <p><WorkIcon /> {domain}</p>
                                <p><i className="circle icon" style={(available === true) ? { color: "green" } : { color: "red" }}></i>{(available === true) ? "Available" : "Not Available"} </p>
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button" onClick={()=>{updateUser(user)}}> <i className="edit icon"></i>Edit</div>
                                <div className="ui basic red button" onClick={() => { deleteUser(_id) }}> <i className="trash icon"></i>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Useritem