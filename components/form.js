'use client';
import { useState } from 'react'
import Head from "next/head.js";
import { formFloorOptions, formRiceOptions } from '@/utils/const.js';
import { customerStorageItem } from '@/utils/localstorage.js';
import { useRouter } from 'next/router';
 

export default function FormComponent({id}) {
    
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
    // 更新
    if(customerId){
        isNew = false
        title = "編集"
        // 顧客情報取得
        const { customer } = customerStorageItem.getCustomer(customerId);
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
 
    return (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper p-5">

            {/* Main content */}
            <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">{title}</h3>
            </div>
            <form>
                <div class="card-body">
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="顧客名" defaultValue={name} onChange={handleChangeName}/>
                </div>
                <div class="form-group">
                    <label>所属階数</label>
                    <select class="form-control" defaultValue={floor} onChange={handleChangeFloor}>
                    {
                        formFloorOptions.map((option) => {
                          return (<option value={option.value} key={option.value}>{option.label}</option>)
                        })
                    }
                    </select>
                </div>
                <div class="form-group">
                    <label>お米の量</label>
                    <select class="form-control" defaultValue={prop1} onChange={handleChangeProp1}>
                    {
                        formRiceOptions.map((option) => {
                        return (<option value={option.value} key={option.value}>{option.label}</option>)
                        })
                    }
                    </select>
                </div>
                <div class="form-group">
                    <label>その他</label>
                    <select class="form-control" defaultValue="">
                    {
                        formRiceOptions.map((option) => {
                        return (<option value={option.value} key={option.value}>{option.label}</option>)
                        })
                    }
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="memo">備考</label>
                    <textarea class="form-control" rows="3" id="memo" placeholder="メモ・注意点など" onChange={handleChangeMemo}></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="solid" onChange={handleChangeSolid}/>
                    <label class="form-check-label" htmlFor="solid">固定顧客</label>
                </div>
                </div>

                <div class="card-footer">
                <div className="row">
                    <div class="form-group col">
                      <button type="submit" class="btn btn-primary" onClick={(e) => submitCustomer()}>
                        {isNew && '登録する'}{!isNew && '更新する'}
                      </button>
                    </div>
                    {/* 新規の場合のみ */}
                    {isNew &&
                        <div class="form-group col" >
                            <label htmlFor="exampleInputFile">CSVからアップロードする</label>
                            <div class="input-group">
                                <div class="custom-file">
                                <input type="file" class="custom-file-input" id="exampleInputFile" />
                                <label class="custom-file-label" htmlFor="exampleInputFile">ファイル選択</label>
                                </div>
                                <div class="input-group-append">
                                <button type="submit" class="btn btn-info" onClick={addCustomerFromCSV}>CSVで登録する</button>
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
