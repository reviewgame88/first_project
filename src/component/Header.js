import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue : ''
        }
    }
    
    fillSearchValue = (event) => {     
        this.setState({
            searchValue : event.target.value.trim()
        }, () => {
            this.props.getSearchValue(this.state.searchValue);
        });      
    }


    checkButton = () => {
        if (this.props.statusButton) {
            return (
                <div className="col-2">
                    <div className="btn btn-success btn-sm cursor-pointer" onClick={() => this.props.changeStatusButton()} > <i className="fa fa-add" /> Thêm
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="col-2">
                    <div className="btn btn-danger btn-sm cursor-pointer" onClick={() => this.props.changeStatusButton()}> <i className="fa fa-close" /> Đóng
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="jumbotron col-12">
                    <h4 className="display-5">Project quản lý thành viên bằng ReactJS với dữ liệu json</h4>
                    <p />
                </div>
                <div className="row">
                    <div className="form-group col-8">
                        <div className="btn-group">
                            <input type="text" id="search" className="form-control" onInput={ (event) => this.fillSearchValue(event) } autoComplete="false" placeholder="" aria-describedby="helpId" />
                            <div className="btn btn-primary col-4 cursor-pointer" onClick={ (data) => this.props.getSearchValue(this.state.searchValue) } role="button">Tìm kiếm</div>
                        </div>
                    </div>
                    { this.checkButton() }
                    <hr />
                </div>
            </div>
        );
    }
}

export default Header;