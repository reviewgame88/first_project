import React, { Component } from 'react';

class UserRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrEditRow: false,
            id: this.props.id_user,
            fName: this.props.name,
            fPhone: this.props.phone,
            fPri: this.props.privilege
        }
    }

    getRowValue = (event) => {
        const fKey = event.target.name;
        const fValue = event.target.value;

        this.setState({
            [fKey]: fValue
        }, () => {
        });

    }

    sendEditUser = () => {
        var item = {};
        item.id = this.state.id;
        item.name = this.state.fName;
        item.phone = this.state.fPhone;
        item.privilege = this.state.fPri;
        this.props.editUser(item);
    }

    checkButton = () => {
        if (this.state.arrEditRow) {
            return (
                <div>
                    <div onClick={() => { this.setEditRow(this.props.id_user); this.sendEditUser() }} className="btn btn-warning btn-sm cursor-pointer"> <i className="fa fa-edit" /> Lưu
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div onClick={() => this.setEditRow(this.props.id_user)} className="btn btn-warning btn-sm cursor-pointer"> <i className="fa fa-edit" /> Sửa
                    </div>
                    <div className="btn btn-danger btn-sm cursor-pointer" onClick={(id) => { if (window.confirm('Delete the item?')) { this.props.deleteUser(this.props.id_user) } }} > <i className="fa fa-remove" /> Xóa
                    </div>
                </div>
            )
        }
    }

    setEditRow = () => {
        this.setState({
            arrEditRow: !this.state.arrEditRow
        }, () => {

        });
    }

    render() {
        let privelege_name = "";
        switch (parseInt(this.props.privilege)) {
            case 1:
                privelege_name = "Admin";
                break;
            case 2:
                privelege_name = "Moderator";
                break;
            case 3:
                privelege_name = "User";
                break;
            default:
                break;
        }
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>
                    {(() => {
                        if (this.state.arrEditRow) {
                            return (
                                <input type="text" name="fName" id="f_name" onChange={(event) => this.getRowValue(event)} className="form-control" defaultValue={this.props.name} aria-describedby="helpId" />
                            )
                        } else {
                            return (
                                <div>{this.props.name}</div>
                            )
                        }
                    })()}
                </td>
                <td>
                    {(() => {
                        if (this.state.arrEditRow) {
                            return (
                                <input type="text" name="fPhone" id="f_phone" onChange={(event) => this.getRowValue(event)} className="form-control" defaultValue={this.props.phone} aria-describedby="helpId" />
                            )
                        } else {
                            return (
                                <div>{this.props.phone}</div>
                            )
                        }
                    })()}
                </td>
                <td>
                    {(() => {
                        if (this.state.arrEditRow) {
                            return (
                                <select className="form-control" onChange={(event) => this.getRowValue(event)} defaultValue={this.props.privilege} name="fPri">
                                    <option value="1">Admin</option>
                                    <option value="2">Moderator</option>
                                    <option value="3">User</option>
                                </select>
                            )
                        } else {
                            return (
                                <div>{privelege_name}</div>
                            )
                        }
                    })()}
                </td>
                <td>
                    <div className="btn-group">
                        {this.checkButton()}
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserRow;