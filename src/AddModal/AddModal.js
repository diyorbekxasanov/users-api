import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddModal({ isOpen, toggle, onSubmit, toggleOpen, editOpen, editSubmit, setUname, setFname, setLname }) {
    const {register, handleSubmit } = useForm()
    return (
        <div>
            <button className="btn btn-dark float-end" onClick={toggle}>Add</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    Add Users
                </ModalHeader>
                <ModalBody>

                    <form onSubmit={onSubmit} id={'form'}>
                        <label htmlFor="fname">FirstName</label>
                        <input type="text" className='form-control mb-2'  placeholder="FirstName" onChange={(e)=>setFname(e.target.value)}/>
                        <label htmlFor="lname">LastName</label>
                        <input type="text" className='form-control mb-2'  placeholder="LastName" onChange={(e)=>setLname(e.target.value)}/>
                        <label htmlFor="uname">username</label>
                        <input type="text" className='form-control mb-2'  placeholder="username" onChange={(e)=>setUname(e.target.value)}/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" form={'form'}>save</button>
                    <button className="btn btn-danger" onClick={toggle}>cancel</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={editOpen} toggle={toggleOpen}>
                <ModalHeader>
                    Edit Users
                </ModalHeader>
                <ModalBody>

                    <form onSubmit={editSubmit} id={'form'}>
                        <label htmlFor="fname">FirstName</label>
                        <input type="text" className='form-control mb-2' onChange={(e)=>setFname(e.target.value)} placeholder="FirstName" />
                        <label htmlFor="lname">LastName</label>
                        <input type="text" className='form-control mb-2' onChange={(e)=>setLname(e.target.value)} placeholder="LastName" />
                        <label htmlFor="uname">username</label>
                        <input type="text" className='form-control mb-2' onChange={(e)=>setUname(e.target.value)} placeholder="username" />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" form={'form'}>save</button>
                    <button className="btn btn-danger" onClick={toggleOpen}>cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddModal
