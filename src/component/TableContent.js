import React, { Component } from 'react';
import UserRow from './UserRow';

class TableContent extends Component {
    render() {
        return (
            <div className="col">
                <table className="table table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataUser.map((value, key) => {
                                return <UserRow deleteUser={ (id) => { this.props.deleteUser(id) } } editUser={ (val) => this.props.editUser(val)} key={key} stt={key} id_user={value.id} name={value.name} phone={value.phone} privilege={value.privilege} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableContent;