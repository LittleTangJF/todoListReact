import React, { Component } from 'react'
import './index.less'
class Menu extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let { id } = this.props.list[0]
        let { dep, activePath } = this.props
        if (!activePath[dep]) {
            this.props.changeActivePath(dep, id, this.props.list)
        }
    }

    renderMore(list, dep) {
        let moreList = [], id
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == this.props.activePath[this.props.dep]) {
                moreList = list[i].children
                id = list[i].id
                break;
            }
        }
        if (Array.isArray(moreList) && moreList.length > 0) {
            return (
                <Menu
                    list={moreList}
                    dep={dep + 1}
                    activePath={this.props.activePath}
                    changeActivePath={this.props.changeActivePath.bind(this)}
                />
            )
        }
    }
    clickItem(id) {
        this.props.changeActivePath(this.props.dep, id, this.props.list)
    }
    render() {
        let { list, dep } = this.props,
            renderList = list
        return (
            <div>
                <ul className="list">
                    {renderList.map(item => {
                        return <li id={item.id}
                            onClick={this.clickItem.bind(this, item.id)}
                            className={this.props.activePath.includes(item.id) ? 'active' : ''}
                            key={item.id}>{item.name}
                        </li>
                    })}
                </ul>
                {this.renderMore(list, dep)}
            </div>
        )
    }
}
export default Menu