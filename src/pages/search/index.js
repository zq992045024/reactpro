import React, { Component } from 'react'
import { Searche } from "./styled"
import { Link } from "react-router-dom"
import { hot_set, hot_seach} from "@api/theater"
import BScrollComponent from "@common/bscroll";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputval:"",
            flag:true,
            display:'block',
            arr:[]
        }

    }
    render() {
        let { list,arr } = this.state
        console.log(arr)
        return (
            <Searche>
                <div className="search-header">
                    <div className="cancel"><Link to="/home">返回</Link></div>
                    <div className="ui-inner">
                        <input type="text" onChange={this.handleInputval.bind(this)} placeholder="搜索明星、演出、场馆" />
                    </div>
                    <div className="suggest-end">查找</div>
                </div>
                <BScrollComponent ref="bscroll">
                <div className="search_list">
                    {
                        arr.map((item,index)=>(
                            <Link to="/mydetails" key={index}>
                                <div className="list-img">
                                    <img src={item.poster} alt=""/>
                                </div>
                                <div className="list-info">
                                    <h3>{item.shortname}</h3>
                                    <div className="info_">
                                        <div>评分<span>{item.rank}</span></div>
                                        <div><i>￥{item.lowPrice}</i>&nbsp;起</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="default-search" style={{ display: this.state.display }}>
                    <div className="row-title">热门搜索</div>

                    <div className="hot-searches">
                        {
                            list.map((item, index) => (
                                <div className="keyword" key={index}>{item.keyword}</div>
                            ))
                        }
                    </div>
                    <div className="row-title">搜索记录</div>
                    <div className="search-history">
                        <ul>
                            <li className="remove-all"></li>
                        </ul>
                    </div>
                </div>
                </BScrollComponent>
            </Searche>
        )
    }
    componentDidMount() {
        this.handlehotset();
    }
    async handlehotset() {
        let data = await hot_set();
        this.setState({
            list: data,
        })
    }
    
    async handleseach(input) {
        clearTimeout(this.timer)
        this.timer = setTimeout
        let hot_data = await hot_seach(input);
        this.setState({
            arr:hot_data
        })
    }
    handleInputval(e,newVal,oldVal){

        this.setState({
            inputval:e.target.value,
        },()=>{
                clearTimeout(this.timer)
                this.timer = setTimeout(async () => {
                    this.handleseach(this.state.inputval);
            }, 500)
            // this.handleseach(this.state.inputval);
        })

    }
}
