import { createCustomerCsv } from "./csv"

export let customerStorageItem = {
    getCustomerList: function(){},
    getCustomer: function(id){},
    updateCustomerList: function(id, value){},
    addCustomerList: function(value){},
    getLatestCustomerId: function(){},
    backupCustomer: function(){}
}
export let memoStorageItem = {
    getMemo: function(){},
    setMemo: function(value){},
    removeMemo: function(){}
}
export const LOCALSTORAGE_KEY_CUSTOMER_LIST = 'customerList'
export const LOCALSTORAGE_KEY_MEMO = 'memo'

if (typeof window !== "undefined" && typeof window.localStorage !== 'undefined') {
    
    /**
     * keyを使って取得
     * @param {*} key 
     * @returns 
     */
    const getItem = (key) => {
        const res = localStorage.getItem(key);
        if(!res){
            return null
        }
        return JSON.parse(res)
    }

    /**
     * keyに対して設定
     */
    const setItem = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }


    /**
     * keyに対して設定
     */
    // const removeItem = (key) => {
    //     localStorage.removeItem(key);
    // }


    /***************************************************
     *      顧客関連
     ***************************************************/
    const getCustomerList = () => {
        const res = getItem(LOCALSTORAGE_KEY_CUSTOMER_LIST);
        if(!res){
            return []
        }
        return res
    }
    customerStorageItem.getCustomerList = getCustomerList


    /**
     * 顧客一覧からさらにidで絞り込み
     * @param {*} id
     * @returns 
     */
    const getCustomer = (id) => {
        const res = getItem(LOCALSTORAGE_KEY_CUSTOMER_LIST);
        console.log(`----------------`)
        console.log(`----------------`)
        console.log(`----------------`)
        console.log(`id is ${id}`)
        console.log(res)
        if(!res){
            return {
                list: [],
                customer: null
            }
        }
        // リストである前提だけどいいかな？
        let customer = null;
        for(const item of res){
            if(item.id == id){
                customer = item
            }
        }
        return {
            list: res,
            customer: customer
        }
    }
    customerStorageItem.getCustomer = getCustomer


    /**
     * 最新の顧客IDを取得します
     * @returns 
     */
    const getLatestCustomerId = () => {
        const res = getItem(LOCALSTORAGE_KEY_CUSTOMER_LIST);
        if(!res){
            return 0
        }
        const latestCustomer = res.slice(-1)[0];
        if(!latestCustomer){
            return 0
        }
        return latestCustomer.id
    }
    customerStorageItem.getLatestCustomerId = getLatestCustomerId

    /**
     * 指定顧客情報更新
     * @param {*} value 
     * @returns 
     */
    const addCustomerList = (value) => {
        // 新規登録なので上書きではないことを確認してみる
        const list = getItem(LOCALSTORAGE_KEY_CUSTOMER_LIST) || []
        // let doCreate = confirm(`以下の内容で作成します。よろしいですか？${JSON.stringify(value)}`);
        // if(!doCreate) {
        //     return
        // }
        let matchName = false
        if(list && list.length > 0){
            for(const item of list) {
                if(item.name == value.name) {
                    matchName = true;
                }
            }
            if(matchName){
                if(!confirm("同一名の顧客が存在します。上書きではなく、新規登録しますか？")){
                    return 
                }
            }
        }
        // リストに追加
        let createList = list;
        createList.push(value)
        setItem(LOCALSTORAGE_KEY_CUSTOMER_LIST, createList);
    }
    customerStorageItem.addCustomerList = addCustomerList

    /**
     * 指定顧客情報更新
     * @param {*} id 
     * @param {*} value 
     * @returns 
     */
    const updateCustomerList = (id, value) => {
        const list = getItem(LOCALSTORAGE_KEY_CUSTOMER_LIST)
        let doUpdate = confirm(`以下の内容で変更します。よろしいですか？${JSON.stringify(value)}`);
        if(!doUpdate) {
            return
        }
        let updateList = []
        for(const item of list) {
            if(item.id == id) {
                updateList.push(value)
            }  else {
                updateList.push(item)
            }
        }
        setItem(LOCALSTORAGE_KEY_CUSTOMER_LIST, updateList);
    }
    customerStorageItem.updateCustomerList = updateCustomerList

    /**
     * バックアップを取得します
     */
    const backupCustomer = (key) => {
        const res = localStorage.getItem(key);
        if(!res){
            return
        }
        const jsonRes = JSON.stringify(res)
        localStorage.setItem(`${LOCALSTORAGE_KEY_CUSTOMER_LIST}_old`, jsonRes);
        createCustomerCsv(jsonRes)
    }
    customerStorageItem.backupCustomer = backupCustomer



    /***************************************************
     *      メモ
     ***************************************************/
}
