export const defaultProps = {
     /** フォームで使う */
    'form': [],
    /** 一覧表示項目名 */
    'listHeader': [],
    /**  */
    'csv': [],
}

/**
 * testデータ
 */
export const testData = [
    {
        id: 1,
        name: 'test1',
        checked: false,
        floor: 1,
        prop1: 100,
        prop2: 500,
        memo: 'ラーメン好き',
        solid: true
    },
    {
        id: 2,
        name: 'test2',
        checked: false,
        floor: 2,
        prop1: 100,
        prop2: 500,
        memo: 'コンビニ弁当を好む',
        solid: true
    },
    {
        id: 3,
        name: 'test3',
        checked: false,
        floor: 3,
        prop1: 100,
        prop2: 500,
        memo: '',
        solid: true
    },
    {
        id: 4,
        name: 'test4',
        checked: false,
        floor: 4,
        prop1: 100,
        prop2: 500,
        memo: '',
        solid: true
    },
    {
        id: 5,
        name: 'test5',
        checked: false,
        floor: 1,
        prop1: 100,
        prop2: 500,
        memo: 'ラーメン嫌い',
        solid: false
    }
]





/***********************************:
 * 登録・編集フォーム
 */


export const formFloorOptions = [
    { value: "1", label: "1階" },
    { value: "2", label: "2階" },
    { value: "3", label: "3階" },
    { value: "4", label: "4階" },
    { value: "none", label: "-" },
];

export const formRiceOptions = [
    { value: "none", label: "なし" },
    { value: "1", label: "50g" },
    { value: "2", label: "100g" },
    { value: "3", label: "150g" },
    { value: "4", label: "200g" },
];
  
