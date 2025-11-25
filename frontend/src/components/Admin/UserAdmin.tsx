import { useState } from 'react'
import { ADMIN_USERS } from '../../contants/data'
import { toast } from 'sonner'

const UserAdmin = () => {
  const [role,setRole] = useState('customer')
  const [selectedUserId,setSelectedUserId] = useState<number | null>(null)
  const [userInfo,setUserInfo] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    role: 'customer'
  })

  const handleSelectedUser = (userId:number)=>{
    setSelectedUserId(userId)
    const user = ADMIN_USERS.find(user => user.id === userId)
    if(user){
      setUserInfo({
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role
      })
      setRole(user.role)
    }
  }

  const handleDeleteUser = (userId:number)=>{
    toast("Delete User " + userId +" Success")
  }

  const handleSubmit = ()=>{
    if(userInfo.id){
      toast("Update User " + userInfo.id + " Success")
      setUserInfo({
        id: '',
        name: '',
        email: '',
        password: '',
        role: 'customer'
      })
    } else{
      toast("Add User " + userInfo.name + " Success")
    }
  }

  return (
    <div className='w-full h-screen flex flex-col gap-4'>
      <h2 className='font-bold text-2xl'>User Management</h2>

      <div className='flex flex-col gap-4 p-6 pt-6'>
        <h3 className='font-bold text-xl'>Add New User</h3>

        <div className='flex flex-col w-full'>
          <label htmlFor="name" className='text-gray-700'>Name</label>
          <input type="text" name='name' value={userInfo?.name || ''} onChange={(e)=>setUserInfo({...userInfo,[e.target.name] : e.target.value})} className='border border-gray-400 p-2 w-full outline-none rounded-lg' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='text-gray-700'>Email</label>
          <input type="text" name='email' value={userInfo?.email || ''} onChange={(e)=>setUserInfo({...userInfo,[e.target.name] : e.target.value})} className='border border-gray-400 p-2 w-full outline-none rounded-lg' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="password" className='text-gray-700'>Password</label>
          <input type="password" name='password' value={userInfo?.password || ''} onChange={(e)=>setUserInfo({...userInfo,[e.target.name] : e.target.value})} className='border border-gray-400 p-2 w-full outline-none rounded-lg' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="role" className='text-gray-700'>Role</label>
          <select name="role" id="role" value={role} onChange={(e)=>setRole(e.target.value)} className='p-2 outline-none cursor-pointer border border-gray-400 rounded-lg'>
            <option value="customer">{role === 'customer' ? "✔" : ""} Customer</option>
            <option value="admin">{role === 'admin' ? "✔" : ""} Admin</option>
          </select>
        </div>

        <button onClick={handleSubmit} className='w-1/8 py-2 outline-none bg-green-400 text-white rounded-md hover:bg-green-600 transition duration-300 cursor-pointer'>{userInfo.id ? "Update User" : "Add User"}</button>
      </div>

      <div className='flex flex-col '>
        <div className='flex items-start justify-center p-4 bg-gray-300 font-bold' >
            <div className='flex-2'>NAME</div>             
            <div className='flex-4'>EMAIL</div>             
            <div className='flex-2'>ROLE</div>             
            <div className='flex-2'>ACTIONS</div>             
        </div>
            <div className='flex flex-col '>
              {
                ADMIN_USERS.map((item,index)=>(
                  <div key={index} className='flex items-center py-4 justify-center border-b border-gray-400  '>
                    <div className='flex-2'>{item.name}</div>             
                    <div className='flex-4 text-gray-700'>{item.email}</div>             
                    <div className='flex-2 text-gray-700'>{item.role}</div>             
                    <div className='flex-2 text-gray-700 flex gap-2'>
                        <button onClick={() => handleSelectedUser(item.id)} className='min-w-16 p-2 bg-green-500 outline-none rounded-md cursor-pointer hover:bg-green-400 transition duration-300 text-white'>Edit</button>
                        <button onClick={() => handleDeleteUser(item.id)} className='p-2 bg-red-500 outline-none rounded-md cursor-pointer hover:bg-red-400 transition duration-300 text-white'>Delete</button>
                    </div>             
                  </div>
                      ))
                  }
        </div>
      
      </div>

    </div>
  )
}

export default UserAdmin
