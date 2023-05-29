



//現在スタックされているデータをCSVに変換してダウンロードする
export const createCustomerCsv = (list) => {
    // csv形式に変換
    const csvData = arrayToCsv(list);
    // csv出力
    exportCsv(csvData, 'exportData', true);
}

/**
 * リストをCSVデータに変換します。
 * @param {*} list 
 * @returns 
 */
const arrayToCsv = (list) => {
    const keys = [];
    list.forEach((data) => {
        Object.keys(data).forEach((key) => {
        if (keys.indexOf(key) === -1) {
            keys.push(key);
        }
        });
    });


    const lineArray = [keys.join(',')].concat(
        array.map((data) => keys.map((key) => {
          let valueString = '';
          if (typeof data[key] === 'number') {
            valueString = data[key];
          } else if (typeof data[key] === 'string') {
            valueString = `"${data[key]}"`;
          } else {
            valueString = `"${JSON.stringify(data[key]).replace(/"/g, '""')}"`;
          }
          return valueString;
        }).join(',')),
    );
    return lineArray.join('\r\n');
}

/**
 * CSVに出力します
 * @param {*} csvContent 
 * @param {*} fileName 
 * @param {*} insertTimestampToFilename 
 */
const exportCsv = (csvContent, fileName, insertTimestampToFilename) => {
    const downLoadLink = document.createElement('a');
    let name = fileName;
    if (insertTimestampToFilename) {
        const nameArray = name.split('.');
        const timestamp = new Date().toLocaleString().replace(/[/ :]/g, '_');
        nameArray[0] = `${nameArray[0]}_${timestamp}`;
        name = nameArray.join('.');
    }
    downLoadLink.download = name;
    downLoadLink.href = URL.createObjectURL(new Blob([csvContent], { type }));
    downLoadLink.dataset.downloadurl = ['text/csv', downLoadLink.download, downLoadLink.href].join(':');
    downLoadLink.click();
}