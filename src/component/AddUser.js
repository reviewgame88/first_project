import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getFormValue = (event) => {
        let fName = event.target.name;
        let fValue = event.target.value;
        this.setState({
            [fName]: fValue
        });
    }

    render() {
        if (!this.props.statusButton) {
            return (
                <div className="">
                    <div className="card">
                        <div className="card-header">
                            Nhập thông tin
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="f_name">Tên</label>
                                    <input type="text" name="fName" id="f_name" onChange={(event) => this.getFormValue(event)} className="form-control" placeholder="Nhập tên" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="f_phone">Điện thoại</label>
                                    <input type="text" name="fPhone" id="f_phone" onChange={(event) => this.getFormValue(event)} className="form-control" placeholder="Nhập điện thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phân quyền</label>
                                    <select className="form-control" onChange={(event) => this.getFormValue(event)} name="fPri">
                                        <option value="">Chọn phân quyền</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">User</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="reset" onClick={(name, tel, privelege) => this.props.addUser(this.state.fName, this.state.fPhone, this.state.fPri)} className="btn btn-primary btn-sm btn-block">Thêm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default AddUser;