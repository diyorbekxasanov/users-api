import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddModal from './AddModal/AddModal';
const inpStyle = {
  transform: "scale(1.5)"
}
function App() {
  const [data, setDataUser] = useState([])
  const [users, setUsers] = useState([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [uname, setUname] = useState('')
  const [search, setSearch] = useState('')
  const [indexInput, setIndexInput] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [active, setActive] = useState(false)


  function ToggleModal() {
    setModalVisible(prev => !prev)
  }

  function toggleOpen(index) {
    setIndexInput(index)
    setEditOpen(prev => !prev)

  }

  function onSubmit(data) {
    data.preventDefault()
    toast("Ma'lumotlar saqlandi")
    const a =
      [...users,
      {
        id: users.length,
        fname: fname,
        lname: lname,
        uname: uname,
        active: false,
        count: 0
      }
      ]
    setUsers(a)
    setDataUser(a)
    ToggleModal()
  }

  function deleteBtn(index) {
    users.splice(index, 1)
    setUsers([...users])
  }


  function countBtn(index, type) {
    if (type === "minus") {
      if (users[index].count === 0) {
        return users[index].count = 0
      } else {
        users[index].count -= 1
        setUsers([...users])
      }
    } else {
      users[index].count += 1
      setUsers([...users])
    }
  }

  function onChecked(index) {
    users[index].active = !users[index].active
    setUsers([...users])

  }

  function editSubmit(data) {
    data.preventDefault()
    toggleOpen()
    users.splice(indexInput,1,{
      id: users[indexInput].id,
      fname: fname,
      lname: lname,
      uname: uname,
      active: users[indexInput].active,
      count: users[indexInput].count
    })
    setUsers([...users])
    data.fname=''
  }



  function ActiveChange(e) {
    let check = e.target.checked
    setActive(check)
    let a = data.filter(item=>item.active===check)
    setUsers(a)
  }


  return (
    <div>
      <div className="container">
        <div className="row mt-5  justify-content-between">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control me-2" required placeholder="search..." onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="col-2">
                Active: <input type="checkbox" style={{ transform: "scale(1.5)", marginLeft: "5px" }} onChange={ActiveChange}  />
              </div>
            </div>

          </div>
          <div className="col-6 ">
            <ToastContainer />
            <AddModal setFname={setFname} setLname={setLname} setUname={setUname} isOpen={modalVisible} toggle={ToggleModal} onSubmit={onSubmit} toggleOpen={toggleOpen} editOpen={editOpen} editSubmit={editSubmit} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <table className="table table-bordered table-striped table-hover text-center">
              <thead>
                <tr>
                  <th>N</th>
                  <th>Name</th>
                  <th>LastName</th>
                  <th>username</th>
                  <th>Count</th>
                  <th>Active</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.filter(item=>{
                    if (search==='')return item
                    if (item.fname.toLowerCase().includes(search.toLowerCase()))return item
                    if (item.lname.toLowerCase().includes(search.toLowerCase()))return item
                    if (item.uname.toLowerCase().includes(search.toLowerCase()))return item
                  })
                  .map((item, index) =>
                    <tr key={index}>
                      <td>{index + 1} </td>
                      <td>{item.fname} </td>
                      <td>{item.lname} </td>
                      <td>{item.uname} </td>
                      <td><button className={"btn btn-success"} onClick={() => countBtn(index, "plus")}>+</button> {item.count} <button className={"btn btn-danger"} onClick={() => countBtn(index, "minus")}>-</button> </td>
                      <td><input type="checkbox" style={inpStyle} onClick={() => onChecked(index)} checked={item.active} /> </td>
                      <td><button className={"btn btn-dark"} onClick={()=>toggleOpen(index)}>edit</button> </td>
                      <td><button className={"btn btn-danger "} onClick={() => deleteBtn(index)}>delete</button> </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
