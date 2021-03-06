import * as React from 'react';
import { Menu } from './components';
import { Loading } from '../../components';
import client from '../../lib/client';
export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publishmentSystems: null
        };
    }
    componentDidMount() {
        client.writing.getSites((err, res) => {
            this.state.publishmentSystems = res;
            this.setState(this.state);
        });
    }
    render() {
        if (!this.state.publishmentSystems)
            return <Loading />;
        if (this.state.publishmentSystems.length === 0) {
            return (<div id="doc3">
                <div id="bd">
                    <div className="clearfix">
                        <div className="article">
                            <div className="art-mod">
                                <div className="art-hd clearfix">
                                    <h2>投稿中心尚未开启</h2>
                                </div>
                                <div className="art-bd">
                                    <div className="mod-1">
                                        <div className="mod-reslut">
                                            <p className="f-s14">请联系站点管理员，分配站点权限之后再进入投稿中心进行投稿</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { publishmentSystems: this.state.publishmentSystems });
        });
        return (<div id="doc3">
        <Menu location={this.props.location}/>
        {children}
      </div>);
    }
}
//# sourceMappingURL=layout.jsx.map