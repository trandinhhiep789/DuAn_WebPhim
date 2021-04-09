import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../Film/Pagination'
import User from './User'
import UserTimKiem from './UserTimKiem';
import { deleteUser, updateUser } from '../../../redux/actions/Admin_NguoiDungAction'
import Axios from 'axios'

import ThemNguoiDung from './ThemNguoiDung';

import { useSelector, useDispatch } from 'react-redux'
import SuaNguoiDung from './SuaNguoiDung';

export default function QuanLyNguoiDung() {

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postPerPage, setPostPerPage] = useState(50)
    // console.log(posts)
    // useEffect(() => {
    //     const fetchPost = async () => {
    //         setLoading(true)
    //         const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung')
    //         setPosts(res.data)
    //         setLoading(false)
    //     }
    //     fetchPost()
    // }, [])

    // // Get current posts
    // const indexOfLastPost = currentPage * postPerPage
    // const indexOfFistPost = indexOfLastPost - postPerPage
    // const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

    // // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


    const xoaNguoiDung = (taiKhoan, maLoaiNguoiDung) => dispatch(deleteUser(taiKhoan, maLoaiNguoiDung));
    const suaNguoiDung = (taiKhoan, matKhau, hoTen, email, soDt, maLoaiNguoiDung, maLoaiNguoiDunguser) => dispatch(updateUser(taiKhoan, matKhau, hoTen, email, soDt, maLoaiNguoiDung, maLoaiNguoiDunguser));





    

    

    

    let taiKhoan = useSelector(state => state.stateUser.userUpdate.taiKhoan)


    const dongMo = () => {
        let action = {
            type: 'DONG_MO'
        }
        return dispatch(action)
    }

    let dk = useSelector(state => state.stateUser.congTac)

    if (dk == "mo") {
        return <div className="d-flex" style={{ justifyContent: "center" }}>
            <SuaNguoiDung />
        </div>
    }




    return (
        <div className="container w-100">
            {/* Thêm người dùng */}
            <div className="m-3">

                <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="fa fa-user-plus mr-3"></i>Thêm người dùng mới
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Thêm người dùng mới</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <ThemNguoiDung />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-primary " data-bs-dismiss="modal">Thoát</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* khung tim kiếm */}
            <div className="m-3">
                <UserTimKiem userLogin={userLogin} onUpdate={suaNguoiDung} onDelete={xoaNguoiDung} />
            </div>

            {/* bảng danh sách tất cả người dùng */}
            <div className="mt-5">
                
                <User className="w-100" userLogin={userLogin} onUpdate={suaNguoiDung} onDelete={xoaNguoiDung} />

            </div>

        </div>
    )
}

