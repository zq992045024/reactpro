import React, { Component} from 'react'
import { Detail } from "./styled"
import { theater_wrap } from "@api/theater"
// import BScrollComponent from "@common/bscroll";
export default class Details extends Component {
    // constructor(props) {
    //     super(props);
    //     // let  ite  = this.props.location.query;
    //     // this.state = {
    //     //     name:ite
    //     // }
    //     // console.log(props)
    // }
    render() {

        return (
            <Detail>
                <div className="navbar">
                    <div className="navbar-inner">
                        <div className="left">
                            <a href="http://localhost:3000/#/theater" className="link js-back-link">
                                <span className="iconfont">&#xe62b;</span>
                            </a>
                        </div>
                        <div className="center">南山文体中心</div>
                        <div className="right">
                            <a href="http://localhost:3000/#/details" className="link open-panel icon-only js-popover-link">
                                <span className="iconfont">&#xe64d;</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content">
                <div className="category-container ">
                    <div className="category-wrap ">
                        <a className="cate-link " href="https://m.juooo.com/Theatre/showList?tid=2">
                            <div className="img-box">
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-show.png " alt=" " /></div>
                            <p className="classify ">演出</p>
                        </a>
                        <a className="cate-link" href="https://m.juooo.com/Theatre/calendar?tid=2">
                            <div className="img-box ">
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-calendar.png " alt=" " /></div>
                            <p className="classify ">日历</p>
                        </a>
                        <a className="cate-link " href="https://m.juooo.com/Theatre/theatreDetail?tid=2">
                            <div className="img-box">
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-theater.png" alt=" " /></div>
                            <p className="classify ">剧院</p>
                        </a>
                        <a className="cate-link" href="#seckillWrap">
                            <div className="img-box ">
                                <img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-offer.png" alt=" " /></div>
                            <p className="classify ">特惠</p>
                        </a>
                    </div>
                </div>
                <div className="hot-wrap ">
                    <div className="title ">热门演出</div>
                    <div className="show-wrap ">
                        <div className="list-wrap ">
                            <a className="show-item clearfix " href="https://m.juooo.com/ticket/101962">
                                <div className="show-left fl ">
                                    <img src="https://image.juooo.com//group1/M00/02/BA/rAoKmV0HKROANbIoAAC-qZa523k987.jpg" alt=" " />
                                </div>
                                <div className="show-right fl ">
                                    <p className="title ">法国音乐剧《放牛班的春天》中文版 暖心上演--深圳</p>
                                    <p className="show-time ">
                                        <span className="day ">2019.08.30 - 2019.09.01</span>
                                    </p>
                                    <p className="show-venue ">
                                        <span className="vunue ">南山文体中心</span>
                                    </p>
                                    <p className="ft0 price">
                                        <span className="fs24 mr8">¥</span>
                                        <span className="fs32">180</span>
                                        <span className="fs24 mr8">起</span>
                                    </p>
                                </div>
                            </a>
                            <a className="show-item clearfix " href="https://m.juooo.com/ticket/101962">
                                <div className="show-left fl ">
                                    <img src="https://image.juooo.com//group1/M00/02/BA/rAoKmV0HKROANbIoAAC-qZa523k987.jpg" alt=" " />
                                </div>
                                <div className="show-right fl ">
                                    <p className="title ">法国音乐剧《放牛班的春天》中文版 暖心上演--深圳</p>
                                    <p className="show-time ">
                                        <span className="day ">2019.08.30 - 2019.09.01</span>
                                    </p>
                                    <p className="show-venue ">
                                        <span className="vunue ">南山文体中心</span>
                                    </p>
                                    <p className="ft0 price">
                                        <span className="fs24 mr8">¥</span>
                                        <span className="fs32">180</span>
                                        <span className="fs24 mr8">起</span>
                                    </p>
                                </div>
                            </a>
                            <a className="show-item clearfix " href="https://m.juooo.com/ticket/101962">
                                <div className="show-left fl ">
                                    <img src="https://image.juooo.com//group1/M00/02/BA/rAoKmV0HKROANbIoAAC-qZa523k987.jpg" alt=" " />
                                </div>
                                <div className="show-right fl ">
                                    <p className="title ">法国音乐剧《放牛班的春天》中文版 暖心上演--深圳</p>
                                    <p className="show-time ">
                                        <span className="day ">2019.08.30 - 2019.09.01</span>
                                    </p>
                                    <p className="show-venue ">
                                        <span className="vunue ">南山文体中心</span>
                                    </p>
                                    <p className="ft0 price">
                                        <span className="fs24 mr8">¥</span>
                                        <span className="fs32">180</span>
                                        <span className="fs24 mr8">起</span>
                                    </p>
                                </div>
                            </a>
                            <a className="show-item clearfix " href="https://m.juooo.com/ticket/101962">
                                <div className="show-left fl ">
                                    <img src="https://image.juooo.com//group1/M00/02/BA/rAoKmV0HKROANbIoAAC-qZa523k987.jpg" alt=" " />
                                </div>
                                <div className="show-right fl ">
                                    <p className="title ">法国音乐剧《放牛班的春天》中文版 暖心上演--深圳</p>
                                    <p className="show-time ">
                                        <span className="day ">2019.08.30 - 2019.09.01</span>
                                    </p>
                                    <p className="show-venue ">
                                        <span className="vunue ">南山文体中心</span>
                                    </p>
                                    <p className="ft0 price">
                                        <span className="fs24 mr8">¥</span>
                                        <span className="fs32">180</span>
                                        <span className="fs24 mr8">起</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </Detail>
        )
    }
    componentDidMount() {
        this.handleDetail();
    }
    async handleDetail() {
        let data = await theater_wrap();
        // let list = data.data.theatre_list;
        console.log(data)
    }
}

