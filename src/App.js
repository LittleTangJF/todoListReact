import React from 'react'
import Menu from './components/Menu'
import {menuList} from './mock/menu'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePath: []
        }
    }
    render() {
        return (
            <Menu
                list={menuList}
                dep={0}
                activePath={this.state.activePath}
                changeActivePath={this.changeActivePath.bind(this)}
            />
        )
    }
    changeActivePath(dep, id, list) {
        let activePath = this.state.activePath
        if (!activePath[dep] || dep == activePath.length - 1) {
            //最后一个 添进去即可
            activePath[dep] = id
        } else {
            //重新构建整个activePath数组
            activePath[dep] = id
            let cur = []
            for (let i = 0; i < list.length; i++) {
                let itemId = list[i].id
                if (itemId == id) {
                    cur = list[i]
                    break
                }
            }
            setPath(dep + 1, cur)
        }
        function setPath(dep, cur) {
            if (cur.children) {
                activePath[dep] = cur.children[0].id
                setPath(dep + 1, cur.children[0])
            }
        }
        this.setState({
            activePath
        })
    }
}
export default App