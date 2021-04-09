import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../Film/Pagination'
import SuaNguoiDung from './SuaNguoiDung'

export default function User  ({userLogin, onDelete, onUpdate }) {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(20)
    console.log(posts)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPost()
    }, [])

    // Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFistPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)




    if (loading) {
        return<div class="spinner-border text-danger" role="status"></div>
    }



    return (
        <div>
            

            <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            {/* <th style={{ width: '10%' }}>STT</th> */}
                            <th style={{ width: '15%' }}>Tài khoản</th>
                            <th style={{ width: '15%' }}>Mật khẩu</th>
                            <th style={{ width: '15%' }}>Họ tên</th>
                            <th style={{ width: '15%' }}>Email</th>
                            <th style={{ width: '15%' }}>Số điện thoại</th>
                            <th style={{ width: '15%' }}>Loại người dùng</th>
                            <th style={{ width: '10%' }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="chinhTheTd">
                        {posts.map((post) => (

                        <tr >
                            <td scope="row">{post.taiKhoan}</td>
                            <td>{post.matKhau}</td>
                            <td>{post.hoTen}</td>
                            <td>{post.email}</td>
                            <td>{post.soDt}</td>
                            <td>{post.maLoaiNguoiDung}</td>

                            <td className="d-flex justify-content-center">

                                <button className="btn btn-outline-info ml-3" onClick={() => onUpdate(post.taiKhoan, post.matKhau, post.hoTen, post.email, post.soDt, post.maLoaiNguoiDung, userLogin.maLoaiNguoiDung)} >sua</button>

                                <button className="btn btn-outline-danger ml-3" onClick={() => onDelete(post.taiKhoan, userLogin.maLoaiNguoiDung)}>X</button>
                            </td>
                        </tr>

                        ))
                        }

                    </tbody>

            </table>


            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

