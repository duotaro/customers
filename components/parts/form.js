'use client';
import { useState, useEffect } from 'react'
import Head from "next/head.js";
import { formFloorOptions, formRiceVolumeOptions, formRiceOptions } from '@/utils/const.js';
import { customerStorageItem } from '@/utils/localstorage.js';
import { useRouter } from 'next/router';
 

export default function FormComponent(props) {
    const {id} = props
    console.log(id)
    // router
    const router = useRouter()

    // form 情報
    const [customerId, setCustomerId] = useState(id)
    const [name, setName] = useState('')
    const [floor, setFloor] = useState('1')
    const [prop1, setProp1] = useState(0)
    const [memo, setMemo] = useState('')
    const [solid, setSolid] = useState(false)
    //const [list, setList] = useState([])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeFloor = (e) => {
        setFloor(e.target.value)
    }
    const handleChangeMemo= (e) => {
        setMemo(e.target.value)
    }
    const handleChangeProp1 = (e) => {
        setProp1(e.target.value)
    }
    const handleChangeSolid = (e) => {
        setSolid(e.target.value)
    }

    
    let isNew = true
    let title = "登録"


    useEffect(() => {
        console.log(".............................")
        console.log(".............................")
        console.log(".............................")
        console.log(id)
        console.log(".............................")
        console.log(".............................")
        // 更新
        if(id){ 
            console.log(customerId)

            isNew = false
            title = "編集"
            // 顧客情報取得
            const {customer} = customerStorageItem.getCustomer(customerId);
            console.log(customer)
            if(!customer){
                alert("指定した顧客情報が見つかりませんでした。")
                isNew = false
            } else {
                setName(customer.name)
                setFloor(customer.floor)
                setProp1(customer.prop1)
                setSolid(customer.solid)
                setMemo(customer.memo)
            }
        }
    }, []);


    /**
     * 登録ボタン押下
     */
    const submitCustomer = () =>{
        if(!name){
            alert("名前を入力してください。")
            return
        }
        if(!floor){
            alert("所属階を入力してください。")
            return
        }
        if(!prop1){
            alert("属性1を入力してください。")
            return
        }
            
        let item = {
            name: name,
            checked: false,
            floor: floor,
            prop1: prop1,
            solid: solid,
            memo: memo
        }

        if(customerId){
            // 更新
            item.id = customerId
            customerStorageItem.updateCustomerList(customerId, item)
        } else {
            // 最新のIDを取得する
            item.id = (customerStorageItem.getLatestCustomerId() + 1)
            customerStorageItem.addCustomerList(item);
        }
        let goHome = confirm(`${title}が完了しました。Home画面に戻りますか？`);
        if(goHome){
            router.push(`/`);
        }
    }

    const addCustomerFromCSV = () =>{
        // nothing
    }


    const setTestData = () => {
        const latestId = (customerStorageItem.getLatestCustomerId() + 1)

        for(let index=2; index < 100; index++){
            let item = {
                id: latestId,
                name: 'test名',
                checked: false,
                floor: 1,
                prop1: 10,
                prop2: 50,
                memo: '',
                solid: true
            }
            item.id = Number(latestId) + index - 1
            item.name = item.name + index
            item.floor = Math.floor( Math.random() * 3 ) + 1;
            item.prop1 = 10*index
            item.memo = 'memo' + index
            customerStorageItem.addCustomerList(item);
        }
    }
    //setTestData()

 
    return (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper p-5">

            {/* Main content */}
            <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <form>
                <div className="card-body">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="顧客名" defaultValue={name} onChange={handleChangeName}/>
                </div>
                <div className="form-group">
                    <label>所属階数</label>
                    <select className="form-control" defaultValue={floor} onChange={handleChangeFloor}>
                    {
                        formFloorOptions.map((option) => {
                          return (<option value={option.value} key={option.value}>{option.label}</option>)
                        })
                    }
                    </select>
                </div>
                <div className="form-group">
                    <label>属性1</label>
                    <select className="form-control" defaultValue={prop1} onChange={handleChangeProp1}>
                    {
                        formRiceVolumeOptions.map((option) => {
                        return (<option value={option.value} key={option.value}>{option.label}</option>)
                        })
                    }
                    </select>
                </div>
                <div className="form-group">
                    <div className='row'>
                        <div className='col-4'>
                            <label>属性2 朝</label>
                            <select className="form-control" defaultValue="">
                            {
                                formRiceOptions.map((option) => {
                                return (<option value={option.value} key={option.value}>{option.label}</option>)
                                })
                            }
                            </select>
                        </div>
                        <div className='col-4'>
                            <label>属性2 昼</label>
                            <select className="form-control" defaultValue="">
                            {
                                formRiceOptions.map((option) => {
                                return (<option value={option.value} key={option.value}>{option.label}</option>)
                                })
                            }
                            </select>
                        </div>
                        <div className='col-4'>
                            <label>属性2 晩</label>
                            <select className="form-control" defaultValue="">
                            {
                                formRiceOptions.map((option) => {
                                return (<option value={option.value} key={option.value}>{option.label}</option>)
                                })
                            }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="memo">備考</label>
                    <textarea className="form-control" rows="3" id="memo" defaultValue={memo} placeholder="メモ・注意点など" onChange={handleChangeMemo}></textarea>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="solid" onChange={handleChangeSolid}/>
                    <label className="form-check-label" htmlFor="solid">固定顧客</label>
                </div>
                </div>

                <div className="card-footer">
                <div className="row">
                    <div className="form-group col">
                      <button type="submit" className="btn btn-primary" onClick={(e) => submitCustomer()}>
                        {isNew && '登録する'}{!isNew && '更新する'}
                      </button>
                    </div>
                    {/* 新規の場合のみ */}
                    {isNew &&
                        <div className="form-group col" >
                            <label htmlFor="exampleInputFile">CSVからアップロードする</label>
                            <div className="input-group">
                                <div className="custom-file">
                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                <label className="custom-file-label" htmlFor="exampleInputFile">ファイル選択</label>
                                </div>
                                <div className="input-group-append">
                                <button type="submit" className="btn btn-info" onClick={addCustomerFromCSV}>CSVで登録する</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                </div>
            </form>
            </div>
            {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        </>
    );
}
