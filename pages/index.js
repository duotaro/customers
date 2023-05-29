'use client';
import { useState, useEffect } from 'react'
import Head from "next/head.js";
import Layout from '../components/layout.js'
import { testData } from "@/utils/const.js";
import { customerStorageItem } from '@/utils/localstorage.js';

export default function Home({}) {
  
  const [list, setList] = useState(testData)
  const [total, setTotal] = useState({
    total: 0,
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
  })

  /**
   * 全選択
   * @param {*} e 
   */
  const handleAll = (e) => {
    setList([]);
    let resultList = []
    for(const item of list){
      item.checked = true
      resultList.push(item)
    }
    setListAndCalc(resultList)
  }

  /**
   * 除外
   */
  const handleRemove = (e) => {
    
    setList([]);
    let resultList = []
    for(const item of list){
      item.checked = false
      resultList.push(item)
    }
    setListAndCalc(resultList)
  }


  /**
   * 固定の顧客のみ選択
   */
  const handleSolid = () => {
    
    setList([]);
    let resultList = []
    for(const item of list){
      item.checked = item.solid
      resultList.push(item)
    }
    setListAndCalc(resultList)
  }

  /**
   * チェック追加
   */
  const handleAddCheck = (e, id) => {
    setList([]);
    console.log(e)
    console.log(id)
    let resultList = []
    for(const item of list){
      if(item.id == id){
        item.checked = e.target.checked
      }      
      resultList.push(item)
    }
    setListAndCalc(resultList)
  }

  /**
   * 名前検索
   * @param {*} e 
   */
  const handleChangeName = (e) => {
    setList([]);
    const name = e.target.value
    if(!name){
      setListAndCalc(testData)
    }
    let resultList = []
    for(const item of list){
      if(item.name == name){
        console.log(item)
        resultList.push(item)
      }      
    }
    setListAndCalc(resultList)
  }


  /**
   * 一覧設定と再計算
   * @param {*} resultList 
   */
  const setListAndCalc = (resultList) => {
    if(!resultList){
      resultList = testData
    }
    setList(resultList);
    let total1 = 0
    let total2 = 0
    let total3 = 0
    let total4 = 0
    for(const item of resultList) {
      if(!item.checked){
        continue
      }
      if(item.floor == 1){
        total1 += item.prop1
      } else if(item.floor == 2){
        total2 += item.prop1
      } else if(item.floor == 3){
        total3 += item.prop1
      } else if(item.floor == 4){
        total4 += item.prop1
      } 
    }
    const amount = (total1+total2+total3+total4)
    setTotal({
      amount,
      total1,
      total2,
      total3,
      total4
    })
  }

  const customers = customerStorageItem.getCustomerList()
  console.error(customers);
  useEffect(() => {
  
    console.error(customers);
    setListAndCalc(customers)
  }, [customers]);
  
  return (
    <Layout>
      <Head>
        <title>管理</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{total.total1}</h3>
                    <p>1階</p>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{total.total2}</h3>
                    <p>2階</p>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{total.total3}</h3>
                    <p>3階</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{total.total4}</h3>
                    <p>4階</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph"></i>
                  </div>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg connectedSortable">

                <div className="mb-3">
                  <div  className="icheck-primary d-inline ml-2">
                    <button type="submit" className="btn btn-primary" onClick={handleAll}>全選択</button>
                  </div>
                  <div  className="icheck-primary d-inline ml-2">
                    <button type="submit" className="btn btn-warning" onClick={handleRemove}>選択解除</button>
                  </div>
                  <div  className="icheck-primary d-inline ml-2">
                    <button type="submit" className="btn btn-info" onClick={handleSolid}>固定選択</button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="form-group col-lg-4">
                    <label htmlFor="nameForm">Name</label>
                    <input type="email" className="form-control" id="nameForm" placeholder="100" onChange={handleChangeName}/>
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="prop1">属性2</label>
                    <input type="email" className="form-control" id="prop1" placeholder="120"/>
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="prop2">属性3</label>
                    <input type="email" className="form-control" id="prop2" placeholder="5"/>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">一覧</h3>
                  </div>

                  <div className="card-body">
                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                      <div className="row">
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                            <thead>
                            <tr>
                              <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >チェック</th>
                              <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >ID/Name</th>
                              <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >階</th>
                              <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >prop1</th>
                              <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >prop2</th>
                            </tr>
                            </thead>
                            <tbody>
                              {list.map((data) => {
                                return (
                                  <tr className="odd" key={data.id}>
                                    <td className="dtr-control sorting_1" tabIndex="0">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id={`listCheck${data.id}`} onClick={(event) => handleAddCheck(event, data.id)} defaultChecked={data.checked}/>
                                      </div>
                                    </td>
                                    <td className="dtr-control sorting_1" tabIndex="0">{data.id} / {data.name}</td>
                                    <td>{data.floor}階</td>
                                    <td>{data.prop1}</td>
                                    <td>{data.prop2}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th rowSpan="1" colSpan="1">Rendering engine</th>
                                <th rowSpan="1" colSpan="1">Browser</th>
                                <th rowSpan="1" colSpan="1">Platform(s)</th>
                                <th rowSpan="1" colSpan="1">Engine version</th>
                                <th rowSpan="1" colSpan="1">CSS grade</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </section>
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

    </Layout>
  );
}
