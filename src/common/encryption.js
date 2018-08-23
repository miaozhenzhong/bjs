// -------------------加密模块----------------------------

import CryptoJS  from 'crypto-js'
var key = 'cria.cdb.com.cn.data.key'

// AES加密密码
var _encryption = function (data,type,name) {
    var psdtext = JSON.stringify(data)
    var plaintText = CryptoJS.enc.Utf8.parse(key); 
    var encryptedData = CryptoJS.AES.encrypt(psdtext, plaintText, {  
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var encryptedStr = encryptedData.ciphertext.toString();
    if (type == 0) {
        localStorage[name] = encryptedStr
    } else {
        sessionStorage[name] = encryptedStr
    }
}

// 解密AES
var _decryptpsd = function (type,name) {
    let data = type == 0?localStorage[name]:sessionStorage[name]
    if (data) {
        var encryptedHexStr = CryptoJS.enc.Hex.parse(data);
        var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        var plaintText = CryptoJS.enc.Utf8.parse(key); 
        var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, plaintText, {  
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
        var decrypydata = JSON.parse(decryptedStr)
        if (type == 1) {
            let params = {
                userName:decrypydata.userName,
                password:decrypydata.password,
                userCNName:decrypydata.userInfo.userName,
                branchNo:decrypydata.userInfo.branchCode,
                branchName:decrypydata.userInfo.branchName,
                roleList:decrypydata.userInfo.roleList[0].roleId,
                downloadPermission: decrypydata.userInfo.downloadPermission === '0'?false:decrypydata.userInfo.downloadPermission === '1'?true:false    
            }
            return params
        } else {
            return decrypydata
        }
    }
}

export var encryption = _encryption
export var decryptu = _decryptpsd
