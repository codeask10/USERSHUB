import React, { useState, useEffect, useContext ,useRef} from 'react'
import UserItem from './UserItem'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import UserState from '../Context/Users/UserContext';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Filter from './Filter';
import Typography from '@mui/material/Typography';



const User = () => {
  const [newUser, setNewUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    domain: "",
    available: ""
  });
  const [editUser, setEditUser] = useState({
    _id: "",
    eid: "",
    efirst_name: "",
    elast_name: "",
    eemail: "",
    egender: "",
    eavatar: "",
    edomain: "",
    eavailable: ""
});
  const ref = useRef('')

  const context = useContext(UserState);
  const { user, addUser, getUser, filterData, userUpdate } = context;
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser.available = String(true) === newUser.available
    addUser(newUser);
  };

  const handleClick = () => {
    window.location.reload();
  }
  const updateUser = (user) => {
    ref.current.click();
    console.log(user)
    setEditUser({_id: user._id,
    eid: user.id,
    efirst_name: user.first_name,
    elast_name: user.last_name,
    eemail: user.email,
    egender: user.gender,
    eavatar: user.avatar,
    edomain: user.domain,
    eavailable: user.available
  })
  }

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    updateUser.eavailable = String(true) === updateUser.eavailable
    userUpdate(editUser);
    window.location.reload();
  };

  const handleUpdateChange = (e) => {
      setEditUser({ ...editUser, [e.target.name]: e.target.value });
  }
  const usersPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = user.slice(startIndex, endIndex);
  const filterUsers = filterData.slice(startIndex, endIndex);
  return (
    <>
      <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addUserModalLabel">Add New User</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Box onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="first_name"
                      type='text'
                      onChange={handleChange}
                      required
                      fullWidth
                      id="first_name"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type='text'
                      onChange={handleChange}
                      id="last_name"
                      label="Last Name"
                      name="last_name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      type='email'
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      type='number'
                      id="id"
                      label="ID"
                      name="id"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="gender"
                      type='text'
                      required
                      fullWidth
                      onChange={handleChange}
                      id="gender"
                      label="Gender"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      type='text'
                      id="domain"
                      label="Domain"
                      name="domain"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="avail"
                      type="text"
                      required
                      fullWidth
                      id="avail"
                      onChange={handleChange}
                      label="Available"
                      title='true | false'
                      placeholder='true | false'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      name="url"
                      label="profile url"
                      type="text"
                      id="url"
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary " onClick={handleSubmit} data-bs-dismiss="modal">Add User </button>
            </div>
          </div>
        </div>
      </div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">User Update</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Box Validate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="efirst_name"
                      type='text'
                      onChange={handleUpdateChange}
                      value={editUser.efirst_name}
                      required
                      fullWidth
                      id="efirst_name"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={editUser.elast_name}
                      type='text'
                      onChange={handleUpdateChange}
                      id="elast_name"
                      label="Last Name"
                      name="elast_name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="egender"
                      type='text'
                      required
                      fullWidth
                      value={editUser.egender}
                      onChange={handleUpdateChange}
                      id="egender"
                      label="Gender"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleUpdateChange}
                      value={editUser.edomain}
                      type='text'
                      id="edomain"
                      label="Domain"
                      name="edomain"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      name="eavailable"
                      type="text"
                      required
                      fullWidth
                      value={editUser.eavailable}
                      id="eavailable"
                      onChange={handleUpdateChange}
                      label="Available"
                      title='true | false'
                      placeholder='true | false'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleUpdateChange}
                      value={editUser.eavatar}
                      name="eavatar"
                      label="profile url"
                      type="text"
                      id="eavatar"
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary " onClick={handleUpdateSubmit} data-bs-dismiss="modal"> save changes </button>
            </div>
          </div>
        </div>
      </div>
      <div className='d-md-none my-5 text-center'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filterModal">
          <Typography component="h1" variant="h5">
            <i className="filter icon"></i> Filter
          </Typography>
        </button>
        <Filter isModal={true} />
      </div>
      <div className="ui grid ">
        <div className="col-lg-4 col-md-4  d-sm-none d-md-block d-none d-sm-block my-5">
          <Filter isModal={false} />
        </div>
        {filterData.length > 0 ? (
          <div className='col-lg-8 col-md-8'>
            <div className="my-5 " >
              <div className="container">
                <div className="d-flex ">
                  <button className="mini ui button" onClick={handleClick}>
                    <i className="arrow left icon"></i>
                  </button><h1>Filter Information</h1>
                </div>
              </div>
              <div className="row">
                {filterUsers.map((user) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6" key={user._id}>
                      <UserItem user={user} updateUser={updateUser} />
                    </div>
                  )
                })}
              </div>

              <Stack spacing={3} direction="row" justifyContent="center" sx={{ marginTop: '20px' }}>
                <Pagination count={Math.ceil(filterData.length / usersPerPage)} size="large" page={currentPage} onChange={(_, value) => setCurrentPage(value)} />
              </Stack>
            </div>
          </div>
        ) : null}

        {/* Render the user section only if filterData is empty */}
        {filterData.length === 0 && (
          <div className='col-lg-8 col-md-8 '>
            <div className="my-5 " >
              <div className="container">
                <div className="d-flex justify-content-between ">
                  <h1>User Information</h1>
                  <button className="ui active button col-sm-2" data-bs-toggle="modal" data-bs-target="#addUserModal">
                    <i className="plus icon"></i>
                    new user
                  </button>
                </div>
              </div>
              <div className="row">
                {currentUsers.map((user) => (
                  <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6" key={user.id}>
                    <UserItem user={user} updateUser={updateUser} />
                  </div>
                ))}
              </div>
              <Stack spacing={3} direction="row" justifyContent="center" sx={{ marginTop: '20px' }}>
                <Pagination count={51} size="large" page={currentPage} onChange={(_, value) => setCurrentPage(value)} />
              </Stack>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default User