import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


import { useSelector } from 'react-redux'

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4jtx9bp', 'template_v80qs64', e.target, 'user_nkVTtGK1ffFC3r91hyDiR')
        .then((result) => {
            Swal.fire('Thông báo', 'Phản hổi thành công', 'success')
            console.log(result.text);
        }, (error) => {
            Swal.fire('Thông báo', error.text, 'error')
            console.log(error.text);
        });

    e.target.reset()
}

export default function FeedBack() {


    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    return (
        <div className="feedBack">
            <div>
                <button type="button" className="nutFeedback btn bg-info text-white border border-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="chuFeedback fa fa-envelope display-4"></i><br /> <div className="fb">Feedback</div>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thông tin đóng góp</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={sendEmail}>

                                    <div className="form-group">
                                        <h6 className="font-weight-light" style={{ padding: 0 }}>Tên tài khoản</h6>
                                        <input placeholder={userLogin.taiKhoan} value={userLogin.taiKhoan} type="text" className="form-control " name="user" />
                                    </div>

                                    <div className="form-group">

                                        <h6 className="font-weight-light" style={{ padding: 0 }}>Tiêu đề</h6>
                                        <input placeholder="Tiêu đề" type="text" className="form-control " name="tieuDe" />
                                    </div>
                                    <div>
                                        <h6 className=" font-weight-light" style={{ padding: 0 }}>Nội dung</h6>
                                        <textarea placeholder="Nội dung" className="form-control text-overflow " rows="5" cols="13" name="noiDung" />
                                    </div>
                                    <button className="btn btn-info mt-5 w-100" >Gửi</button>
                                </form>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
