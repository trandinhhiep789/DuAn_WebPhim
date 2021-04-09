import React , { useEffect, useState }  from 'react'

import Axios from 'axios'

export default function UserTimKiem ({ userLogin, onDelete, onUpdate })  {
    
    const [ketQua, setketQua] = useState({
        taiKhoan: "",
        email: "",
        matKhau: "",
        hoTen: "",
        maNhom: 'GP01',
        soDt: "",
        maLoaiNguoiDung: "",
    })
    const [user, setUser] = useState({
        MaNhom: 'GP01',
        tuKhoa: ''
    })


    if (ketQua == '') {
        return<div class="spinner-border text-danger" role="status"></div>
    } 


    const handleChange = (e) => {
        let { value, name } = e.target;
        // Thay đổi giá trị thuộc tính đang onChange
        let newTimKiem = { ...user, [name]: value };
        // Set lại state của userLogin = giá trị mới
        setUser(newTimKiem)
        console.log(newTimKiem);
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        var form_data = new FormData()

        for (var key in user) {
            console.log(key, user[key])
            form_data.append(key, user[key])
        }
        e.preventDefault()
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${user.tuKhoa}`,
            method: 'GET',
            // data: form_data
        }).then(res => {
            <div class="spinner-border text-danger" role="status"></div>
            console.log(res)
            setketQua(res.data)

            console.log(res.maLoaiNguoiDung)
            console.log("Tìm kiếm thành công")
            // }
        }).catch(err => {
            console.log("Tìm kiếm thất bại")
            console.log(err.response.data)
        })

    }
    
    const renderUser = () => {
        const filterUser = ketQua.filter(ketQua => user == ketQua.taiKhoan)
        return { ...ketQua, ketQua: filterUser }
    }

    return (
        //cách viết 2
        <>
            <div className="container-1">
                {/* <span className="icon"><i className="fa fa-search"></i></span> */}
                <form onSubmit={handleSubmit}>
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input name="tuKhoa" id="search" placeholder="Nhập vào tài khoản hoặc họ tên người dùng... " style={{ width: "100%" }} onChange={handleChange} />
                </form>

            </div>
            <div className="mt-5">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Tài khoản</th>
                            <th style={{ width: '15%' }}>Mật khẩu</th>
                            <th style={{ width: '15%' }}>Họ tên</th>
                            <th style={{ width: '15%' }}>Email</th>
                            <th style={{ width: '15%' }}>Số điện thoại</th>
                            <th style={{ width: '15%' }}>Loại người dùng</th>
                            <th style={{ width: '10%' }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="ketQuaTimKiem">
                        {renderUser}

                        {/* {ketQua.map(ketQua => ( */}

                            <tr>
                                <td scope="row">{ketQua.taiKhoan}</td>
                                <td>{ketQua.matKhau}</td>
                                <td>{ketQua.hoTen}</td>
                                <td>{ketQua.email}</td>
                                <td>{ketQua.soDt}</td>
                                <td>{ketQua.maLoaiNguoiDung}</td>

                                <td className="d-flex justify-content-center">
                                    <button className="btn mx-3 btn-outline-info" onClick={() => onUpdate(ketQua.taiKhoan, ketQua.matKhau, ketQua.hoTen, ketQua.email, ketQua.soDt, ketQua.maLoaiNguoiDung, userLogin.maLoaiNguoiDung)}>sửa</button>
                                    <button className="btn btn-outline-danger" onClick={() => onDelete(ketQua.taiKhoan, userLogin.maLoaiNguoiDung)}>X</button>
                                </td>
                            </tr>

                        {/* ))
                        } */}
                    </tbody>
                </table>
            </div>
        </>
    )
}


